import type { Config } from 'tailwindcss'
import relumePreset from '@relume_io/relume-tailwind'

/** GenoMatch × Relume — semantic tokens Relume components expect, mapped to our palette. */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [relumePreset as Config],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#FBFAF6',
          secondary: '#F3EDE3',
          alternative: '#163522',
          tertiary: '#8FAF95',
        },
        text: {
          primary: '#163522',
          secondary: '#5A7268',
          alternative: '#FFFFFF',
        },
        border: {
          primary: 'rgba(22, 53, 34, 0.14)',
          secondary: 'rgba(191, 155, 74, 0.28)',
          alternative: 'rgba(212, 188, 130, 0.45)',
        },
        link: {
          primary: '#BF9B4A',
          secondary: '#8A6824',
          alternative: '#D4BC82',
        },
      },
      fontFamily: {
        heading: ['Georgia', 'Times New Roman', 'serif'],
        body: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
}

export default config
