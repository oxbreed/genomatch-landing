/** Fetches and parses sickle-cell health headlines from public RSS feeds. */

export type ScdNewsItem = {
  id: string
  title: string
  url: string
  publishedAt: string
  source: string
  feedLabel: string
}

export const SCD_NEWS_REVALIDATE_SECONDS = 6 * 60 * 60 // refresh every 6 hours

const RSS_FEEDS = [
  {
    id: 'nigeria',
    label: 'Nigeria',
    url: 'https://news.google.com/rss/search?q=sickle+cell+disease+Nigeria&hl=en-US&gl=US&ceid=US:en',
  },
  {
    id: 'africa',
    label: 'Africa',
    url: 'https://news.google.com/rss/search?q=sickle+cell+disease+Africa&hl=en-US&gl=US&ceid=US:en',
  },
  {
    id: 'research',
    label: 'Research & treatment',
    url: 'https://news.google.com/rss/search?q=sickle+cell+research+OR+treatment+OR+genotype&hl=en-US&gl=US&ceid=US:en',
  },
] as const

function decodeXml(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .trim()
}

function tagValue(block: string, tag: string): string {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'))
  return match ? decodeXml(match[1]) : ''
}

function parseRss(xml: string, feedLabel: string): ScdNewsItem[] {
  const items: ScdNewsItem[] = []

  for (const match of xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)) {
    const block = match[1]
    const title = tagValue(block, 'title')
    const url = tagValue(block, 'link')
    const publishedAt = tagValue(block, 'pubDate')
    const source = tagValue(block, 'source') || feedLabel

    if (!title || !url) continue

    items.push({
      id: url,
      title,
      url,
      publishedAt,
      source,
      feedLabel,
    })
  }

  return items
}

function itemTimestamp(item: ScdNewsItem): number {
  const parsed = Date.parse(item.publishedAt)
  return Number.isNaN(parsed) ? 0 : parsed
}

async function fetchFeed(feed: (typeof RSS_FEEDS)[number]): Promise<ScdNewsItem[]> {
  const response = await fetch(feed.url, {
    headers: {
      'User-Agent': 'GenoMatch/1.0 (+https://genomatch.app)',
      Accept: 'application/rss+xml, application/xml, text/xml',
    },
    next: { revalidate: SCD_NEWS_REVALIDATE_SECONDS, tags: ['scd-news'] },
  })

  if (!response.ok) {
    throw new Error(`Feed ${feed.id} returned ${response.status}`)
  }

  const xml = await response.text()
  return parseRss(xml, feed.label)
}

export async function getScdNewsFeed(limit = 12): Promise<{
  items: ScdNewsItem[]
  fetchedAt: string
  feedCount: number
}> {
  const results = await Promise.allSettled(RSS_FEEDS.map((feed) => fetchFeed(feed)))

  const seen = new Set<string>()
  const merged: ScdNewsItem[] = []

  for (const result of results) {
    if (result.status !== 'fulfilled') continue

    for (const item of result.value) {
      const key = item.url.toLowerCase()
      if (seen.has(key)) continue
      seen.add(key)
      merged.push(item)
    }
  }

  merged.sort((a, b) => itemTimestamp(b) - itemTimestamp(a))

  return {
    items: merged.slice(0, limit),
    fetchedAt: new Date().toISOString(),
    feedCount: RSS_FEEDS.length,
  }
}

export function formatNewsDate(isoOrRfc: string): string {
  const date = new Date(isoOrRfc)
  if (Number.isNaN(date.getTime())) return isoOrRfc

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
