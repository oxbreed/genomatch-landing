'use client'

import { useState } from 'react'

const FOREST = '#163522'
const FOREST_BG = '#0D2818'
const LINEN = '#F5EFE6'
const GOLD = '#D4A843'
const SAGE = '#8FAF95'
const WHITE = '#FFFFFF'

export default function Partners() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ background: LINEN, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* Nav */}
      <header style={{ background: FOREST_BG, padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(212,168,67,0.15)' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <span style={{ color: GOLD, fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 }}>GenoMatch</span>
        </a>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="/mission" style={{ color: SAGE, fontSize: '14px', textDecoration: 'none', fontFamily: 'Arial, sans-serif' }}>Our Mission</a>
          <a href="/#waitlist" style={{ background: GOLD, color: FOREST_BG, padding: '10px 24px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>Join Waitlist</a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: FOREST, padding: '100px 24px', textAlign: 'center' }}>
        <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: 'Arial, sans-serif', marginBottom: '16px' }}>FOR PARTNERS</p>
        <h1 style={{ color: WHITE, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, maxWidth: '800px', margin: '0 auto 24px', lineHeight: 1.2 }}>
          Partner with us to end preventable sickle cell suffering in Africa
        </h1>
        <p style={{ color: SAGE, fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'Arial, sans-serif' }}>
          GenoMatch is looking for health organisations, NGOs, research institutions, and corporate partners who share our commitment to genetic awareness and family health across West Africa.
        </p>
      </section>

      {/* Why Partner */}
      <section style={{ background: LINEN, padding: '100px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: 'Arial, sans-serif', marginBottom: '16px', textAlign: 'center' }}>WHY PARTNER WITH GENOMATCH</p>
          <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '60px', lineHeight: 1.3, textAlign: 'center' }}>
            The opportunity to change a generation
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Reach', body: 'GenoMatch targets 350M+ smartphone users across West Africa and the African diaspora in the UK, US, and Canada. Our users are educated, intentional singles actively seeking serious relationships.' },
              { title: 'Impact', body: 'Every partnership directly contributes to reducing sickle cell disease incidence. This is measurable, reportable public health impact that aligns with SDG 3 — Good Health and Well-Being.' },
              { title: 'First Mover', body: 'GenoMatch is the first and only genotype-aware dating platform in the world. Partnering now positions your organisation at the forefront of a global health-tech movement.' },
              { title: 'Data & Research', body: 'With user consent, GenoMatch can provide anonymised genotype distribution data across Nigeria and the diaspora — valuable for research, policy, and public health planning.' },
              { title: 'Community Trust', body: 'Our platform is built on trust. A partnership with GenoMatch signals to millions of Nigerians that your organisation is invested in their health and their future.' },
              { title: 'Media & Visibility', body: 'GenoMatch is a compelling story — science, love, and African health innovation. Partner organisations benefit from shared media coverage and brand association.' },
            ].map((item, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: '16px', padding: '32px 24px', borderTop: `3px solid ${GOLD}` }}>
                <h3 style={{ color: FOREST, fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: '#4A6355', fontSize: '15px', lineHeight: 1.7, fontFamily: 'Arial, sans-serif' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section style={{ background: WHITE, padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: 'Arial, sans-serif', marginBottom: '16px', textAlign: 'center' }}>PARTNERSHIP TYPES</p>
          <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '60px', lineHeight: 1.3, textAlign: 'center' }}>
            How we can work together
          </h2>
          {[
            { type: 'Health Organisation', desc: 'WHO, UNICEF, Sickle Cell Society, hospitals, and health ministries. We offer co-branded awareness campaigns, data sharing agreements, and joint research opportunities.' },
            { type: 'NGO & Charity', desc: 'Sickle cell charities, family health organisations, and diaspora community groups. We offer platform integration, referral partnerships, and co-created educational content.' },
            { type: 'Research Institution', desc: 'Universities, medical schools, and research bodies. Access to anonymised genotype data, joint publications, and platform integration for research studies.' },
            { type: 'Corporate & CSR', desc: 'Companies with CSR commitments to African health and family wellbeing. Sponsorship opportunities, employee benefit packages, and brand association with a purpose-driven platform.' },
            { type: 'Government & Policy', desc: 'Health ministries and public health agencies in Nigeria and the diaspora. Policy advisory partnerships, national awareness campaign integration, and data for health planning.' },
          ].map((item, i) => (
            <div key={i} style={{ borderBottom: `1px solid rgba(22,53,34,0.1)`, padding: '32px 0' }}>
              <h3 style={{ color: FOREST, fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{item.type}</h3>
              <p style={{ color: '#4A6355', fontSize: '16px', lineHeight: 1.7, fontFamily: 'Arial, sans-serif' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ background: LINEN, padding: '100px 24px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: 'Arial, sans-serif', marginBottom: '16px' }}>GET IN TOUCH</p>
          <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '16px' }}>Start a conversation</h2>
          <p style={{ color: SAGE, fontSize: '17px', marginBottom: '48px', fontFamily: 'Arial, sans-serif', lineHeight: 1.7 }}>
            Tell us about your organisation and how you'd like to work together. We respond to every serious enquiry within 48 hours.
          </p>
          {submitted ? (
            <div style={{ background: WHITE, borderRadius: '16px', padding: '48px', border: `1px solid rgba(212,168,67,0.3)` }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
              <h3 style={{ color: FOREST, fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>Thank you for reaching out</h3>
              <p style={{ color: SAGE, fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>We'll be in touch within 48 hours.</p>
            </div>
          ) : (
            <div style={{ background: WHITE, borderRadius: '16px', padding: '40px', border: `1px solid rgba(212,168,67,0.3)` }}>
              <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                <label style={{ color: FOREST, fontSize: '14px', fontWeight: 700, fontFamily: 'Arial, sans-serif', display: 'block', marginBottom: '8px' }}>Organisation Name</label>
                <input
                  type="text"
                  value={org}
                  onChange={e => setOrg(e.target.value)}
                  placeholder="Your organisation"
                  style={{ width: '100%', padding: '14px', border: '1px solid #E8E0D5', borderRadius: '8px', fontSize: '16px', fontFamily: 'Arial, sans-serif', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                <label style={{ color: FOREST, fontSize: '14px', fontWeight: 700, fontFamily: 'Arial, sans-serif', display: 'block', marginBottom: '8px' }}>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@organisation.org"
                  style={{ width: '100%', padding: '14px', border: '1px solid #E8E0D5', borderRadius: '8px', fontSize: '16px', fontFamily: 'Arial, sans-serif', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: '28px', textAlign: 'left' }}>
                <label style={{ color: FOREST, fontSize: '14px', fontWeight: 700, fontFamily: 'Arial, sans-serif', display: 'block', marginBottom: '8px' }}>How would you like to partner?</label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Tell us about your organisation and how you'd like to work together..."
                  rows={5}
                  style={{ width: '100%', padding: '14px', border: '1px solid #E8E0D5', borderRadius: '8px', fontSize: '16px', fontFamily: 'Arial, sans-serif', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                />
              </div>
              <button
                onClick={handleSubmit}
                style={{ width: '100%', background: GOLD, color: FOREST_BG, padding: '16px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', border: 'none', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}
              >
                Send Enquiry
              </button>
            </div>
          )}
          <p style={{ color: SAGE, fontSize: '14px', marginTop: '24px', fontFamily: 'Arial, sans-serif' }}>
            Or email us directly at <a href="mailto:hello@genomatch.app" style={{ color: GOLD }}>hello@genomatch.app</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: FOREST_BG, padding: '40px 24px', textAlign: 'center', borderTop: '1px solid rgba(212,168,67,0.15)' }}>
        <p style={{ color: GOLD, fontSize: '14px', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '8px' }}>Connecting Hearts. Aligning Genes.</p>
        <p style={{ color: 'rgba(143,175,149,0.5)', fontSize: '12px', fontFamily: 'Arial, sans-serif' }}>© 2025 GenoMatch Ltd · RC No. 9236521 · Nigeria</p>
      </footer>

    </div>
  )
}
