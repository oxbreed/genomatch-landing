import Image from 'next/image'
import type { CSSProperties } from 'react'

type BrandMarkProps = {
  size?: number
  className?: string
  style?: CSSProperties
  /** Soft decorative watermark (non-interactive) */
  watermark?: boolean
  priority?: boolean
  alt?: string
}

/** Official GenoMatch 3D heart mark — red over gold infinity. */
export default function BrandMark({
  size = 64,
  className = '',
  style,
  watermark = false,
  priority = false,
  alt = 'GenoMatch',
}: BrandMarkProps) {
  const height = Math.round(size * (606 / 450))

  return (
    <Image
      src="/genomatch-mark-3d.png"
      alt={watermark ? '' : alt}
      width={size}
      height={height}
      priority={priority}
      aria-hidden={watermark || undefined}
      className={`select-none ${watermark ? 'pointer-events-none' : ''} ${className}`.trim()}
      style={{
        width: size,
        height: 'auto',
        filter: watermark
          ? 'drop-shadow(0 8px 24px rgba(143,17,21,0.08))'
          : 'drop-shadow(0 4px 14px rgba(143,17,21,0.12)) drop-shadow(0 1px 0 rgba(255,255,255,0.35))',
        ...style,
      }}
    />
  )
}
