import Link from 'next/link'
import GenoCrest from '../components/GenoCrest'
import JsonLd from '../components/JsonLd'
import SiteHeader from '../components/SiteHeader'
import { FAQ_ITEMS } from '@/lib/faq'
import { breadcrumbJsonLd, faqPageJsonLd } from '@/lib/seo/json-ld'
import { buildMetadata } from '@/lib/seo/metadata'
import { LOGO_RED, LOGO_RED_DEEP, CREAM, LOGO_GOLD, METALLIC_STEEL, WHITE, TEXT_SOFT, BODY, HERO_SURFACE } from '../theme'

export const metadata = buildMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Answers about GenoMatch genotype matching, availability in Nigeria, supported genotypes (AA, AS, SS, AC), data privacy, and what makes genotype-aware dating different.',
  path: '/faq',
})

export default function FAQ() {
  return (
    <div id="main-content" style={{ background: CREAM, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <JsonLd data={faqPageJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' },
        ])}
      />

      <SiteHeader />

      <section style={{ background: HERO_SURFACE, padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <GenoCrest size={220} idPrefix="faq-hero-l" className="hidden sm:block" style={{ position: 'absolute', left: '-70px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <GenoCrest size={220} idPrefix="faq-hero-r" className="hidden sm:block" style={{ position: 'absolute', right: '-70px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <p style={{ color: LOGO_GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px' }}>FREQUENTLY ASKED QUESTIONS</p>
        <h1 style={{ color: LOGO_RED, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, maxWidth: '800px', margin: '0 auto 24px', lineHeight: 1.2 }}>
          Everything you need to know
        </h1>
        <p style={{ color: METALLIC_STEEL, fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontFamily: BODY }}>
          The most common questions about genotype aware dating, how GenoMatch works, and how we protect your data. Still curious? We are always happy to talk.
        </p>
      </section>

      <section style={{ background: CREAM, padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(200,16,46,0.1)', padding: '32px 0' }}>
              <h2 style={{ color: LOGO_RED, fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: 700, marginBottom: '12px', lineHeight: 1.4 }}>{item.question}</h2>
              <p style={{ color: TEXT_SOFT, fontSize: '16px', lineHeight: 1.8, fontFamily: BODY }}>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: HERO_SURFACE, padding: '100px 24px', textAlign: 'center' }}>
        <h2 style={{ color: LOGO_RED, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '16px' }}>Still have a question?</h2>
        <p style={{ color: METALLIC_STEEL, fontSize: '17px', marginBottom: '40px', fontFamily: BODY }}>
          Reach out and we will get back to you within 48 hours.
        </p>
        <Link href="/contact" className="gm-btn" style={{ background: LOGO_GOLD, color: LOGO_RED_DEEP, padding: '16px 40px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '16px', fontFamily: BODY }}>Contact Us</Link>
      </section>

      <footer style={{ background: WHITE, padding: '40px 24px', textAlign: 'center', borderTop: '1px solid rgba(200,16,46,0.1)' }}>
        <p style={{ color: LOGO_GOLD, fontSize: '14px', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '8px' }}>Connecting Hearts. Aligning Genes.</p>
        <p style={{ color: TEXT_SOFT, fontSize: '12px', fontFamily: BODY }}>© {new Date().getFullYear()} GenoMatch Ltd · RC No. 9236521 · Nigeria</p>
      </footer>
    </div>
  )
}
