import Link from 'next/link'
import GenoCrest from '../components/GenoCrest'
import ContactForm from './ContactForm'
import { FOREST, FOREST_BG, LINEN, GOLD, SAGE, WHITE, TEXT_SOFT, BODY, HERO_SURFACE } from '../theme'

export const metadata = {
  title: 'Get in Touch | GenoMatch',
  description:
    'Contact the GenoMatch team. Questions about genotype aware dating, partnerships, press, or support? Email hello@genomatch.app or send us a message and we will reply within 48 hours.',
  openGraph: {
    title: 'Get in Touch | GenoMatch',
    description:
      'Contact the GenoMatch team. Email hello@genomatch.app or send us a message and we will reply within 48 hours.',
    url: 'https://www.genomatch.app/contact',
  },
  twitter: {
    title: 'Get in Touch | GenoMatch',
    description:
      'Contact the GenoMatch team. Email hello@genomatch.app or send us a message and we will reply within 48 hours.',
  },
  alternates: {
    canonical: 'https://www.genomatch.app/contact',
  },
}

export default function Contact() {
  return (
    <div id="main-content" style={{ background: LINEN, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

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
          <Link href="/faq" className="gm-link" style={{ color: SAGE, fontSize: '14px', textDecoration: 'none', fontFamily: BODY }}>FAQ</Link>
          <Link href="/contact" className="gm-link" style={{ color: GOLD, fontSize: '14px', textDecoration: 'none', fontFamily: BODY, fontWeight: 700 }}>Contact</Link>
          <Link href="/#waitlist" className="gm-btn" style={{ background: GOLD, color: FOREST_BG, padding: '10px 24px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '14px', fontFamily: BODY }}>Join Waitlist</Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: HERO_SURFACE, padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <GenoCrest size={220} idPrefix="contact-hero-l" className="hidden sm:block" style={{ position: 'absolute', left: '-70px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <GenoCrest size={220} idPrefix="contact-hero-r" className="hidden sm:block" style={{ position: 'absolute', right: '-70px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px' }}>CONTACT US</p>
        <h1 style={{ color: WHITE, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, maxWidth: '800px', margin: '0 auto 24px', lineHeight: 1.2 }}>
          Get in Touch
        </h1>
        <p style={{ color: SAGE, fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontFamily: BODY }}>
          Whether you have a question about genotype aware dating, a partnership idea, a press enquiry, or simply want to say hello, we would love to hear from you.
        </p>
      </section>

      {/* Email + Form */}
      <section style={{ background: LINEN, padding: '100px 24px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: TEXT_SOFT, fontSize: '16px', marginBottom: '12px', fontFamily: BODY }}>Prefer email? Reach us directly at</p>
          <a
            href="mailto:hello@genomatch.app"
            className="gm-link"
            style={{ display: 'inline-block', color: GOLD, fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 700, fontFamily: 'Georgia, serif', textDecoration: 'none', borderBottom: `2px solid ${GOLD}`, paddingBottom: '6px', marginBottom: '56px' }}
          >
            hello@genomatch.app
          </a>
          <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px' }}>SEND A MESSAGE</p>
          <h2 style={{ color: FOREST, fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, marginBottom: '40px' }}>Drop us a line</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: FOREST, padding: '40px 24px', textAlign: 'center', borderTop: '1px solid rgba(191,155,74,0.15)' }}>
        <p style={{ color: GOLD, fontSize: '14px', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '8px' }}>Connecting Hearts. Aligning Genes.</p>
        <p style={{ color: 'rgba(143,175,149,0.7)', fontSize: '12px', fontFamily: BODY }}>© {new Date().getFullYear()} GenoMatch Ltd · RC No. 9236521 · Nigeria</p>
      </footer>
    </div>
  )
}
