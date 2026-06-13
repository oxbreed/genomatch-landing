import Link from 'next/link'
import SourcesBlock from '../../components/SourcesBlock'
import { formatUsd, SCD_STATS, SOURCE_SETS } from '@/lib/scd-facts'

export const metadata = {
  title: 'Sickle Cell Disease in Nigeria: The Numbers That Should Shock You',
  description: 'Nigeria has the highest burden of sickle cell disease in the world. These are the facts every Nigerian needs to know, and what we can do about it.',
}

import { FOREST, FOREST_BG, LINEN, GOLD, SAGE, WHITE, TEXT_SOFT, BODY, HERO_SURFACE } from '../../theme'

export default function Article3() {
  const crisisLowUsd = formatUsd(SCD_STATS.crisisCostLowNaira)
  const crisisHighUsd = formatUsd(SCD_STATS.crisisCostHighNaira)
  const minWageUsd = formatUsd(SCD_STATS.monthlyMinWageNaira)

  return (
    <div style={{ background: LINEN, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <header style={{ background: FOREST, padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(191,155,74,0.15)' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ color: GOLD, fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 }}>GenoMatch</span>
        </Link>
        <Link href="/#waitlist" className="gm-btn" style={{ background: GOLD, color: FOREST_BG, padding: '10px 24px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '14px', fontFamily: BODY }}>Join Waitlist</Link>
      </header>

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px' }}>
        <a href="/blog" className="gm-link" style={{ color: GOLD, fontSize: '14px', fontFamily: BODY, textDecoration: 'none', display: 'block', marginBottom: '40px' }}>← Back to Blog</a>
        <span style={{ background: LINEN, color: FOREST, fontSize: '11px', letterSpacing: '1px', padding: '4px 12px', borderRadius: '99px', fontFamily: BODY, fontWeight: 700, border: `1px solid rgba(22,53,34,0.15)` }}>Public Health</span>
        <h1 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 700, margin: '24px 0 16px', lineHeight: 1.2 }}>
          Sickle Cell Disease in Nigeria: The Numbers That Should Shock You
        </h1>
        <p style={{ color: TEXT_SOFT, fontSize: '14px', fontFamily: BODY, marginBottom: '48px' }}>June 2026 · 4 min read · GenoMatch</p>

        <div style={{ color: '#2A4A35', fontSize: '18px', lineHeight: 1.9, fontFamily: BODY }}>
          <p style={{ marginBottom: '24px' }}>Nigeria is one of the most vibrant, resilient, and culturally rich nations on earth. It is also home to the world&apos;s highest burden of sickle cell disease. These two facts coexist, and the second one does not get nearly enough attention.</p>
          <p style={{ marginBottom: '24px' }}>Here are the numbers, each verified against WHO, the Nigerian health ministry, and peer reviewed research. All of them matter.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '48px 0' }}>
            {[
              { stat: `${SCD_STATS.nigeriaBirthsPerYear}+`, label: 'Children born with SCD in Nigeria every year' },
              { stat: `~${SCD_STATS.traitCarriersNigeria}`, label: 'Nigerians estimated to carry the sickle cell trait (~25% of the population)' },
              { stat: SCD_STATS.asCoupleSsRisk, label: 'Risk of an SS child when two AS carriers have children' },
              { stat: SCD_STATS.africaShareOfGlobalCases, label: 'Of global sickle cell cases are in sub Saharan Africa' },
              { stat: SCD_STATS.underFiveMortalityAfrica, label: 'Of infants born with SCD in Africa who die before age 5' },
              { stat: 'Under 20', label: 'Years, average life expectancy with SCD in Nigeria' },
            ].map((item, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: '16px', padding: '24px', borderLeft: `4px solid ${GOLD}` }}>
                <div style={{ color: GOLD, fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>{item.stat}</div>
                <div style={{ color: FOREST, fontSize: '13px', lineHeight: 1.5 }}>{item.label}</div>
              </div>
            ))}
          </div>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>What these numbers mean</h2>
          <p style={{ marginBottom: '24px' }}>Every single day in Nigeria, more than {SCD_STATS.nigeriaBirthsPerDay} children are born with sickle cell disease, more than one every two minutes, based on the estimated {SCD_STATS.nigeriaBirthsPerYear} annual births reported by WHO and Nigeria&apos;s Federal Ministry of Health. Each of these children will face a lifetime of pain crises, hospital admissions, organ damage, and social limitations that their peers will never experience.</p>
          <p style={{ marginBottom: '24px' }}>Their parents, in the vast majority of cases, did not know. Not because they did not care, but because nobody told them to check before they fell in love.</p>
          <p style={{ marginBottom: '24px' }}>Life expectancy tells the story sharply: in Nigeria, the average for people with sickle cell disease remains under 20 years, according to the Sickle Cell Foundation Nigeria. In the United States and United Kingdom, with comprehensive specialist care, median survival now exceeds {SCD_STATS.lifeExpectancyHighIncomeYears} years. The gap is driven by access to care, not biology.</p>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>The cost of not knowing</h2>
          <p style={{ marginBottom: '24px' }}>The economic burden of sickle cell disease in Nigeria is staggering. A single pain crisis requiring hospitalisation can cost a family between ₦{SCD_STATS.crisisCostLowNaira.toLocaleString('en-US')} and ₦{SCD_STATS.crisisCostHighNaira.toLocaleString('en-US')} (roughly {crisisLowUsd} to {crisisHighUsd} at June 2026 exchange rates), with studies in Lagos and Enugu reporting hospital bills and monthly care costs that push many households into catastrophic health spending. In a country where the national minimum wage is ₦{SCD_STATS.monthlyMinWageNaira.toLocaleString('en-US')} per month (about {minWageUsd}), a single admission can consume a month&apos;s income or more. For families with SS children, this is not an occasional expense. It is a constant financial emergency.</p>
          <p style={{ marginBottom: '24px' }}>Beyond money, the emotional weight of watching a child suffer from a preventable condition, and knowing that a single conversation before marriage could have changed everything, is a burden no family should have to carry.</p>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>What can be done</h2>
          <p style={{ marginBottom: '24px' }}>The medical community has known for decades that sickle cell disease is preventable through genotype aware family planning. The challenge has never been the science. It has been the culture, the reluctance to have the conversation early, the stigma around SS, the lack of accessible tools to make genotype awareness part of everyday life.</p>
          <p style={{ marginBottom: '24px' }}>This is what GenoMatch is changing. By integrating genotype compatibility into the dating process itself, the earliest possible moment of a potential relationship, we are making the conversation normal, natural, and timely.</p>
          <p style={{ marginBottom: '48px' }}>The numbers above do not have to define the next generation. But only if we start the conversation sooner.</p>

          <SourcesBlock
            sourceIds={SOURCE_SETS.nigeriaFactsArticle}
            note="Figures reflect the most recent published estimates available as of June 2026. USD equivalents use the official mid market rate of approximately ₦1,361 per US dollar."
          />

          <div style={{ background: HERO_SURFACE, borderRadius: '16px', padding: '40px', textAlign: 'center', marginTop: '48px' }}>
            <h3 style={{ color: WHITE, fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Be part of the change</h3>
            <p style={{ color: SAGE, marginBottom: '24px', fontFamily: BODY }}>Join GenoMatch and help normalise genotype awareness in Nigeria and across the diaspora.</p>
            <Link href="/#waitlist" className="gm-btn" style={{ background: GOLD, color: FOREST_BG, padding: '14px 32px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '16px', fontFamily: BODY }}>Join the Waitlist</Link>
          </div>
        </div>
      </article>

      <footer style={{ background: FOREST, padding: '40px 24px', textAlign: 'center', borderTop: '1px solid rgba(191,155,74,0.15)' }}>
        <p style={{ color: GOLD, fontSize: '14px', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '8px' }}>Connecting Hearts. Aligning Genes.</p>
        <p style={{ color: 'rgba(143,175,149,0.7)', fontSize: '12px', fontFamily: BODY }}>© {new Date().getFullYear()} GenoMatch Ltd · RC No. 9236521 · Nigeria</p>
      </footer>
    </div>
  )
}
