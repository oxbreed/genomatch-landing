import Link from 'next/link'
import {
  formatNewsDate,
  getScdNewsFeed,
  SCD_NEWS_REVALIDATE_SECONDS,
} from '@/lib/scd-news-feed'
import { BODY, FOREST, GOLD, LINEN, SAGE, TEXT_SOFT, WHITE } from '../theme'

type ScdNewsFeedProps = {
  limit?: number
  showViewAll?: boolean
  compact?: boolean
}

function refreshLabel(): string {
  const hours = SCD_NEWS_REVALIDATE_SECONDS / 3600
  return hours === 1 ? 'every hour' : `every ${hours} hours`
}

export default async function ScdNewsFeed({
  limit = 8,
  showViewAll = false,
  compact = false,
}: ScdNewsFeedProps) {
  let items: Awaited<ReturnType<typeof getScdNewsFeed>>['items'] = []
  let fetchedAt = new Date().toISOString()
  let failed = false

  try {
    const feed = await getScdNewsFeed(limit)
    items = feed.items
    fetchedAt = feed.fetchedAt
  } catch {
    failed = true
  }

  return (
    <section
      aria-labelledby="scd-news-heading"
      style={{
        marginTop: compact ? 0 : '64px',
        padding: compact ? '48px 24px' : '64px 24px 80px',
        maxWidth: '900px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <div style={{ marginBottom: '32px', textAlign: compact ? 'left' : 'center' }}>
        <p
          style={{
            color: GOLD,
            fontSize: '11px',
            letterSpacing: '3px',
            fontFamily: BODY,
            marginBottom: '12px',
          }}
        >
          LIVE HEALTH NEWS
        </p>
        <h2
          id="scd-news-heading"
          style={{
            color: FOREST,
            fontSize: compact ? 'clamp(1.4rem, 3vw, 1.8rem)' : 'clamp(1.6rem, 3.5vw, 2.2rem)',
            fontWeight: 700,
            marginBottom: '12px',
            lineHeight: 1.25,
          }}
        >
          Latest sickle cell news &amp; research
        </h2>
        <p
          style={{
            color: TEXT_SOFT,
            fontSize: '16px',
            lineHeight: 1.7,
            fontFamily: BODY,
            maxWidth: '640px',
            margin: compact ? 0 : '0 auto',
          }}
        >
          Headlines from trusted publishers, refreshed automatically {refreshLabel()}. Opens
          the original article on the publisher&apos;s site.
        </p>
        {!failed && (
          <p
            style={{
              color: SAGE,
              fontSize: '13px',
              fontFamily: BODY,
              marginTop: '10px',
            }}
          >
            Last updated {formatNewsDate(fetchedAt)}
          </p>
        )}
      </div>

      {failed || items.length === 0 ? (
        <div
          style={{
            background: WHITE,
            borderRadius: '16px',
            padding: '32px',
            border: '1px solid rgba(191,155,74,0.2)',
            textAlign: 'center',
          }}
        >
          <p style={{ color: TEXT_SOFT, fontFamily: BODY, lineHeight: 1.7 }}>
            News headlines are temporarily unavailable. Please check back shortly, or visit{' '}
            <a
              href="https://www.who.int/news-room/fact-sheets/detail/sickle-cell-disease"
              target="_blank"
              rel="noopener noreferrer"
              className="gm-link"
              style={{ color: GOLD }}
            >
              WHO sickle cell updates
            </a>
            .
          </p>
        </div>
      ) : (
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'grid',
            gap: '16px',
          }}
        >
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gm-card"
                style={{
                  display: 'block',
                  background: WHITE,
                  borderRadius: '16px',
                  padding: compact ? '24px' : '28px 32px',
                  borderLeft: `4px solid ${GOLD}`,
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <span
                    style={{
                      background: LINEN,
                      color: FOREST,
                      fontSize: '11px',
                      letterSpacing: '0.5px',
                      padding: '4px 12px',
                      borderRadius: '99px',
                      fontFamily: BODY,
                      fontWeight: 700,
                    }}
                  >
                    {item.feedLabel}
                  </span>
                  <span style={{ color: TEXT_SOFT, fontSize: '13px', fontFamily: BODY }}>
                    {item.source}
                    {item.publishedAt ? ` · ${formatNewsDate(item.publishedAt)}` : ''}
                  </span>
                </div>
                <h3
                  style={{
                    color: FOREST,
                    fontSize: compact ? '1.05rem' : '1.15rem',
                    fontWeight: 700,
                    lineHeight: 1.45,
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
                <span
                  style={{
                    color: GOLD,
                    fontSize: '14px',
                    fontFamily: BODY,
                    fontWeight: 700,
                    marginTop: '12px',
                    display: 'inline-block',
                  }}
                >
                  Read on {item.source} →
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}

      <p
        style={{
          color: TEXT_SOFT,
          fontSize: '12px',
          lineHeight: 1.6,
          fontFamily: BODY,
          marginTop: '24px',
        }}
      >
        Headlines are aggregated from public RSS feeds (Google News). GenoMatch does not
        write, edit, or endorse third-party articles. Always consult a qualified healthcare
        provider for medical advice.
      </p>

      {showViewAll ? (
        <div style={{ textAlign: 'center', marginTop: '28px' }}>
          <Link
            href="/blog/news"
            className="gm-link"
            style={{
              color: GOLD,
              fontFamily: BODY,
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            View full news feed →
          </Link>
        </div>
      ) : null}
    </section>
  )
}
