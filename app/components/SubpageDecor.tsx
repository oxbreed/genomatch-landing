'use client'

import { useId, type CSSProperties, type ReactNode } from 'react'
import Link from 'next/link'
import GenoCrest from './GenoCrest'
import { GOLD, GOLD_HAIRLINE, BODY, DISPLAY } from '../theme'

export function NavBrand({ idPrefix = 'nav' }: { idPrefix?: string }) {
  return (
    <Link href="/" className="gm-wordmark" style={{ textDecoration: 'none' }}>
      <GenoCrest size={28} idPrefix={idPrefix} className="gm-nav-crest shrink-0" />
      <span className="gm-wordmark-text">GenoMatch</span>
    </Link>
  )
}

export function SubpageNav({ idPrefix, children }: { idPrefix: string; children?: ReactNode }) {
  return (
    <header className="gm-nav-glass">
      <span className="gm-nav-ceremony-top" aria-hidden />
      <NavBrand idPrefix={idPrefix} />
      {children ? <div className="gm-nav-actions">{children}</div> : null}
    </header>
  )
}

export function PageGrain() {
  return <div className="gm-page-grain pointer-events-none fixed inset-0 z-[100]" aria-hidden />
}

export function PageVignette() {
  return <div className="gm-page-vignette pointer-events-none fixed inset-0 z-[99]" aria-hidden />
}

export function HeroMesh({ className, style }: { className?: string; style?: CSSProperties }) {
  const uid = useId().replace(/:/g, '')
  const patternId = `hero-mesh-${uid}`

  return (
    <svg
      className={`gm-hero-mesh ${className ?? ''}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        ...style,
      }}
      aria-hidden
    >
      <defs>
        <pattern id={patternId} x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.5" fill={GOLD} opacity="0.14" />
        </pattern>
        <radialGradient id={`${patternId}-fade`} cx="50%" cy="0%" r="75%">
          <stop offset="0%" stopColor={GOLD} stopOpacity="0.1" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} opacity="0.45" />
      <rect width="100%" height="100%" fill={`url(#${patternId}-fade)`} />
    </svg>
  )
}

export function MonogramRings({ style }: { style?: CSSProperties }) {
  const uid = useId().replace(/:/g, '')
  return (
    <svg
      className="gm-monogram-rings"
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(680px, 95vw)',
        height: 'min(680px, 95vw)',
        pointerEvents: 'none',
        ...style,
      }}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden
    >
      <circle cx="200" cy="200" r="190" stroke={GOLD} strokeWidth="0.5" opacity="0.08" />
      <circle cx="200" cy="200" r="155" stroke={GOLD} strokeWidth="0.5" strokeDasharray="3 12" opacity="0.12" />
      <circle cx="200" cy="200" r="120" stroke="#8FAF95" strokeWidth="0.5" opacity="0.07" />
      <path
        d="M200 80v240M140 140c40 30 80 30 120 0M140 260c40-30 80-30 120 0"
        stroke={`url(#${uid}-ring-gold)`}
        strokeWidth="0.5"
        strokeLinecap="round"
        opacity="0.15"
      />
      <defs>
        <linearGradient id={`${uid}-ring-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0E6D0" />
          <stop offset="50%" stopColor="#BF9B4A" />
          <stop offset="100%" stopColor="#8A6824" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function HeroEditorialFrame({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`gm-hero-editorial ${className ?? ''}`} style={style}>
      <span className="gm-hero-rule gm-hero-rule-l" aria-hidden />
      <span className="gm-hero-rule gm-hero-rule-r" aria-hidden />
      <div className="gm-hero-editorial-inner">{children}</div>
    </div>
  )
}

export function Fleuron({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      aria-hidden
    >
      <path
        d="M10 0L11.2 3.2H16L12.4 5.2L13.6 10L10 7.6L6.4 10L7.6 5.2L4 3.2H8.8L10 0Z"
        fill={GOLD}
        fillOpacity="0.4"
      />
    </svg>
  )
}

export function HelixAccent({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={className} style={{ pointerEvents: 'none', ...style }} viewBox="0 0 320 140" fill="none" aria-hidden>
      <path
        d="M40 70c40-35 80-35 120 0s80 35 120 0M40 90c40-35 80-35 120 0s80 35 120 0"
        stroke={GOLD}
        strokeWidth="0.5"
        strokeLinecap="round"
        opacity="0.18"
      />
      <path
        d="M60 50c30 25 60 25 90 0M170 50c30 25 60 25 90 0"
        stroke="#8FAF95"
        strokeWidth="0.5"
        strokeLinecap="round"
        opacity="0.14"
      />
    </svg>
  )
}

export function SectionGlow({ style, color = 'rgba(191,155,74,0.06)' }: { style?: CSSProperties; color?: string }) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(ellipse 55% 50% at 72% 42%, ${color} 0%, transparent 68%)`,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export function SectionBlend({ from, edge = 'top' }: { from: string; edge?: 'top' | 'bottom' }) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        [edge]: 0,
        height: '64px',
        background:
          edge === 'top'
            ? `linear-gradient(180deg, ${from} 0%, transparent 100%)`
            : `linear-gradient(0deg, ${from} 0%, transparent 100%)`,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}

export function DiamondRule({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <div className={`gm-diamond-rule ${className ?? ''}`} style={style} aria-hidden>
      <span className="gm-diamond-rule-line" style={{ background: GOLD_HAIRLINE }} />
      <Fleuron />
      <span className="gm-diamond-rule-line" style={{ background: GOLD_HAIRLINE }} />
    </div>
  )
}

export function CardCorners() {
  const stroke = GOLD
  return (
    <>
      <svg className="gm-corner gm-corner-tl" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M1 7V1h6" stroke={stroke} strokeWidth="0.75" strokeLinecap="round" />
      </svg>
      <svg className="gm-corner gm-corner-tr" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M19 7V1h-6" stroke={stroke} strokeWidth="0.75" strokeLinecap="round" />
      </svg>
    </>
  )
}

export function ValueMark({ label }: { label: string }) {
  return <span className="gm-value-mark" aria-hidden>{label.charAt(0)}</span>
}

export function FooterGlow() {
  return (
    <>
      <div className="gm-footer-glow-line" aria-hidden />
      <div className="gm-footer-glow-radial" aria-hidden />
      <GenoCrest
        size={56}
        idPrefix="footer-watermark"
        style={{ position: 'absolute', right: '24px', bottom: '-8px', opacity: 0.05, pointerEvents: 'none' }}
      />
    </>
  )
}

export function Eyebrow({
  children,
  center,
  dark,
  style,
}: {
  children: ReactNode
  center?: boolean
  dark?: boolean
  style?: CSSProperties
}) {
  return (
    <p
      className={`gm-eyebrow${center ? ' gm-eyebrow-center' : ''}${dark ? ' gm-eyebrow-dark' : ''}`}
      style={{ fontFamily: BODY, ...style }}
    >
      {children}
    </p>
  )
}

export function DisplayHeading({
  children,
  as: Tag = 'h2',
  center,
  light,
  style,
}: {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  center?: boolean
  light?: boolean
  style?: CSSProperties
}) {
  return (
    <Tag
      className={`gm-display${center ? ' gm-display-center' : ''}${light ? ' gm-display-light' : ''}`}
      style={{ fontFamily: DISPLAY, ...style }}
    >
      {children}
    </Tag>
  )
}

export function LegalHero({ title }: { title: string }) {
  return (
    <section className="gm-legal-hero">
      <HeroMesh />
      <MonogramRings style={{ opacity: 0.55 }} />
      <HeroEditorialFrame style={{ position: 'relative', zIndex: 1 }}>
        <DiamondRule style={{ margin: '0 auto 24px', maxWidth: '180px' }} />
        <h1 className="gm-display gm-display-light gm-display-center" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', margin: 0 }}>
          {title}
        </h1>
      </HeroEditorialFrame>
    </section>
  )
}

export function CtaGlow() {
  return <div className="gm-cta-glow" aria-hidden />
}

export function SubpageHero({
  eyebrow,
  title,
  description,
  idPrefix,
}: {
  eyebrow: string
  title: string
  description: string
  idPrefix: string
}) {
  return (
    <section className="gm-subpage-hero">
      <HeroMesh />
      <MonogramRings />
      <GenoCrest
        size={200}
        idPrefix={`${idPrefix}-l`}
        className="gm-hero-crest gm-hero-crest-l hidden sm:block"
      />
      <GenoCrest
        size={200}
        idPrefix={`${idPrefix}-r`}
        className="gm-hero-crest gm-hero-crest-r hidden sm:block"
      />
      <HeroEditorialFrame style={{ position: 'relative', zIndex: 2 }}>
        <DiamondRule style={{ margin: '0 auto 24px', maxWidth: '220px' }} />
        <Eyebrow dark center>
          {eyebrow}
        </Eyebrow>
        <h1 className="gm-display gm-display-light gm-display-center gm-hero-title">{title}</h1>
        <p className="gm-hero-lead">{description}</p>
      </HeroEditorialFrame>
    </section>
  )
}
