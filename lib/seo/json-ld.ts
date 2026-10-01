import { getFaqJsonLd } from '../faq'
import {
  SITE_DEFAULT_DESCRIPTION,
  SITE_EMAIL,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from './site'
import type { BlogPost } from './blog-posts'

type JsonLd = Record<string, unknown>

export function organizationJsonLd(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_LEGAL_NAME,
    legalName: SITE_LEGAL_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/genomatch-icon.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/genomatch-og.png`,
    description: SITE_DEFAULT_DESCRIPTION,
    slogan: SITE_TAGLINE,
    foundingDate: '2025',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
    },
    areaServed: [
      { '@type': 'Country', name: 'Nigeria' },
      { '@type': 'Place', name: 'West Africa' },
      { '@type': 'Place', name: 'African diaspora' },
    ],
    sameAs: ['https://www.instagram.com/genomatch1'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SITE_EMAIL,
        availableLanguage: ['English'],
      },
    ],
  }
}

export function websiteJsonLd(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DEFAULT_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en',
  }
}

export function softwareApplicationJsonLd(): JsonLd {
  return {
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#app`,
    name: SITE_NAME,
    applicationCategory: 'LifestyleApplication',
    applicationSubCategory: 'Dating',
    operatingSystem: 'iOS, Android',
    url: SITE_URL,
    description: SITE_DEFAULT_DESCRIPTION,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'NGN',
    },
    creator: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en',
    featureList: [
      'Genotype-aware matching (AA, AS, SS, AC)',
      'Sickle cell disease compatibility scoring',
      'Profile genotype verification',
      'Encrypted genotype health data',
      'NDPA 2023 Nigeria data protection compliant',
      'West Africa and diaspora focused',
    ],
    about: [
      { '@type': 'MedicalCondition', name: 'Sickle Cell Disease' },
      { '@type': 'MedicalCondition', name: 'Sickle Cell Trait' },
      { '@type': 'Thing', name: 'Genotype Compatibility' },
    ],
  }
}

/** Sitewide graph rendered once in the root layout. */
export function siteGraphJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationJsonLd(),
      websiteJsonLd(),
      softwareApplicationJsonLd(),
    ],
  }
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  }
}

export function blogPostingJsonLd(post: BlogPost): JsonLd {
  const url = `${SITE_URL}/blog/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Organization',
      name: SITE_LEGAL_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_LEGAL_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/genomatch-icon.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    image: [`${SITE_URL}/genomatch-og.png`],
    articleSection: post.category,
    keywords: post.keywords.join(', '),
    inLanguage: 'en',
    isPartOf: {
      '@type': 'Blog',
      '@id': `${SITE_URL}/blog#blog`,
      name: `${SITE_NAME} Blog`,
      url: `${SITE_URL}/blog`,
    },
    wordCount: post.wordCount,
    timeRequired: post.timeRequired,
  }
}

export function faqPageJsonLd(): JsonLd {
  return getFaqJsonLd()
}

export function serializeJsonLd(data: JsonLd | JsonLd[]): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
