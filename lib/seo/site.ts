/** Canonical site identity — always use the www host (apex 301s here). */

export const SITE_URL = 'https://www.genomatch.app' as const
export const SITE_NAME = 'GenoMatch' as const
export const SITE_LEGAL_NAME = 'GenoMatch Ltd' as const
export const SITE_TAGLINE = 'Connecting Hearts. Aligning Genes.' as const
export const SITE_DEFAULT_TITLE =
  "GenoMatch | The World's First Genotype Aware Dating App" as const
export const SITE_DEFAULT_DESCRIPTION =
  'GenoMatch is the world\u2019s first genotype-aware dating app for West Africa and the African diaspora. Match on sickle cell genotype compatibility (AA, AS, SS, AC) and build intentional, informed love stories.' as const

export const SITE_EMAIL = 'hello@genomatch.app' as const
export const SITE_TWITTER = '@genomatch' as const
export const SITE_LOCALE = 'en_NG' as const
export const SITE_ALTERNATE_LOCALES = ['en_GB', 'en_US'] as const

export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/genomatch-og.png`,
  width: 1200,
  height: 630,
  alt: 'GenoMatch: Connecting Hearts. Aligning Genes.',
} as const

/** High-signal keywords only — Google largely ignores meta keywords; keep this focused. */
export const SITE_KEYWORDS = [
  'GenoMatch',
  'genotype dating app',
  'genotype aware dating',
  'sickle cell dating app',
  'genotype compatibility Nigeria',
  'AA AS compatibility',
  'can AS marry AS',
  'dating app Nigeria',
  'African diaspora dating',
  'sickle cell prevention',
  'haemoglobin genotype matching',
  'intentional dating West Africa',
] as const
