/** Verified public-health statistics and citations used across GenoMatch marketing pages. */

export type HealthSource = {
  label: string
  publisher: string
  url: string
  year?: string
}

export const HEALTH_SOURCES = {
  whoFactSheet: {
    label: 'Sickle cell disease: key facts',
    publisher: 'World Health Organization',
    url: 'https://www.who.int/news-room/fact-sheets/detail/sickle-cell-disease',
    year: '2024',
  },
  whoWha59: {
    label: 'Sickle cell anaemia (WHA59/9)',
    publisher: 'World Health Organization',
    url: 'https://apps.who.int/gb/archive/pdf_files/wha59/a59_9-en.pdf',
    year: '2006',
  },
  whoAfroFactsheet: {
    label: 'Sickle cell disease: the silent killer in Africa',
    publisher: 'WHO African Region',
    url: 'https://files.aho.afro.who.int/afahobckpcontainer/production/files/Regional_Factsheet_on_Sickle_Cell_Disease_EN.pdf',
    year: '2022',
  },
  nihScd: {
    label: 'Sickle Cell Disease',
    publisher: 'National Institutes of Health (NHLBI)',
    url: 'https://www.nhlbi.nih.gov/health/sickle-cell-disease',
  },
  cdcScd: {
    label: 'About Sickle Cell Disease',
    publisher: 'U.S. Centers for Disease Control and Prevention',
    url: 'https://www.cdc.gov/sickle-cell/about/index.html',
  },
  nigeriaMoh: {
    label: 'Nigeria has highest burden of sickle cell disease (Health Minister briefing)',
    publisher: 'Independent Nigeria / Federal Ministry of Health',
    url: 'https://independent.ng/25-of-nigerias-adult-population-carriers-of-sickle-cell-gene-says-health-minister/',
    year: '2022',
  },
  pmcNigeriaReview: {
    label: 'Impact of Sickle Cell Disease on Affected Individuals in Nigeria: A Critical Review',
    publisher: 'Annals of Global Health (PMC)',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10438428/',
    year: '2023',
  },
  scfnLifeExpectancy: {
    label: 'World Sickle Cell Day: life expectancy in Nigeria',
    publisher: 'Sickle Cell Foundation Nigeria',
    url: 'https://sicklecellfoundation.com/news/full-read/8',
    year: '2024',
  },
  plosEconomicBurden: {
    label: 'Economic burden and catastrophic cost among people living with sickle cell disease in Nigeria',
    publisher: 'PLOS ONE',
    url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0272491',
    year: '2022',
  },
  pmcEkitiBurden: {
    label: 'The financial burden of sickle cell disease on households in Ekiti, Southwest Nigeria',
    publisher: 'PMC',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4639479/',
    year: '2015',
  },
  nigeriaMinWage: {
    label: 'National Minimum Wage (Amendment) Act 2024',
    publisher: 'Federal Government of Nigeria',
    url: 'https://www.premiumtimesng.com/news/headlines/696123-nigerian-govt-approves-n70000-minimum-wage.html',
    year: '2024',
  },
  gsmaAfrica2025: {
    label: 'The Mobile Economy Africa 2025',
    publisher: 'GSMA',
    url: 'https://www.gsma.com/about-us/regions/africa/wp-content/uploads/2025/10/GSMA_AFRICA_ME2025_R_Web.pdf',
    year: '2025',
  },
  guardianNigeriaScd: {
    label: 'Sickle cell disorder should be treated as national health emergency',
    publisher: 'The Guardian Nigeria',
    url: 'https://guardian.ng/features/science/sickle-cell-disorder-should-be-treated-as-national-health-emergency/',
    year: '2024',
  },
} as const satisfies Record<string, HealthSource>

export type HealthSourceId = keyof typeof HEALTH_SOURCES

/** Official NFEM mid-market rate, June 2026 — for illustrative USD equivalents only. */
export const NGN_PER_USD = 1361

export function nairaToUsd(naira: number): number {
  return Math.round(naira / NGN_PER_USD)
}

export function formatUsd(naira: number): string {
  return `US$${nairaToUsd(naira).toLocaleString('en-US')}`
}

/** Core sickle cell statistics — keep figures aligned with HEALTH_SOURCES. */
export const SCD_STATS = {
  asCoupleSsRisk: '1 in 4',
  globalBirthsPerYear: '515,000',
  globalBirthsYear: '2021',
  nigeriaBirthsPerYear: '150,000',
  nigeriaBirthsPerDay: '400',
  traitPrevalencePercent: '25%',
  traitCarriersNigeria: '50 million',
  africaShareOfGlobalCases: 'nearly 80%',
  africaShareOfGlobalPatients: 'about 75%',
  underFiveMortalityAfrica: '50 to 80%',
  lifeExpectancyNigeriaYears: 'under 20',
  lifeExpectancyHighIncomeYears: '50 to 60+',
  monthlyMinWageNaira: 70_000,
  crisisCostLowNaira: 50_000,
  crisisCostHighNaira: 500_000,
  africaMobileInternetUsers: '416 million',
} as const

export const SOURCE_SETS = {
  homepageStats: ['whoFactSheet', 'whoWha59', 'nihScd', 'cdcScd'] as const,
  missionStats: ['whoWha59', 'nigeriaMoh', 'whoFactSheet', 'nihScd'] as const,
  nigeriaFactsArticle: [
    'whoFactSheet',
    'whoWha59',
    'nigeriaMoh',
    'whoAfroFactsheet',
    'pmcNigeriaReview',
    'scfnLifeExpectancy',
    'plosEconomicBurden',
    'nigeriaMinWage',
    'nihScd',
  ] as const,
  asMarriageArticle: ['nigeriaMoh', 'whoWha59', 'nihScd', 'cdcScd'] as const,
  genotypeArticle: ['nihScd', 'cdcScd', 'whoWha59'] as const,
  partnersReach: ['gsmaAfrica2025'] as const,
} as const

export function getSources(ids: readonly HealthSourceId[]): HealthSource[] {
  return ids.map((id) => HEALTH_SOURCES[id])
}
