export type BlogPost = {
  slug: string
  title: string
  description: string
  /** ISO 8601 date (YYYY-MM-DD). */
  datePublished: string
  dateModified: string
  /** Display date for UI. */
  displayDate: string
  readTime: string
  /** ISO 8601 duration, e.g. PT5M */
  timeRequired: string
  category: string
  keywords: string[]
  /** Approximate visible word count for BlogPosting schema. */
  wordCount: number
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-genotype-should-i-check-before-marriage',
    title: 'What Genotype Should I Check Before Marriage in Nigeria?',
    description:
      'Before you say yes, there is one conversation that could change everything. Here is what every Nigerian needs to know about genotype compatibility before marriage.',
    datePublished: '2026-06-01',
    dateModified: '2026-06-01',
    displayDate: 'June 2026',
    readTime: '5 min read',
    timeRequired: 'PT5M',
    category: 'Genotype Education',
    keywords: [
      'genotype before marriage Nigeria',
      'AA AS SS AC genotypes',
      'genotype compatibility',
      'sickle cell trait marriage',
    ],
    wordCount: 1100,
  },
  {
    slug: 'can-as-marry-as',
    title: 'Can AS Marry AS? The Truth About Sickle Cell Risk',
    description:
      'It is one of the most searched questions in Nigeria. The answer is more nuanced than a simple yes or no, and understanding it could protect your future family.',
    datePublished: '2026-06-01',
    dateModified: '2026-06-01',
    displayDate: 'June 2026',
    readTime: '6 min read',
    timeRequired: 'PT6M',
    category: 'Sickle Cell Awareness',
    keywords: [
      'can AS marry AS',
      'AS AS sickle cell risk',
      'sickle cell carrier marriage',
      'genotype compatibility Nigeria',
    ],
    wordCount: 1300,
  },
  {
    slug: 'sickle-cell-disease-nigeria-facts',
    title: 'Sickle Cell Disease in Nigeria: The Numbers That Should Shock You',
    description:
      'Nigeria has the highest burden of sickle cell disease in the world. These are the facts every Nigerian needs to know, and what we can do about it.',
    datePublished: '2026-06-01',
    dateModified: '2026-06-01',
    displayDate: 'June 2026',
    readTime: '4 min read',
    timeRequired: 'PT4M',
    category: 'Public Health',
    keywords: [
      'sickle cell disease Nigeria statistics',
      'SCD prevalence Nigeria',
      'sickle cell awareness Africa',
      'WHO sickle cell Nigeria',
    ],
    wordCount: 950,
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}
