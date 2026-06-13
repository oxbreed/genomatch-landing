import { getScdNewsFeed } from '@/lib/scd-news-feed'
import ScdNewsTickerMarquee from './ScdNewsTickerMarquee'

export default async function ScdNewsTicker() {
  try {
    const { items } = await getScdNewsFeed(10)
    if (items.length === 0) return null
    return <ScdNewsTickerMarquee items={items} />
  } catch {
    return null
  }
}
