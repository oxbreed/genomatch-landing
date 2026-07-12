// Canonical GenoMatch palette — sampled from the app mark (red + gold).
// Export names (FOREST / SAGE) kept for import stability.

/** Primary brand crimson (logo body mid-tone) */
export const FOREST = '#B82C2E'
/** Deeper crimson for gradients / darkest surfaces */
export const FOREST_BG = '#8F1115'
export const LINEN = '#FFFFFF'
/** Antique gold (logo body mid-tone) */
export const GOLD = '#BE995A'
/** Soft blush secondary on dark surfaces */
export const SAGE = '#E8C4C2'
export const WHITE = '#FFFFFF'
export const TEXT_SOFT = '#6B5856'
export const BODY = 'var(--font-geist-sans), system-ui, sans-serif'
export const DISPLAY = 'Georgia, "Times New Roman", "Palatino Linotype", "Book Antiqua", serif'

export const GOLD_HAIRLINE =
  'linear-gradient(90deg, transparent, rgba(190,153,90,0.09) 22%, rgba(232,205,136,0.33) 50%, rgba(190,153,90,0.09) 78%, transparent)'

/* Dark hero: deep crimson with soft gold glow */
export const HERO_SURFACE = `radial-gradient(ellipse 75% 65% at 50% 0%, rgba(190,153,90,0.12) 0%, transparent 62%), ${FOREST_BG}`
