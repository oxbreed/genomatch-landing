import type { CSSProperties } from 'react'

const SCD_RIBBON = '#E0162B'
const SCD_RIBBON_LIGHT = '#FF2D42'

/** Standard awareness-ribbon shape — loop with crossed tails. */
export default function SickleCellRibbon({
  size = 36,
  className,
  style,
  variant = 'default',
}: {
  size?: number
  className?: string
  style?: CSSProperties
  variant?: 'default' | 'light'
}) {
  const fill = variant === 'light' ? SCD_RIBBON_LIGHT : SCD_RIBBON

  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sickle cell awareness"
    >
      <title>Sickle cell awareness</title>
      <path
        fill={fill}
        d="M412.274 0H342.83L256 147.726 169.17 0H99.726l120.774 192L99.726 384 169.17 512l86.83-147.726L342.83 512l69.444-128-120.774-192L412.274 0z"
      />
    </svg>
  )
}
