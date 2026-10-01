import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/seo/blog-posts'
import { SITE_URL } from '@/lib/seo/site'

const PAGES: Array<{
  path: string
  lastModified: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}> = [
  { path: '/', lastModified: '2026-09-30', changeFrequency: 'weekly', priority: 1 },
  { path: '/mission', lastModified: '2026-06-22', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/partners', lastModified: '2026-06-22', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog', lastModified: '2026-06-22', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/blog/news', lastModified: '2026-09-30', changeFrequency: 'daily', priority: 0.85 },
  { path: '/faq', lastModified: '2026-06-22', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/contact', lastModified: '2026-06-22', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy', lastModified: '2026-06-01', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/terms', lastModified: '2026-06-01', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/support', lastModified: '2026-06-22', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/delete-account', lastModified: '2026-06-22', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = PAGES.map((page) => ({
    url: page.path === '/' ? SITE_URL : `${SITE_URL}${page.path}`,
    lastModified: new Date(page.lastModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticEntries, ...blogEntries]
}
