'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { submitPartnerEnquiry } from '../actions'
import GenoCrest from '../components/GenoCrest'
import SourcesBlock from '../components/SourcesBlock'
import { SCD_STATS, SOURCE_SETS } from '@/lib/scd-facts'
import { FOREST, FOREST_BG, LINEN, GOLD, SAGE, WHITE, TEXT_SOFT, BODY, HERO_SURFACE } from '../theme'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Partners() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedOrg = org.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (!trimmedOrg) {
      setError('Please enter your organisation name.')
      return
    }
    if (!trimmedEmail) {
      setError('Please enter your email address.')
      return
    }
    if (!EMAIL_RE.test(trimmedEmail)) {
      setError('Please enter a valid email address.')
      return
    }
    if (!trimmedMessage) {
      setError('Please tell us how you would like to partner.')
      return
    }

    setError('')
    setLoading(true)
    try {
      const result = await submitPartnerEnquiry(trimmedOrg, trimmedEmail, trimmedMessage)
      if (result.success) {
        setSubmitted(true)
      } else {
        setError(result.message)
      }
    } catch {
      setError('Something went wrong. Please try again or email us directly at hello@genomatch.app')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ background: LINEN, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* Nav */}
      <header style={{ background: FOREST, padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(191,155,74,0.15)' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ color: GOLD, fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 }}>GenoMatch</span>
        </Link>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link href="https://www.genomatch.app/#how-it-works" className="gm-link" style={{ color: SAGE, fontSize: '14px', textDecoration: 'none', fontFamily: BODY }}>How it works</Link>
          <Link href="/mission" className="gm-link" style={{ color: SAGE, fontSize: '14px', textDecoration: 'none', fontFamily: BODY }}>Our Mission</Link>
          <Link href="/partners" className="gm-link" style={{ color: GOLD, fontSize: '14px', textDecoration: 'none', fontFamily: BODY, fontWeight: 700 }}>For Partners</Link>
          <Link href="/blog" className="gm-link" style={{ color: SAGE, fontSize: '14px', textDecoration: 'none', fontFamily: BODY }}>Blog</Link>
          <Link href="/#waitlist" className="gm-btn" style={{ background: GOLD, color: FOREST_BG, padding: '10px 24px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '14px', fontFamily: BODY }}>Join Waitlist</Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: HERO_SURFACE, padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <GenoCrest size={220} idPrefix="partners-hero-l" className="hidden sm:block" style={{ position: 'absolute', left: '-70px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <GenoCrest size={220} idPrefix="partners-hero-r" className="hidden sm:block" style={{ position: 'absolute', right: '-70px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px' }}>FOR PARTNERS</p>
        <h1 style={{ color: WHITE, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, maxWidth: '800px', margin: '0 auto 24px', lineHeight: 1.2 }}>
          Partner with us to end preventable sickle cell suffering in Africa
        </h1>
        <p style={{ color: SAGE, fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontFamily: BODY }}>
          GenoMatch is looking for health organisations, NGOs, research institutions, and corporate partners who share our commitment to genetic awareness and family health across West Africa, the diaspora, and communities everywhere.
        </p>
      </section>

      {/* Why Partner */}
      <section style={{ background: LINEN, padding: '100px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px', textAlign: 'center' }}>WHY PARTNER WITH GENOMATCH</p>
          <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '60px', lineHeight: 1.3, textAlign: 'center' }}>
            The opportunity to change a generation
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Reach', body: `GenoMatch targets ${SCD_STATS.africaMobileInternetUsers}+ mobile internet users across Africa (GSMA, 2024), centred on Nigeria, the world's largest sickle cell burden, and extending to the African diaspora in the UK, US, and Canada. Our users are educated, intentional singles actively seeking serious relationships.` },
              { title: 'Impact', body: 'Every partnership directly contributes to reducing sickle cell disease incidence. This is measurable, reportable public health impact that aligns with SDG 3, Good Health and Well Being.' },
              { title: 'First Mover', body: 'GenoMatch is the first and only genotype aware dating platform in the world. Partnering now positions your organisation at the forefront of a global health technology movement.' },
              { title: 'Data & Research', body: 'With user consent, GenoMatch can provide anonymised genotype distribution data across Nigeria and the diaspora, valuable for research, policy, and public health planning.' },
              { title: 'Community Trust', body: 'Our platform is built on trust. A partnership with GenoMatch signals to millions of Nigerians that your organisation is invested in their health and their future.' },
              { title: 'Media & Visibility', body: 'GenoMatch is a compelling story of science, love, and African health innovation. Partner organisations benefit from shared media coverage and brand association.' },
            ].map((item, i) => (
              <div key={i} className="gm-card" style={{ background: WHITE, borderRadius: '16px', padding: '32px 24px', borderTop: `3px solid ${GOLD}` }}>
                <h3 style={{ color: FOREST, fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: TEXT_SOFT, fontSize: '15px', lineHeight: 1.7, fontFamily: BODY }}>{item.body}</p>
              </div>
            ))}
          </div>
          <SourcesBlock
            sourceIds={SOURCE_SETS.partnersReach}
            note="Mobile reach figure refers to mobile internet subscribers across Africa per GSMA (2024 baseline, 2025 report)."
          />
        </div>
      </section>

      {/* Partnership Types */}
      <section style={{ background: WHITE, padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px', textAlign: 'center' }}>PARTNERSHIP TYPES</p>
          <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '60px', lineHeight: 1.3, textAlign: 'center' }}>
            How we can work together
          </h2>
          {[
            { type: 'Health Organisation', desc: 'WHO, UNICEF, Sickle Cell Society, hospitals, and health ministries. We offer joint awareness campaigns, data sharing agreements, and research opportunities.' },
            { type: 'NGO & Charity', desc: 'Sickle cell charities, family health organisations, and diaspora community groups. We offer platform integration, referral partnerships, and educational content created together.' },
            { type: 'Research Institution', desc: 'Universities, medical schools, and research bodies. Access to anonymised genotype data, joint publications, and platform integration for research studies.' },
            { type: 'Corporate & CSR', desc: 'Companies with CSR commitments to African health and family wellbeing. Sponsorship opportunities, employee benefit packages, and brand association with a purpose driven platform.' },
            { type: 'Government & Policy', desc: 'Health ministries and public health agencies in Nigeria and the diaspora. Policy advisory partnerships, national awareness campaign integration, and data for health planning.' },
          ].map((item, i) => (
            <div key={i} style={{ borderBottom: `1px solid rgba(22,53,34,0.1)`, padding: '32px 0' }}>
              <h3 style={{ color: FOREST, fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{item.type}</h3>
              <p style={{ color: TEXT_SOFT, fontSize: '16px', lineHeight: 1.7, fontFamily: BODY }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ background: LINEN, padding: '100px 24px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px' }}>GET IN TOUCH</p>
          <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '16px' }}>Start a conversation</h2>
          <p style={{ color: TEXT_SOFT, fontSize: '17px', marginBottom: '48px', fontFamily: BODY, lineHeight: 1.7 }}>
            Tell us about your organisation and how you'd like to work together. We respond to every serious enquiry within 48 hours.
          </p>
          {submitted ? (
            <div style={{ background: WHITE, borderRadius: '16px', padding: '48px', border: `1px solid rgba(191,155,74,0.3)` }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
              <h3 style={{ color: FOREST, fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>Thank you for reaching out</h3>
              <p style={{ color: TEXT_SOFT, fontSize: '16px', fontFamily: BODY }}>We'll be in touch within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: WHITE, borderRadius: '16px', padding: '40px', border: `1px solid rgba(191,155,74,0.3)` }}>
              <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                <label style={{ color: FOREST, fontSize: '14px', fontWeight: 700, fontFamily: BODY, display: 'block', marginBottom: '8px' }}>Organisation Name</label>
                <input
                  type="text"
                  value={org}
                  onChange={e => setOrg(e.target.value)}
                  placeholder="Your organisation"
                  className="gm-input"
                  style={{ width: '100%', padding: '14px', border: '1px solid #E8E0D5', borderRadius: '8px', fontSize: '16px', fontFamily: BODY, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                <label style={{ color: FOREST, fontSize: '14px', fontWeight: 700, fontFamily: BODY, display: 'block', marginBottom: '8px' }}>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@organisation.org"
                  className="gm-input"
                  style={{ width: '100%', padding: '14px', border: '1px solid #E8E0D5', borderRadius: '8px', fontSize: '16px', fontFamily: BODY, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: '28px', textAlign: 'left' }}>
                <label style={{ color: FOREST, fontSize: '14px', fontWeight: 700, fontFamily: BODY, display: 'block', marginBottom: '8px' }}>How would you like to partner?</label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Tell us about your organisation and how you'd like to work together..."
                  rows={5}
                  className="gm-input"
                  style={{ width: '100%', padding: '14px', border: '1px solid #E8E0D5', borderRadius: '8px', fontSize: '16px', fontFamily: BODY, outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                />
              </div>
              {error ? (
                <p style={{ color: '#C0392B', fontSize: '14px', fontFamily: BODY, marginBottom: '16px', textAlign: 'left' }} role="alert">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={loading}
                className="gm-btn"
                style={{ width: '100%', background: GOLD, color: FOREST_BG, padding: '16px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, fontFamily: BODY }}
              >
                {loading ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          )}
          <p style={{ color: TEXT_SOFT, fontSize: '14px', marginTop: '24px', fontFamily: BODY }}>
            Or email us directly at <a href="mailto:hello@genomatch.app" className="gm-link" style={{ color: GOLD }}>hello@genomatch.app</a>
          </p>
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
