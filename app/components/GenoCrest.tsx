import type { CSSProperties } from 'react'
import BrandMark from './BrandMark'

/**
 * Site crest — official 3D GenoMatch mark.
 * Kept as GenoCrest for existing imports / API stability.
 */
export default function GenoCrest({
  size = 120,
  className,
  style,
  idPrefix: _idPrefix = 'crest',
  watermark = false,
  priority,
}: {
  size?: number
  className?: string
  style?: CSSProperties
  idPrefix?: string
  watermark?: boolean
  priority?: boolean
}) {
  void _idPrefix
  const inferredWatermark =
    watermark ||
    Boolean(
      className &&
        (className.includes('pointer-events-none') ||
          /opacity-\[0\.\d+\]/.test(className) ||
          (typeof style?.opacity === 'number' && style.opacity < 0.35))
    )

  return (
    <BrandMark
      size={size}
      className={className}
      style={style}
      watermark={inferredWatermark}
      priority={priority}
    />
  )
}
