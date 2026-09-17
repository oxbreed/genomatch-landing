import Link from 'next/link'
import GenoCrest from '../components/GenoCrest'
import SiteHeader from '../components/SiteHeader'
import ScdNewsFeed from '../components/ScdNewsFeed'
import { LOGO_RED, CREAM, LOGO_GOLD, METALLIC_STEEL, WHITE, TEXT_SOFT, BODY, HERO_SURFACE } from '../theme'

/** Refresh blog news feed every 6 hours. */
export const revalidate = 21600

const posts = [
  {
    slug: 'what-genotype-should-i-check-before-marriage',
    title: 'What Genotype Should I Check Before Marriage in Nigeria?',
    excerpt: 'Before you say yes, there is one conversation that could change everything. Here is what every Nigerian needs to know about genotype compatibility before marriage.',
    date: 'June 2026',
    readTime: '5 min read',
    category: 'Genotype Education',
  },
  {
    slug: 'can-as-marry-as',
    title: 'Can AS Marry AS? The Truth About Sickle Cell Risk',
    excerpt: 'It is one of the most searched questions in Nigeria. The answer is more nuanced than a simple yes or no, and understanding it could protect your future family.',
    date: 'June 2026',
    readTime: '6 min read',
    category: 'Sickle Cell Awareness',
  },
  {
    slug: 'sickle-cell-disease-nigeria-facts',
    title: 'Sickle Cell Disease in Nigeria: The Numbers That Should Shock You',
    excerpt: 'Nigeria has the highest burden of sickle cell disease in the world. These are the facts every Nigerian needs to know, and what we can do about it.',
    date: 'June 2026',
    readTime: '4 min read',
    category: 'Public Health',
  },
]

export const metadata = {
  title: 'Blog | GenoMatch',
  description: 'Genotype education, sickle cell awareness, and intentional dating advice for Nigeria and the African diaspora.',
  openGraph: {
    title: 'Blog | GenoMatch',
    description: 'Genotype education, sickle cell awareness, and intentional dating advice for Nigeria and the African diaspora.',
    url: 'https://genomatch.app/blog',
  },
  twitter: {
    title: 'Blog | GenoMatch',
    description: 'Genotype education, sickle cell awareness, and intentional dating advice for Nigeria and the African diaspora.',
  },
}

export default function Blog() {
  return (
    <div id="main-content" style={{ background: CREAM, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <SiteHeader />

      <section style={{ background: HERO_SURFACE, padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <GenoCrest size={200} idPrefix="blog-hero-l" className="hidden sm:block" style={{ position: 'absolute', left: '-64px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <GenoCrest size={200} idPrefix="blog-hero-r" className="hidden sm:block" style={{ position: 'absolute', right: '-64px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <p style={{ color: LOGO_GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px' }}>THE GENOMATCH BLOG</p>
        <h1 style={{ color: LOGO_RED, fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, maxWidth: '700px', margin: '0 auto 16px', lineHeight: 1.2 }}>
          Genotype education for intentional singles
        </h1>
        <p style={{ color: METALLIC_STEEL, fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7, fontFamily: BODY }}>
          Science, love, and the conversations that protect your future family.
        </p>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '32px' }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div className="gm-card" style={{ background: WHITE, borderRadius: '16px', padding: '40px', borderLeft: `4px solid ${LOGO_GOLD}`, cursor: 'pointer' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'center' }}>
                  <span style={{ background: CREAM, color: LOGO_RED, fontSize: '11px', letterSpacing: '1px', padding: '4px 12px', borderRadius: '99px', fontFamily: BODY, fontWeight: 700 }}>{post.category}</span>
                  <span style={{ color: TEXT_SOFT, fontSize: '13px', fontFamily: BODY }}>{post.date} · {post.readTime}</span>
                </div>
                <h2 style={{ color: LOGO_RED, fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 700, marginBottom: '12px', lineHeight: 1.3 }}>{post.title}</h2>
                <p style={{ color: TEXT_SOFT, fontSize: '16px', lineHeight: 1.7, fontFamily: BODY, marginBottom: '20px' }}>{post.excerpt}</p>
                <span style={{ color: LOGO_GOLD, fontSize: '14px', fontFamily: BODY, fontWeight: 700 }}>Read article →</span>
              </div>
            </Link>
          ))}
        </div>

        <ScdNewsFeed limit={6} showViewAll />
      </section>

      <footer style={{ background: WHITE, padding: '40px 24px', textAlign: 'center', borderTop: '1px solid rgba(200,16,46,0.1)' }}>
        <p style={{ color: LOGO_GOLD, fontSize: '14px', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '8px' }}>Connecting Hearts. Aligning Genes.</p>
        <p style={{ color: TEXT_SOFT, fontSize: '12px', fontFamily: BODY }}>© {new Date().getFullYear()} GenoMatch Ltd · RC No. 9236521 · Nigeria</p>
      </footer>
    </div>
  )
}
