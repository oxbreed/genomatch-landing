'use client'

import Link from 'next/link'
import type { ScdNewsItem } from '@/lib/scd-news-feed'
import SickleCellRibbon from './SickleCellRibbon'

type ScdNewsTickerMarqueeProps = {
  items: ScdNewsItem[]
}

export default function ScdNewsTickerMarquee({ items }: ScdNewsTickerMarqueeProps) {
  const loop = [...items, ...items]

  return (
    <aside
      className="scd-news-ticker"
      aria-label="Latest sickle cell health news headlines"
    >
      <div className="scd-news-ticker-bar">
        <div className="scd-news-ticker-label">
          <SickleCellRibbon size={16} variant="light" className="scd-news-ticker-mark shrink-0" />
          <span className="scd-news-ticker-label-text">SCD News</span>
          <Link href="/blog/news" className="scd-news-ticker-more">
            View all
          </Link>
        </div>

        <div className="scd-news-ticker-viewport">
          <div
            className="scd-news-ticker-track"
            style={{ ['--scd-ticker-duration' as string]: `${Math.max(items.length * 12, 48)}s` }}
          >
            {loop.map((item, index) => (
              <span key={`${item.id}-${index}`} className="scd-news-ticker-item">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scd-news-ticker-link"
                >
                  <span className="scd-news-ticker-source">{item.source}</span>
                  {item.title}
                </a>
                <span className="scd-news-ticker-sep" aria-hidden>
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
