import Link from 'next/link'
import ScdNewsFeed from '../../components/ScdNewsFeed'
import SiteHeader from '../../components/SiteHeader'
import { LOGO_RED, CREAM, LOGO_GOLD, BODY, HERO_SURFACE, METALLIC_STEEL, WHITE, TEXT_SOFT } from '../../theme'

/** Refresh full news page every 6 hours. */
export const revalidate = 21600

export const metadata = {
  title: 'Sickle Cell News & Research Feed',
  description:
    'Live sickle cell disease headlines from Nigeria, Africa, and global health publishers, updated automatically on GenoMatch.',
}

export default function ScdNewsPage() {
  return (
    <div style={{ background: CREAM, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <SiteHeader />

      <section
        style={{
          background: HERO_SURFACE,
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <Link
          href="/blog"
          className="gm-link"
          style={{
            color: LOGO_GOLD,
            fontSize: '14px',
            fontFamily: BODY,
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '24px',
          }}
        >
          ← Back to Blog
        </Link>
        <h1
          style={{
            color: LOGO_RED,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            maxWidth: '720px',
            margin: '0 auto 16px',
            lineHeight: 1.2,
          }}
        >
          Sickle cell news feed
        </h1>
        <p
          style={{
            color: METALLIC_STEEL,
            fontSize: '17px',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: BODY,
          }}
        >
          Stay informed with the latest headlines on sickle cell disease, genotype awareness,
          and treatment, refreshed every six hours.
        </p>
      </section>

      <ScdNewsFeed limit={20} />

      <footer
        style={{
          background: WHITE,
          padding: '40px 24px',
          textAlign: 'center',
          borderTop: '1px solid rgba(212,175,55,0.15)',
        }}
      >
        <p
          style={{
            color: LOGO_GOLD,
            fontSize: '14px',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            marginBottom: '8px',
          }}
        >
          Connecting Hearts. Aligning Genes.
        </p>
        <p style={{ color: TEXT_SOFT, fontSize: '12px', fontFamily: BODY }}>
          © {new Date().getFullYear()} GenoMatch Ltd · RC No. 9236521 · Nigeria
        </p>
      </footer>
    </div>
  )
}
