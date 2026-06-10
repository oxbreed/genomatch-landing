import type { CSSProperties } from 'react'

const GOLD_LIGHT = '#F0E6D0'
const GOLD_MID = '#BF9B4A'
const GOLD_DEEP = '#8A6824'
const SAGE = '#7A9488'
const SAGE_LIGHT = '#A8BDB2'

export default function GenoCrest({
  size = 120,
  className,
  style,
  idPrefix = 'crest',
}: {
  size?: number
  className?: string
  style?: CSSProperties
  idPrefix?: string
}) {
  const goldId = `${idPrefix}-g`
  const sageId = `${idPrefix}-s`

  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={goldId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={GOLD_LIGHT} />
          <stop offset="50%" stopColor={GOLD_MID} />
          <stop offset="100%" stopColor={GOLD_DEEP} />
        </linearGradient>
        <linearGradient id={sageId} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={SAGE_LIGHT} />
          <stop offset="100%" stopColor={SAGE} />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="55" stroke={GOLD_MID} strokeWidth="0.375" strokeDasharray="2 8" opacity="0.22" />
      <circle cx="44" cy="60" r="26" stroke={`url(#${goldId})`} strokeWidth="1.25" />
      <circle cx="76" cy="60" r="26" stroke={`url(#${sageId})`} strokeWidth="1.25" />
      <path d="M44 36c10-7 22-7 32 0M44 84c10 7 22 7 32 0" stroke={`url(#${goldId})`} strokeWidth="1" strokeLinecap="round" opacity="0.65" />
      <path d="M60 28v64M48 44c8 6 16 6 24 0M48 76c8-6 16-6 24 0" stroke={SAGE} strokeWidth="0.5" strokeLinecap="round" opacity="0.42" />
      <circle cx="60" cy="60" r="4" fill={`url(#${goldId})`} />
    </svg>
  )
}
