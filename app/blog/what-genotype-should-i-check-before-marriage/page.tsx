import Link from 'next/link'
import SourcesBlock from '../../components/SourcesBlock'
import { SCD_STATS, SOURCE_SETS } from '@/lib/scd-facts'

export const metadata = {
  title: 'What Genotype Should I Check Before Marriage in Nigeria?',
  description: 'Before you say yes, there is one conversation that could change everything. Here is what every Nigerian needs to know about genotype compatibility before marriage.',
}

import { FOREST, FOREST_BG, LINEN, GOLD, SAGE, WHITE, TEXT_SOFT, BODY, HERO_SURFACE } from '../../theme'

export default function Article1() {
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
        <span style={{ background: LINEN, color: FOREST, fontSize: '11px', letterSpacing: '1px', padding: '4px 12px', borderRadius: '99px', fontFamily: BODY, fontWeight: 700, border: `1px solid rgba(22,53,34,0.15)` }}>Genotype Education</span>
        <h1 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 700, margin: '24px 0 16px', lineHeight: 1.2 }}>
          What Genotype Should I Check Before Marriage in Nigeria?
        </h1>
        <p style={{ color: TEXT_SOFT, fontSize: '14px', fontFamily: BODY, marginBottom: '48px' }}>June 2026 · 5 min read · GenoMatch</p>

        <div style={{ color: '#2A4A35', fontSize: '18px', lineHeight: 1.9, fontFamily: BODY }}>
          <p style={{ marginBottom: '24px' }}>There is a conversation that millions of Nigerian couples are having too late. It happens after the introduction, after the proposal, sometimes after the wedding. And when it goes wrong, it changes everything.</p>
          <p style={{ marginBottom: '24px' }}>The conversation is about genotype.</p>
          <p style={{ marginBottom: '24px' }}>In Nigeria, genotype awareness is not just a medical topic. It is a family matter, a cultural responsibility, and increasingly, a dealbreaker. Yet most people still do not know exactly what to check, why it matters, or when to have the conversation.</p>
          <p style={{ marginBottom: '24px' }}>Here is everything you need to know.</p>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>What is a genotype?</h2>
          <p style={{ marginBottom: '24px' }}>Your genotype is the genetic code that determines whether you carry the sickle cell trait. It is inherited from your parents, one letter from your mother, one from your father.</p>
          <p style={{ marginBottom: '24px' }}>The four main genotypes in Nigeria are:</p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
            <li style={{ marginBottom: '12px' }}><strong style={{ color: FOREST }}>AA</strong>, double healthy. You do not carry the sickle cell trait.</li>
            <li style={{ marginBottom: '12px' }}><strong style={{ color: FOREST }}>AS</strong>, carrier. You carry one sickle cell gene but are generally healthy yourself.</li>
            <li style={{ marginBottom: '12px' }}><strong style={{ color: FOREST }}>SS</strong>, sickle cell disease. You have two sickle cell genes and will experience the condition.</li>
            <li style={{ marginBottom: '12px' }}><strong style={{ color: FOREST }}>AC</strong>, AC carrier. You carry one haemoglobin C gene, a related but different variant.</li>
          </ul>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>Why does it matter before marriage?</h2>
          <p style={{ marginBottom: '24px' }}>When two AS carriers have children together, each pregnancy carries a 25% chance of producing a child with SS, sickle cell disease. That is {SCD_STATS.asCoupleSsRisk}. In a family of four children, statistically one will be affected on average.</p>
          <p style={{ marginBottom: '24px' }}>Sickle cell disease is a lifelong, painful, and life-limiting condition. Children with SS face recurrent pain crises, organ damage, frequent hospitalisations, and significantly reduced life expectancy without intensive medical care — under 20 years in Nigeria, compared with {SCD_STATS.lifeExpectancyHighIncomeYears} years in high-income countries with comprehensive specialist care.</p>
          <p style={{ marginBottom: '24px' }}>This is not about blame. AS carriers are healthy, successful, wonderful people. But when two AS carriers build a family together without knowing their compatibility, they are making a life-altering decision without all the information.</p>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>Which genotype combinations are compatible?</h2>
          <div style={{ background: WHITE, borderRadius: '16px', padding: '32px', marginBottom: '32px', border: `1px solid rgba(191,155,74,0.2)` }}>
            {[
              { pairing: 'AA × AA', result: 'All children AA', risk: 'No risk', safe: true },
              { pairing: 'AA × AS', result: 'Children AA or AS', risk: 'No sickle cell risk', safe: true },
              { pairing: 'AA × SS', result: 'All children AS', risk: 'Low risk', safe: true },
              { pairing: 'AS × AS', result: 'AA, AS, or SS', risk: '25% chance of SS child', safe: false },
              { pairing: 'AS × SS', result: 'AS or SS', risk: '50% chance of SS child', safe: false },
              { pairing: 'SS × SS', result: 'All children SS', risk: 'All children affected', safe: false },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < 5 ? '1px solid rgba(22,53,34,0.08)' : 'none', flexWrap: 'wrap', gap: '8px' }}>
                <strong style={{ color: FOREST, fontFamily: 'Georgia, serif', minWidth: '100px' }}>{row.pairing}</strong>
                <span style={{ color: TEXT_SOFT, fontSize: '14px', flex: 1, textAlign: 'center' }}>{row.result}</span>
                <span style={{ color: row.safe ? '#2A6A35' : '#C0392B', fontSize: '13px', fontWeight: 700, background: row.safe ? '#EDF3EE' : '#FDECEA', padding: '4px 12px', borderRadius: '99px' }}>{row.risk}</span>
              </div>
            ))}
          </div>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>When should you check?</h2>
          <p style={{ marginBottom: '24px' }}>The honest answer: before you fall in love. Not after the introduction. Not after the proposal. Before emotions make the conversation harder than it needs to be.</p>
          <p style={{ marginBottom: '24px' }}>This is exactly why GenoMatch exists. We built a dating platform where genotype compatibility is part of the matching process from day one, so the conversation happens naturally, early, and without drama.</p>
          <p style={{ marginBottom: '24px' }}>If you are already in a relationship and have not checked, do it now. A simple blood test at any hospital or laboratory in Nigeria will give you your result within days.</p>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>The bottom line</h2>
          <p style={{ marginBottom: '24px' }}>Checking your genotype before marriage is not unromantic. It is one of the most loving things you can do for your future children. It is the conversation that changes everything, when you have it at the right time.</p>
          <p style={{ marginBottom: '48px' }}>GenoMatch was built to make that conversation normal, natural, and early. Join our waitlist and be among the first to experience a new way to find love, one that protects your family from day one.</p>

          <SourcesBlock sourceIds={SOURCE_SETS.genotypeArticle} />

          <div style={{ background: HERO_SURFACE, borderRadius: '16px', padding: '40px', textAlign: 'center', marginTop: '48px' }}>
            <h3 style={{ color: WHITE, fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Ready to date with your future in mind?</h3>
            <p style={{ color: SAGE, marginBottom: '24px', fontFamily: BODY }}>Join intentional singles on the GenoMatch waitlist.</p>
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
