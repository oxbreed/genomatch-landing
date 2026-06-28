import type { CSSProperties } from 'react'

const GOLD_LIGHT = '#F0E6D0'
const GOLD_MID = '#BF9B4A'
const GOLD_DEEP = '#8A6824'
const SCD_RED = '#A52A3A'
const SCD_DEEP = '#7A1A2E'
const SCD_LIGHT = '#C94B5A'

export default function SickleCellMark({
  size = 48,
  className,
  style,
  idPrefix = 'scd',
  variant = 'default',
}: {
  size?: number
  className?: string
  style?: CSSProperties
  idPrefix?: string
  variant?: 'default' | 'light' | 'mono'
}) {
  const redId = `${idPrefix}-red`
  const goldId = `${idPrefix}-gold`

  const sickleFill = variant === 'mono' ? SCD_RED : `url(#${redId})`
  const ringStroke = variant === 'light' ? GOLD_LIGHT : GOLD_MID
  const ghostStroke = variant === 'light' ? 'rgba(240,230,208,0.35)' : 'rgba(165,42,58,0.18)'

  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="Sickle cell awareness"
    >
      <title>Sickle cell awareness</title>
      {variant !== 'mono' ? (
        <defs>
          <linearGradient id={redId} x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor={SCD_LIGHT} />
            <stop offset="45%" stopColor={SCD_RED} />
            <stop offset="100%" stopColor={SCD_DEEP} />
          </linearGradient>
          <linearGradient id={goldId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={GOLD_LIGHT} />
            <stop offset="50%" stopColor={GOLD_MID} />
            <stop offset="100%" stopColor={GOLD_DEEP} />
          </linearGradient>
        </defs>
      ) : null}

      <circle cx="32" cy="32" r="28" stroke={ghostStroke} strokeWidth="1" strokeDasharray="3 5" />
      <circle cx="32" cy="32" r="29.5" stroke={ringStroke} strokeWidth="0.75" opacity={variant === 'light' ? 0.55 : 0.35} />

      <path
        d="M44 14c8 6 10 16 6 26-2 6-7 12-14 16-5 3-11 4-16 3 8-2 14-8 17-15 4-9 2-20-7-28 4 0 9 1 14-2Z"
        fill={sickleFill}
        opacity={variant === 'light' ? 0.92 : 1}
      />

      <path
        d="M38 20c5 4 6 11 3 17-2 4-6 8-11 10"
        stroke={variant === 'light' ? GOLD_LIGHT : GOLD_MID}
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.45"
      />

      <circle cx="32" cy="32" r="2" fill={variant === 'light' ? GOLD_LIGHT : GOLD_MID} opacity="0.5" />
    </svg>
  )
}
