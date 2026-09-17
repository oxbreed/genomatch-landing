'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BrandMark from './BrandMark'
import { LOGO_RED_DEEP, LOGO_GOLD, BODY } from '../theme'

const NAV_LINKS = [
  { href: '/#how-it-works', label: 'How it works', match: null },
  { href: '/mission', label: 'Our Mission', match: '/mission' },
  { href: '/partners', label: 'For Partners', match: '/partners' },
  { href: '/blog', label: 'Blog', match: '/blog' },
  { href: '/faq', label: 'FAQ', match: '/faq' },
  { href: '/contact', label: 'Contact', match: '/contact' },
] as const

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  function isActive(match: string | null) {
    if (!match) return false
    return pathname === match || pathname.startsWith(`${match}/`)
  }

  return (
    <header
      className="gm-glass-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: '0 24px',
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          minHeight: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <BrandMark size={30} className="shrink-0" />
          <span
            className="gm-wordmark-text"
            style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700 }}
          >
            GenoMatch
          </span>
        </Link>

        <nav
          className="gm-site-nav-desktop"
          aria-label="Primary"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 28,
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          {NAV_LINKS.map(({ href, label, match }) => (
            <Link
              key={href}
              href={href}
              className={`gm-link gm-site-nav-link${isActive(match) ? ' gm-site-nav-link-active' : ''}`}
              style={{
                fontSize: 14,
                textDecoration: 'none',
                fontFamily: BODY,
                fontWeight: isActive(match) ? 700 : 500,
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            className="gm-btn"
            style={{
              background: LOGO_GOLD,
              color: LOGO_RED_DEEP,
              padding: '10px 22px',
              borderRadius: 99,
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: 14,
              fontFamily: BODY,
            }}
          >
            Join Waitlist
          </Link>
        </nav>

        <div className="gm-site-nav-mobile-actions" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link
            href="/#waitlist"
            className="gm-btn gm-site-nav-mobile-cta"
            style={{
              background: LOGO_GOLD,
              color: LOGO_RED_DEEP,
              padding: '8px 14px',
              borderRadius: 99,
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: 12,
              fontFamily: BODY,
              whiteSpace: 'nowrap',
            }}
          >
            Join Waitlist
          </Link>
          <button
            type="button"
            className="gm-site-menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="gm-site-mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M2 5h12M2 11h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="gm-site-mobile-menu"
          className="gm-site-mobile-menu"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.22)',
            padding: '8px 0 16px',
          }}
        >
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            {NAV_LINKS.map(({ href, label, match }, index) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="gm-link"
                style={{
                  display: 'block',
                  padding: '14px 0',
                  fontSize: 15,
                  fontFamily: BODY,
                  textDecoration: 'none',
                  fontWeight: isActive(match) ? 700 : 500,
                  borderBottom:
                    index < NAV_LINKS.length - 1 ? '1px solid rgba(255,255,255,0.18)' : 'none',
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
