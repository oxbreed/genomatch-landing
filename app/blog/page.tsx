import Link from 'next/link'
import GenoCrest from '../components/GenoCrest'
import { FOREST, FOREST_BG, LINEN, GOLD, SAGE, WHITE, TEXT_SOFT, BODY, HERO_SURFACE } from '../theme'

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
  title: 'Blog',
  description: 'Genotype education, sickle cell awareness, and intentional dating advice for Nigeria and the African diaspora.',
}

export default function Blog() {
  return (
    <div style={{ background: LINEN, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <header style={{ background: FOREST, padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(191,155,74,0.15)' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ color: GOLD, fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 }}>GenoMatch</span>
        </Link>
        <Link href="/#waitlist" className="gm-btn" style={{ background: GOLD, color: FOREST_BG, padding: '10px 24px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '14px', fontFamily: BODY }}>Join Waitlist</Link>
      </header>

      <section style={{ background: HERO_SURFACE, padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <GenoCrest size={200} idPrefix="blog-hero-l" className="hidden sm:block" style={{ position: 'absolute', left: '-64px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <GenoCrest size={200} idPrefix="blog-hero-r" className="hidden sm:block" style={{ position: 'absolute', right: '-64px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px' }}>THE GENOMATCH BLOG</p>
        <h1 style={{ color: WHITE, fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, maxWidth: '700px', margin: '0 auto 16px', lineHeight: 1.2 }}>
          Genotype education for intentional singles
        </h1>
        <p style={{ color: SAGE, fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7, fontFamily: BODY }}>
          Science, love, and the conversations that protect your future family.
        </p>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '32px' }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div className="gm-card" style={{ background: WHITE, borderRadius: '16px', padding: '40px', borderLeft: `4px solid ${GOLD}`, cursor: 'pointer' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'center' }}>
                  <span style={{ background: LINEN, color: FOREST, fontSize: '11px', letterSpacing: '1px', padding: '4px 12px', borderRadius: '99px', fontFamily: BODY, fontWeight: 700 }}>{post.category}</span>
                  <span style={{ color: TEXT_SOFT, fontSize: '13px', fontFamily: BODY }}>{post.date} · {post.readTime}</span>
                </div>
                <h2 style={{ color: FOREST, fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 700, marginBottom: '12px', lineHeight: 1.3 }}>{post.title}</h2>
                <p style={{ color: TEXT_SOFT, fontSize: '16px', lineHeight: 1.7, fontFamily: BODY, marginBottom: '20px' }}>{post.excerpt}</p>
                <span style={{ color: GOLD, fontSize: '14px', fontFamily: BODY, fontWeight: 700 }}>Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer style={{ background: FOREST, padding: '40px 24px', textAlign: 'center', borderTop: '1px solid rgba(191,155,74,0.15)' }}>
        <p style={{ color: GOLD, fontSize: '14px', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '8px' }}>Connecting Hearts. Aligning Genes.</p>
        <p style={{ color: 'rgba(143,175,149,0.7)', fontSize: '12px', fontFamily: BODY }}>© {new Date().getFullYear()} GenoMatch Ltd · RC No. 9236521 · Nigeria</p>
      </footer>
    </div>
  )
}
