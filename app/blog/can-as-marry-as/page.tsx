import Link from 'next/link'
import JsonLd from '../../components/JsonLd'
import SiteHeader from '../../components/SiteHeader'
import SourcesBlock from '../../components/SourcesBlock'
import { SCD_STATS, SOURCE_SETS } from '@/lib/scd-facts'
import { getBlogPost } from '@/lib/seo/blog-posts'
import { blogPostingJsonLd, breadcrumbJsonLd } from '@/lib/seo/json-ld'
import { buildMetadata } from '@/lib/seo/metadata'
import { LOGO_RED, LOGO_RED_DEEP, CREAM, LOGO_GOLD, METALLIC_STEEL, WHITE, TEXT_SOFT, BODY, HERO_SURFACE } from '../../theme'

const post = getBlogPost('can-as-marry-as')!

export const metadata = buildMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  type: 'article',
  publishedTime: post.datePublished,
  modifiedTime: post.dateModified,
  keywords: post.keywords,
})

export default function Article2() {
  return (
    <div id="main-content" style={{ background: CREAM, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <JsonLd data={blogPostingJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <SiteHeader />

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: '40px' }}>
          <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', listStyle: 'none', padding: 0, margin: 0, fontFamily: BODY, fontSize: '14px' }}>
            <li><Link href="/" className="gm-link" style={{ color: LOGO_GOLD, textDecoration: 'none' }}>Home</Link></li>
            <li aria-hidden style={{ color: TEXT_SOFT }}>/</li>
            <li><Link href="/blog" className="gm-link" style={{ color: LOGO_GOLD, textDecoration: 'none' }}>Blog</Link></li>
            <li aria-hidden style={{ color: TEXT_SOFT }}>/</li>
            <li style={{ color: TEXT_SOFT }} aria-current="page">Can AS marry AS?</li>
          </ol>
        </nav>
        <span style={{ background: CREAM, color: LOGO_RED, fontSize: '11px', letterSpacing: '1px', padding: '4px 12px', borderRadius: '99px', fontFamily: BODY, fontWeight: 700, border: `1px solid rgba(200,16,46,0.15)` }}>{post.category}</span>
        <h1 style={{ color: LOGO_RED, fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 700, margin: '24px 0 16px', lineHeight: 1.2 }}>
          {post.title}
        </h1>
        <p style={{ color: TEXT_SOFT, fontSize: '14px', fontFamily: BODY, marginBottom: '48px' }}>
          <time dateTime={post.datePublished}>{post.displayDate}</time> · {post.readTime} · GenoMatch
        </p>

        <div style={{ color: '#C8102E', fontSize: '18px', lineHeight: 1.9, fontFamily: BODY }}>
          <p style={{ marginBottom: '24px' }}>It is one of the most searched questions in Nigeria. Every day, thousands of people type it into Google, WhatsApp their friends about it, or ask their doctors quietly after a blood test result comes back AS.</p>
          <p style={{ marginBottom: '24px' }}>"Can AS marry AS?"</p>
          <p style={{ marginBottom: '24px' }}>The answer is not simple. And anyone who gives you a one-word response, yes or no, is not giving you the full picture.</p>

          <h2 style={{ color: LOGO_RED, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>What does AS mean?</h2>
          <p style={{ marginBottom: '24px' }}>AS means you are a sickle cell carrier. You have one normal haemoglobin gene (A) and one sickle cell gene (S). People with AS genotype are generally healthy. They do not have sickle cell disease. But they carry the gene and can pass it to their children.</p>
          <p style={{ marginBottom: '24px' }}>In Nigeria, approximately {SCD_STATS.traitPrevalencePercent} of the population carries the AS genotype, roughly {SCD_STATS.traitCarriersNigeria} people, according to WHO and Nigeria&apos;s Federal Ministry of Health. That means about 1 in 4 Nigerians is a carrier, making this conversation extraordinarily common and extraordinarily important.</p>

          <h2 style={{ color: LOGO_RED, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>What happens when AS meets AS?</h2>
          <p style={{ marginBottom: '24px' }}>When two AS carriers have children, each pregnancy has four possible outcomes, each with equal probability:</p>
          <div style={{ background: WHITE, borderRadius: '16px', padding: '32px', marginBottom: '32px', border: `1px solid rgba(212,175,55,0.2)` }}>
            {[
              { outcome: 'AA', prob: '25%', desc: 'Child is double healthy, does not carry the trait' },
              { outcome: 'AS', prob: '50%', desc: 'Child is a carrier like their parents, generally healthy' },
              { outcome: 'SS', prob: '25%', desc: 'Child has sickle cell disease' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px 0', borderBottom: i < 2 ? '1px solid rgba(200,16,46,0.08)' : 'none' }}>
                <div style={{ background: i === 2 ? '#FDECEA' : '#F5EDED', color: i === 2 ? '#C0392B' : LOGO_RED, fontWeight: 700, padding: '8px 16px', borderRadius: '8px', minWidth: '60px', textAlign: 'center', fontFamily: 'Georgia, serif' }}>{row.outcome}</div>
                <div>
                  <div style={{ color: LOGO_RED, fontWeight: 700, marginBottom: '4px' }}>{row.prob} chance</div>
                  <div style={{ color: TEXT_SOFT, fontSize: '15px' }}>{row.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginBottom: '24px' }}>In plain terms: if two AS carriers have four children, on average one will have sickle cell disease. That is not a small risk. That is a family-shaping reality.</p>

          <h2 style={{ color: LOGO_RED, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>So can they marry?</h2>
          <p style={{ marginBottom: '24px' }}>Legally and medically, yes. No law in Nigeria prevents AS from marrying AS. And many AS couples do marry, go on to have healthy children, and live full lives.</p>
          <p style={{ marginBottom: '24px' }}>But the question is not just "can they?" The question is "should they proceed without a plan?"</p>
          <p style={{ marginBottom: '24px' }}>If two AS carriers choose to marry, they need to have a very honest conversation about:</p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
            <li style={{ marginBottom: '12px' }}>The real statistical risk to each pregnancy</li>
            <li style={{ marginBottom: '12px' }}>Whether they are emotionally and financially prepared to raise a child with sickle cell disease</li>
            <li style={{ marginBottom: '12px' }}>Whether they would consider genetic counselling or prenatal testing</li>
            <li style={{ marginBottom: '12px' }}>Their personal, religious, and ethical positions on these options</li>
          </ul>
          <p style={{ marginBottom: '24px' }}>This is not a conversation to have after the wedding. It is a conversation to have before you fall in love.</p>

          <h2 style={{ color: LOGO_RED, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>Why GenoMatch exists</h2>
          <p style={{ marginBottom: '24px' }}>GenoMatch was built precisely for this moment, before the feelings run deep, before the families are introduced, before the conversation becomes painful. On GenoMatch, your genotype is part of your profile from day one. Compatibility is calculated before the first message is sent.</p>
          <p style={{ marginBottom: '48px' }}>This does not mean AS cannot match with AS on GenoMatch. It means both people know exactly where they stand before they invest their hearts. The choice remains theirs. The information is simply available when it matters most.</p>

          <SourcesBlock
            sourceIds={SOURCE_SETS.asMarriageArticle}
            note="Genetic probabilities follow standard Mendelian inheritance for autosomal recessive conditions. See NIH and CDC references below."
          />

          <div style={{ background: HERO_SURFACE, borderRadius: '16px', padding: '40px', textAlign: 'center', marginTop: '48px' }}>
            <h3 style={{ color: LOGO_RED, fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Know your compatibility from day one</h3>
            <p style={{ color: METALLIC_STEEL, marginBottom: '24px', fontFamily: BODY }}>Join the GenoMatch waitlist and be first to experience intentional, informed dating.</p>
            <Link href="/#waitlist" className="gm-btn" style={{ background: LOGO_GOLD, color: LOGO_RED_DEEP, padding: '14px 32px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '16px', fontFamily: BODY }}>Join the Waitlist</Link>
          </div>
        </div>
      </article>

      <footer style={{ background: WHITE, padding: '40px 24px', textAlign: 'center', borderTop: '1px solid rgba(200,16,46,0.1)' }}>
        <p style={{ color: LOGO_GOLD, fontSize: '14px', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '8px' }}>Connecting Hearts. Aligning Genes.</p>
        <p style={{ color: TEXT_SOFT, fontSize: '12px', fontFamily: BODY }}>© {new Date().getFullYear()} GenoMatch Ltd · RC No. 9236521 · Nigeria</p>
      </footer>
    </div>
  )
}
