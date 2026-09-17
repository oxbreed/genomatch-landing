import Image from 'next/image'
import type { CSSProperties } from 'react'

const ASPECT = 552 / 829

/**
 * Sickle cell awareness ribbon — reserved ribbon red, not brand red.
 * `size` controls height; width follows the natural ribbon aspect.
 */
export default function SickleCellRibbon({
  size = 36,
  className,
  style,
  variant = 'default',
}: {
  size?: number
  className?: string
  style?: CSSProperties
  /** Kept for call-site compatibility; image mark is the same for both. */
  variant?: 'default' | 'light'
}) {
  void variant
  const height = size
  const width = Math.max(12, Math.round(size * ASPECT))

  return (
    <Image
      src="/sickle-cell-ribbon.png"
      alt="Sickle cell awareness"
      width={width}
      height={height}
      className={`select-none ${className ?? ''}`.trim()}
      style={{
        width,
        height,
        objectFit: 'contain',
        filter: 'drop-shadow(0 2px 6px rgba(122,26,46,0.18))',
        ...style,
      }}
    />
  )
}
