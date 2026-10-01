import type { Metadata } from 'next'
import {
  DEFAULT_OG_IMAGE,
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_TITLE,
  SITE_KEYWORDS,
  SITE_LEGAL_NAME,
  SITE_LOCALE,
  SITE_ALTERNATE_LOCALES,
  SITE_NAME,
  SITE_TWITTER,
  SITE_URL,
} from './site'

export type PageMetadataInput = {
  /** Page title segment. Template appends "| GenoMatch" unless absolute is set. */
  title: string
  description: string
  /** Path beginning with `/`, or `/` for home. */
  path: string
  /** Use the full title as-is (no template suffix). */
  absoluteTitle?: boolean
  image?: {
    url: string
    width?: number
    height?: number
    alt?: string
  }
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  noIndex?: boolean
  keywords?: string[]
}

function absoluteUrl(path: string): string {
  if (path === '/' || path === '') return SITE_URL
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function buildMetadata(input: PageMetadataInput): Metadata {
  const url = absoluteUrl(input.path)
  const image = input.image ?? DEFAULT_OG_IMAGE
  const title = input.absoluteTitle
    ? { absolute: input.title }
    : input.title

  const ogImages = [
    {
      url: image.url,
      width: image.width ?? 1200,
      height: image.height ?? 630,
      alt: image.alt ?? SITE_NAME,
    },
  ]

  return {
    title,
    description: input.description,
    keywords: input.keywords ?? [...SITE_KEYWORDS],
    authors: [{ name: SITE_LEGAL_NAME, url: SITE_URL }],
    creator: SITE_LEGAL_NAME,
    publisher: SITE_LEGAL_NAME,
    alternates: {
      canonical: url,
    },
    robots: input.noIndex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      type: input.type ?? 'website',
      locale: SITE_LOCALE,
      alternateLocale: [...SITE_ALTERNATE_LOCALES],
      url,
      siteName: SITE_NAME,
      title: input.absoluteTitle
        ? input.title
        : `${input.title} | ${SITE_NAME}`,
      description: input.description,
      images: ogImages,
      ...(input.type === 'article'
        ? {
            publishedTime: input.publishedTime,
            modifiedTime: input.modifiedTime ?? input.publishedTime,
            authors: input.authors ?? [SITE_LEGAL_NAME],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: input.absoluteTitle
        ? input.title
        : `${input.title} | ${SITE_NAME}`,
      description: input.description,
      images: [image.url],
      creator: SITE_TWITTER,
    },
  }
}

export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SITE_DEFAULT_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DEFAULT_DESCRIPTION,
    keywords: [...SITE_KEYWORDS],
    authors: [{ name: SITE_LEGAL_NAME, url: SITE_URL }],
    creator: SITE_LEGAL_NAME,
    publisher: SITE_LEGAL_NAME,
    category: 'dating',
    applicationName: SITE_NAME,
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: SITE_LOCALE,
      alternateLocale: [...SITE_ALTERNATE_LOCALES],
      url: SITE_URL,
      siteName: SITE_NAME,
      title: SITE_DEFAULT_TITLE,
      description:
        'Find love without leaving your family\u2019s future to chance. GenoMatch matches you with genetically compatible partners across Nigeria and the African diaspora.',
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_DEFAULT_TITLE,
      description:
        'Find love without leaving your family\u2019s future to chance. Built for Nigeria and the African diaspora.',
      images: [DEFAULT_OG_IMAGE.url],
      creator: SITE_TWITTER,
    },
    alternates: {
      canonical: SITE_URL,
    },
    icons: {
      icon: [
        {
          url: `${SITE_URL}/favicon.png`,
          type: 'image/png',
          sizes: '192x192',
        },
        {
          url: `${SITE_URL}/favicon.ico`,
          sizes: 'any',
        },
      ],
      shortcut: `${SITE_URL}/favicon.ico`,
      apple: [
        {
          url: `${SITE_URL}/apple-touch-icon.png`,
          sizes: '180x180',
          type: 'image/png',
        },
      ],
    },
    verification: {
      // Domain (DNS) verification is owned in Namecheap TXT on genomatch.app.
      // These meta tags enable the HTML-tag method for the URL-prefix property
      // https://www.genomatch.app/ — use this if DNS Domain verification fails.
      google: [
        // Current live DNS TXT on genomatch.app (as of 2026-10-01)
        'OHWaoCTLxF4BrVW4iNW6JHVj8L1X7kQiSOZyUnrZSlg',
        // Earlier DNS TXT Google reported during a failed Domain verify attempt
        'tfUaoN4tPyL_JUs4pP_zP18fx2K6kTj4Prqh6zWKpm4',
        ...(process.env.GOOGLE_SITE_VERIFICATION
          ? [process.env.GOOGLE_SITE_VERIFICATION]
          : []),
      ],
      other: {
        'msvalidate.01': '7A0E9B04FDCB32C33C1268B7A9C5E875',
      },
    },
  }
}
