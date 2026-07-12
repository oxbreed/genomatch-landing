import { getScdNewsFeed } from '@/lib/scd-news-feed'
import ScdNewsTickerMarquee from './ScdNewsTickerMarquee'

export default async function ScdNewsTicker() {
  let items: Awaited<ReturnType<typeof getScdNewsFeed>>['items'] = []
  try {
    const feed = await getScdNewsFeed(10)
    items = feed.items
  } catch {
    return null
  }

  if (items.length === 0) return null
  return <ScdNewsTickerMarquee items={items} />
}
