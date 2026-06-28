/** Shared FAQ content — single source for visible UI and FAQPage JSON-LD. */

export type FaqItem = {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is GenoMatch?',
    answer:
      'GenoMatch is a genotype-aware dating app built for West Africa and the African diaspora. It matches singles based on sickle cell genotype compatibility (AA, AS, SS, AC) alongside personality and interests, helping couples make informed decisions about their future family health.',
  },
  {
    question: 'How does genotype matching work?',
    answer:
      'You declare your genotype during registration. GenoMatch calculates a compatibility score based on the genetic risk for each pairing. For example, when both partners are AS carriers, each pregnancy carries a 25% chance of an SS child — so GenoMatch surfaces that information before feelings run deep.',
  },
  {
    question: 'Is GenoMatch available in Nigeria?',
    answer:
      'Yes. GenoMatch is built primarily for Nigeria and is expanding across West Africa and the African diaspora in the UK, US, and Canada. The app is launching soon on iOS and Android. Join the waitlist for early access.',
  },
  {
    question: 'What genotypes does GenoMatch support?',
    answer:
      'GenoMatch supports AA (double healthy), AS (sickle cell carrier), SS (sickle cell disease), and AC (haemoglobin C carrier). The app calculates compatibility scores between genotype combinations and shows the sickle cell risk level for each pairing.',
  },
  {
    question: 'Is my genotype data safe?',
    answer:
      'Your genotype is treated as sensitive health data, encrypted, not sold to third parties, and used only for compatibility matching within the app. See our Privacy Policy for how we handle health data under Nigeria\'s NDPA 2023.',
  },
  {
    question: 'What makes GenoMatch different from other dating apps?',
    answer:
      'GenoMatch incorporates sickle cell genotype compatibility into its matching algorithm — a layer that is especially important in West Africa, where sickle cell disease affects millions of families. Mainstream dating apps optimise for attraction; GenoMatch helps you start the health conversation early.',
  },
]

export function getFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
