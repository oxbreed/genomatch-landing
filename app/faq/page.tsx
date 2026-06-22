import Link from 'next/link'
import GenoCrest from '../components/GenoCrest'
import { FOREST, FOREST_BG, LINEN, GOLD, SAGE, WHITE, TEXT_SOFT, BODY, HERO_SURFACE } from '../theme'

export const metadata = {
  title: 'Frequently Asked Questions | GenoMatch',
  description:
    'Answers to the most common questions about GenoMatch, the world\u2019s first genotype aware dating app: how genotype matching works, availability in Nigeria, data privacy, supported genotypes, and what makes GenoMatch different.',
  openGraph: {
    title: 'Frequently Asked Questions | GenoMatch',
    description:
      'Everything you need to know about genotype aware dating with GenoMatch \u2014 how matching works, supported genotypes, data privacy, and availability across Nigeria and the African diaspora.',
    url: 'https://www.genomatch.app/faq',
  },
  twitter: {
    title: 'Frequently Asked Questions | GenoMatch',
    description:
      'Everything you need to know about genotype aware dating with GenoMatch \u2014 how matching works, supported genotypes, data privacy, and availability.',
  },
  alternates: {
    canonical: 'https://www.genomatch.app/faq',
  },
}

/** Visible FAQ content \u2014 mirrors the FAQ section on the homepage. */
const faqs = [
  {
    q: 'What is GenoMatch?',
    a: "GenoMatch is the world's first genotype aware dating app built for West Africa and the African diaspora. It matches singles based on genotype compatibility (AA, AS, SS, AC) alongside personality and interests.",
  },
  {
    q: 'How does genotype matching work?',
    a: 'You declare your genotype during registration. GenoMatch calculates a compatibility score based on the genetic risk for each pairing. Two AS carriers have a 1 in 4 chance of an SS child. GenoMatch ensures you know this before feelings run deep.',
  },
  {
    q: 'Is GenoMatch available in Nigeria?',
    a: 'Yes. GenoMatch is built primarily for Nigeria and is expanding across West Africa and the African diaspora in the UK, US, and Canada.',
  },
  {
    q: 'Is my genotype data safe?',
    a: "Absolutely. Your genotype is treated as sensitive health data, encrypted, never sold, and used only for compatibility matching. GenoMatch is compliant with Nigeria's NDPA 2023 data protection law.",
  },
  {
    q: 'What makes GenoMatch different from other dating apps?',
    a: 'GenoMatch is the only dating app in the world that incorporates genetic compatibility into matching. Mainstream dating apps optimise for attraction. GenoMatch optimises for outcomes, helping you build a love story that protects your future family.',
  },
]

/** Structured data \u2014 identical to the FAQPage JSON-LD on the homepage. */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is GenoMatch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "GenoMatch is the world's first genotype aware dating app built for West Africa and the African diaspora. It matches singles based on genotype compatibility (AA, AS, SS, AC) alongside personality and interest compatibility, helping couples make informed decisions about their future family health.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does genotype matching work on GenoMatch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Users declare their genotype (AA, AS, SS, or AC) during registration. GenoMatch calculates a compatibility score based on the genetic risk of sickle cell disease in potential children. For example, two AS carriers have a 1 in 4 chance of having an SS child, so GenoMatch factors this into match rankings to help couples have this important conversation early.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GenoMatch available in Nigeria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GenoMatch is primarily built for Nigeria and is expanding across West Africa and the African diaspora in the UK, US, and Canada. The app is launching soon on iOS and Android. Join the waitlist for early access.',
      },
    },
    {
      '@type': 'Question',
      name: 'What genotypes does GenoMatch support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenoMatch supports all major genotypes including AA (Double Healthy), AS (Carrier), SS (Sickle Cell), and AC (AC Carrier). The app calculates compatibility scores between all genotype combinations and shows the sickle cell risk level for each pairing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my genotype data safe on GenoMatch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. GenoMatch treats genotype information as sensitive health data. It is encrypted, never sold to third parties, and used solely for compatibility matching within the app. GenoMatch is compliant with Nigeria's NDPA 2023 data protection law.",
      },
    },
    {
      '@type': 'Question',
      name: 'What makes GenoMatch different from other dating apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenoMatch is the only dating app in the world that incorporates genotype compatibility into its matching algorithm. While mainstream dating apps match on attraction and interests alone, GenoMatch adds a genetic compatibility layer that is especially important in West Africa where sickle cell disease affects millions of families.',
      },
    },
  ],
}

export default function FAQ() {
  return (
    <div id="main-content" style={{ background: LINEN, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Nav */}
      <header style={{ background: FOREST, padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(191,155,74,0.15)' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ color: GOLD, fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 }}>GenoMatch</span>
        </Link>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <Link href="https://www.genomatch.app/#how-it-works" className="gm-link" style={{ color: SAGE, fontSize: '14px', textDecoration: 'none', fontFamily: BODY }}>How it works</Link>
          <Link href="/mission" className="gm-link" style={{ color: SAGE, fontSize: '14px', textDecoration: 'none', fontFamily: BODY }}>Our Mission</Link>
          <Link href="/partners" className="gm-link" style={{ color: SAGE, fontSize: '14px', textDecoration: 'none', fontFamily: BODY }}>For Partners</Link>
          <Link href="/blog" className="gm-link" style={{ color: SAGE, fontSize: '14px', textDecoration: 'none', fontFamily: BODY }}>Blog</Link>
          <Link href="/faq" className="gm-link" style={{ color: GOLD, fontSize: '14px', textDecoration: 'none', fontFamily: BODY, fontWeight: 700 }}>FAQ</Link>
          <Link href="/contact" className="gm-link" style={{ color: SAGE, fontSize: '14px', textDecoration: 'none', fontFamily: BODY }}>Contact</Link>
          <Link href="/#waitlist" className="gm-btn" style={{ background: GOLD, color: FOREST_BG, padding: '10px 24px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '14px', fontFamily: BODY }}>Join Waitlist</Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: HERO_SURFACE, padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <GenoCrest size={220} idPrefix="faq-hero-l" className="hidden sm:block" style={{ position: 'absolute', left: '-70px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <GenoCrest size={220} idPrefix="faq-hero-r" className="hidden sm:block" style={{ position: 'absolute', right: '-70px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px' }}>FREQUENTLY ASKED QUESTIONS</p>
        <h1 style={{ color: WHITE, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, maxWidth: '800px', margin: '0 auto 24px', lineHeight: 1.2 }}>
          Everything you need to know
        </h1>
        <p style={{ color: SAGE, fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontFamily: BODY }}>
          The most common questions about genotype aware dating, how GenoMatch works, and how we protect your data. Still curious? We are always happy to talk.
        </p>
      </section>

      {/* FAQ content */}
      <section style={{ background: LINEN, padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(22,53,34,0.1)', padding: '32px 0' }}>
              <h2 style={{ color: FOREST, fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: 700, marginBottom: '12px', lineHeight: 1.4 }}>{item.q}</h2>
              <p style={{ color: TEXT_SOFT, fontSize: '16px', lineHeight: 1.8, fontFamily: BODY }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: HERO_SURFACE, padding: '100px 24px', textAlign: 'center' }}>
        <h2 style={{ color: WHITE, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '16px' }}>Still have a question?</h2>
        <p style={{ color: SAGE, fontSize: '17px', marginBottom: '40px', fontFamily: BODY }}>
          Reach out and we will get back to you within 48 hours.
        </p>
        <Link href="/contact" className="gm-btn" style={{ background: GOLD, color: FOREST_BG, padding: '16px 40px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '16px', fontFamily: BODY }}>Contact Us</Link>
      </section>

      {/* Footer */}
      <footer style={{ background: FOREST, padding: '40px 24px', textAlign: 'center', borderTop: '1px solid rgba(191,155,74,0.15)' }}>
        <p style={{ color: GOLD, fontSize: '14px', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '8px' }}>Connecting Hearts. Aligning Genes.</p>
        <p style={{ color: 'rgba(143,175,149,0.7)', fontSize: '12px', fontFamily: BODY }}>© {new Date().getFullYear()} GenoMatch Ltd · RC No. 9236521 · Nigeria</p>
      </footer>
    </div>
  )
}
