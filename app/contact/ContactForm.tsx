'use client'

import { FormEvent, useState } from 'react'
import { submitContactEnquiry } from '../actions'
import { FOREST, FOREST_BG, GOLD, WHITE, TEXT_SOFT, BODY } from '../theme'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName) {
      setError('Please enter your name.')
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
      setError('Please enter a message.')
      return
    }

    setError('')
    setLoading(true)
    try {
      const result = await submitContactEnquiry(trimmedName, trimmedEmail, trimmedMessage)
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

  if (submitted) {
    return (
      <div style={{ background: WHITE, borderRadius: '16px', padding: '48px', border: '1px solid rgba(191,155,74,0.3)' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
        <h2 style={{ color: FOREST, fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>Thank you for getting in touch</h2>
        <p style={{ color: TEXT_SOFT, fontSize: '16px', fontFamily: BODY }}>We will reply within 48 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: WHITE, borderRadius: '16px', padding: '40px', border: '1px solid rgba(191,155,74,0.3)' }}>
      <div style={{ marginBottom: '20px', textAlign: 'left' }}>
        <label htmlFor="contact-name" style={{ color: FOREST, fontSize: '14px', fontWeight: 700, fontFamily: BODY, display: 'block', marginBottom: '8px' }}>Name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name"
          className="gm-input"
          style={{ width: '100%', padding: '14px', border: '1px solid #E8E0D5', borderRadius: '8px', fontSize: '16px', fontFamily: BODY, outline: 'none', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ marginBottom: '20px', textAlign: 'left' }}>
        <label htmlFor="contact-email" style={{ color: FOREST, fontSize: '14px', fontWeight: 700, fontFamily: BODY, display: 'block', marginBottom: '8px' }}>Email Address</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="gm-input"
          style={{ width: '100%', padding: '14px', border: '1px solid #E8E0D5', borderRadius: '8px', fontSize: '16px', fontFamily: BODY, outline: 'none', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ marginBottom: '28px', textAlign: 'left' }}>
        <label htmlFor="contact-message" style={{ color: FOREST, fontSize: '14px', fontWeight: 700, fontFamily: BODY, display: 'block', marginBottom: '8px' }}>Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="How can we help?"
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
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
