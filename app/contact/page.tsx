import GenoCrest from '../components/GenoCrest'
import SiteHeader from '../components/SiteHeader'
import ContactForm from './ContactForm'
import { FOREST, LINEN, GOLD, SAGE, WHITE, TEXT_SOFT, BODY, HERO_SURFACE } from '../theme'

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

      <SiteHeader />

      {/* Hero */}
      <section style={{ background: HERO_SURFACE, padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <GenoCrest size={220} idPrefix="contact-hero-l" className="hidden sm:block" style={{ position: 'absolute', left: '-70px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <GenoCrest size={220} idPrefix="contact-hero-r" className="hidden sm:block" style={{ position: 'absolute', right: '-70px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px' }}>CONTACT US</p>
        <h1 style={{ color: FOREST, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, maxWidth: '800px', margin: '0 auto 24px', lineHeight: 1.2 }}>
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
      <footer style={{ background: WHITE, padding: '40px 24px', textAlign: 'center', borderTop: '1px solid rgba(184,44,46,0.1)' }}>
        <p style={{ color: GOLD, fontSize: '14px', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '8px' }}>Connecting Hearts. Aligning Genes.</p>
        <p style={{ color: TEXT_SOFT, fontSize: '12px', fontFamily: BODY }}>© {new Date().getFullYear()} GenoMatch Ltd · RC No. 9236521 · Nigeria</p>
      </footer>
    </div>
  )
}
