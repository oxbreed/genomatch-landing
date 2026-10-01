import type { MetadataRoute } from 'next'
import { SITE_DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/seo/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DEFAULT_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F5',
    theme_color: '#0B0C0E',
    lang: 'en',
    categories: ['lifestyle', 'social', 'health'],
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/genomatch-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
    id: SITE_URL,
  }
}
