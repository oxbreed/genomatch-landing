import Link from 'next/link'
import ScdNewsFeed from '../../components/ScdNewsFeed'
import { FOREST, FOREST_BG, LINEN, GOLD, BODY, HERO_SURFACE, SAGE } from '../../theme'

/** Refresh full news page every 6 hours. */
export const revalidate = 21600

export const metadata = {
  title: 'Sickle Cell News & Research Feed',
  description:
    'Live sickle cell disease headlines from Nigeria, Africa, and global health publishers — updated automatically on GenoMatch.',
}

export default function ScdNewsPage() {
  return (
    <div style={{ background: LINEN, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <header
        style={{
          background: FOREST,
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          borderBottom: '1px solid rgba(191,155,74,0.15)',
        }}
      >
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ color: GOLD, fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 }}>
            GenoMatch
          </span>
        </Link>
        <Link
          href="/#waitlist"
          className="gm-btn"
          style={{
            background: GOLD,
            color: FOREST_BG,
            padding: '10px 24px',
            borderRadius: '99px',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '14px',
            fontFamily: BODY,
          }}
        >
          Join Waitlist
        </Link>
      </header>

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
            color: GOLD,
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
            color: '#FFFFFF',
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
            color: SAGE,
            fontSize: '17px',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: BODY,
          }}
        >
          Stay informed with the latest headlines on sickle cell disease, genotype awareness,
          and treatment — refreshed every six hours.
        </p>
      </section>

      <ScdNewsFeed limit={20} />

      <footer
        style={{
          background: FOREST,
          padding: '40px 24px',
          textAlign: 'center',
          borderTop: '1px solid rgba(191,155,74,0.15)',
        }}
      >
        <p
          style={{
            color: GOLD,
            fontSize: '14px',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            marginBottom: '8px',
          }}
        >
          Connecting Hearts. Aligning Genes.
        </p>
        <p style={{ color: 'rgba(143,175,149,0.7)', fontSize: '12px', fontFamily: BODY }}>
          © {new Date().getFullYear()} GenoMatch Ltd · RC No. 9236521 · Nigeria
        </p>
      </footer>
    </div>
  )
}
