// Canonical GenoMatch palette and typography tokens for subpages.
// The homepage (app/page.tsx) carries an extended palette of its own.

export const FOREST = '#163522'
export const FOREST_BG = '#0D2818'
export const LINEN = '#F3EDE3'
export const GOLD = '#BF9B4A'
export const SAGE = '#8FAF95'
export const WHITE = '#FFFFFF'
export const TEXT_SOFT = '#5A7268'
export const BODY = 'var(--font-geist-sans), system-ui, sans-serif'
export const DISPLAY = 'Georgia, "Times New Roman", "Palatino Linotype", "Book Antiqua", serif'

export const GOLD_HAIRLINE =
  'linear-gradient(90deg, transparent, rgba(191,155,74,0.09) 22%, rgba(212,188,130,0.33) 50%, rgba(191,155,74,0.09) 78%, transparent)'

/* Dark hero surface: canonical forest green with a soft champagne glow. */
export const HERO_SURFACE = `radial-gradient(ellipse 75% 65% at 50% 0%, rgba(191,155,74,0.10) 0%, transparent 62%), ${FOREST}`
