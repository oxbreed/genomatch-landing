'use client'

import Image from 'next/image'
import Link from 'next/link'
import GenoCrest from '../components/GenoCrest'
import SickleCellMark from '../components/SickleCellMark'
import SickleCellRibbon from '../components/SickleCellRibbon'
import SourcesBlock from '../components/SourcesBlock'
import { SCD_STATS, SOURCE_SETS } from '@/lib/scd-facts'
import { FOREST, FOREST_BG, LINEN, GOLD, SAGE, WHITE, TEXT_SOFT, BODY, HERO_SURFACE } from '../theme'

export default function Mission() {
  return (
    <div id="main-content" style={{ background: LINEN, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* Nav */}
      <header style={{ background: FOREST, padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(191,155,74,0.15)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <span style={{ color: GOLD, fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 }}>GenoMatch</span>
        </Link>
        <Link href="/#waitlist" className="gm-btn" style={{ background: GOLD, color: FOREST_BG, padding: '10px 24px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '14px', fontFamily: BODY }}>Join Waitlist</Link>
      </header>

      {/* Hero */}
      <section style={{ background: HERO_SURFACE, padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <GenoCrest size={220} idPrefix="mission-hero-l" className="hidden sm:block" style={{ position: 'absolute', left: '-70px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <GenoCrest size={220} idPrefix="mission-hero-r" className="hidden sm:block" style={{ position: 'absolute', right: '-70px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }} />
        <SickleCellMark
          size={240}
          idPrefix="mission-hero-scd"
          variant="light"
          style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', opacity: 0.07, pointerEvents: 'none' }}
        />
        <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px' }}>OUR MISSION</p>
        <h1 style={{ color: WHITE, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, maxWidth: '800px', margin: '0 auto 24px', lineHeight: 1.2 }}>
          Love should be intentional. So should genetic health.
        </h1>
        <p style={{ color: SAGE, fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontFamily: BODY }}>
          GenoMatch was built because too many families in West Africa are blindsided by sickle cell disease — a heartbreak that can be significantly reduced when couples have the right information at the right time.
        </p>
      </section>

      {/* Why We Exist */}
      <section style={{ background: LINEN, padding: '100px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px' }}>WHY WE EXIST</p>
        <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '32px', lineHeight: 1.3 }}>
          A challenge we can change, together
        </h2>
        <p style={{ color: TEXT_SOFT, fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', fontFamily: BODY }}>
          Sub-Saharan Africa carries the world&apos;s heaviest burden of sickle cell disease, and Nigeria sits at its very centre, home to the largest affected population anywhere on earth. Behind those numbers are real families: the financial strain, the heartbreak of finding out too late, the children who could have been spared.
        </p>
        <p style={{ color: TEXT_SOFT, fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', fontFamily: BODY }}>
          But this is one of the few major health challenges that knowledge alone can change. When people understand their genotype early, before love makes the choice harder, they can build families with confidence and care. That is the future GenoMatch is working toward, one informed connection at a time.
        </p>
        <p style={{ color: TEXT_SOFT, fontSize: '18px', lineHeight: 1.8, fontFamily: BODY }}>
          We are starting where the need is greatest and building toward every community that shares this reality, across West Africa, the diaspora, and beyond. GenoMatch is for everyone who believes that knowing more should mean fearing less.
        </p>
      </section>

      {/* The Problem */}
      <section style={{ background: LINEN, padding: '100px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px' }}>THE PROBLEM</p>
        <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '32px', lineHeight: 1.3 }}>
          A crisis we can reduce together
        </h2>
        <p style={{ color: TEXT_SOFT, fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', fontFamily: BODY }}>
          Nigeria has the highest burden of sickle cell disease in the world. Over {SCD_STATS.nigeriaBirthsPerYear} children are born with the condition every year, about 2% of all Nigerian births, making it the most common severe genetic disorder on the African continent.
        </p>
        <p style={{ color: TEXT_SOFT, fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', fontFamily: BODY }}>
          Sickle cell disease (SCD) most commonly occurs when two sickle cell carriers — both with the AS genotype — have children together. Each pregnancy carries a 1 in 4 chance of producing a child with SS, the most severe form of the disease. Other genotype combinations can also produce affected children.
        </p>
        <p style={{ color: TEXT_SOFT, fontSize: '18px', lineHeight: 1.8, fontFamily: BODY }}>
          The tragedy is not just medical. It is emotional. Most couples only discover their genotype incompatibility after they have fallen in love, planned a future, or already started a family. By then, the conversation is devastating rather than empowering.
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px', marginBottom: '8px' }}>
          <SickleCellRibbon size={36} style={{ opacity: 0.92 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginTop: '24px' }}>
          {[
            { stat: `${SCD_STATS.nigeriaBirthsPerYear}+`, label: 'Children born with sickle cell disease in Nigeria annually' },
            { stat: SCD_STATS.asCoupleSsRisk, label: 'Chance of an SS child when both parents carry the AS trait' },
            { stat: `~${SCD_STATS.traitCarriersNigeria}`, label: 'Nigerians estimated to carry the sickle cell trait (~25% of the population)' },
          ].map((item, i) => (
            <div key={i} className="gm-card" style={{ background: WHITE, borderRadius: '16px', padding: '32px 24px', borderLeft: `4px solid ${GOLD}` }}>
              <div style={{ color: GOLD, fontSize: '2.5rem', fontWeight: 700, marginBottom: '12px' }}>{item.stat}</div>
              <div style={{ color: FOREST, fontSize: '14px', lineHeight: 1.6, fontFamily: BODY }}>{item.label}</div>
            </div>
          ))}
        </div>
        <SourcesBlock
          sourceIds={SOURCE_SETS.missionStats}
          note="Statistics drawn from WHO and Nigeria Federal Ministry of Health publications."
        />
      </section>

      {/* Our Solution */}
      <section style={{ background: WHITE, padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px' }}>OUR SOLUTION</p>
          <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '32px', lineHeight: 1.3 }}>
            Genetic awareness, built into the foundation of every match
          </h2>
          <p style={{ color: TEXT_SOFT, fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', fontFamily: BODY }}>
            GenoMatch is a dating application that integrates sickle cell genotype compatibility into its core matching algorithm. Users declare their genotype, AA, AS, SS, or AC, during registration, and every match is scored not just on personality and interests, but on genetic compatibility.
          </p>
          <p style={{ color: TEXT_SOFT, fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', fontFamily: BODY }}>
            This is not about restricting who people can love. It is about ensuring they have the information they need before emotions make the conversation harder. GenoMatch normalises genotype awareness as a natural, early part of any intentional relationship.
          </p>
          <p style={{ color: TEXT_SOFT, fontSize: '18px', lineHeight: 1.8, fontFamily: BODY }}>
            We believe that informed love is stronger love. And we believe that every family in West Africa deserves the chance to make that choice with their eyes open.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ background: LINEN, padding: '100px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '16px', textAlign: 'center' }}>OUR VALUES</p>
          <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '60px', lineHeight: 1.3, textAlign: 'center' }}>
            What we stand for
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Informed Love', body: 'We believe every person deserves to enter a relationship with the knowledge that protects their future family. Awareness is not a barrier to love. It is an act of it.' },
              { title: 'Privacy First', body: 'Genotype is sensitive health data. We encrypt it, protect it, and never sell it. Your health information exists solely to serve your compatibility and nothing else.' },
              { title: 'Cultural Respect', body: 'We are built for West Africa and the African diaspora. We understand the cultural weight of relationships and marriage in our communities, and we honour it.' },
              { title: 'Scientific Integrity', body: 'Our compatibility scoring is grounded in haematology and genetic science. We do not oversimplify or sensationalise. We present the facts clearly and let people make their own choices.' },
              { title: 'Intentionality', body: 'GenoMatch is not a casual dating app. It is a platform for people who are serious about building a future. Every feature we build serves that purpose.' },
              { title: 'Community Impact', body: 'Reducing the incidence of sickle cell disease, starting in Nigeria and reaching communities across West Africa and the diaspora, is not just a feature. It is our mission. Every match made on GenoMatch is a step toward a healthier generation.' },
            ].map((item, i) => (
              <div key={i} className="gm-card" style={{ background: WHITE, borderRadius: '16px', padding: '32px 24px', borderTop: `3px solid ${GOLD}` }}>
                <h3 style={{ color: FOREST, fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: TEXT_SOFT, fontSize: '15px', lineHeight: 1.7, fontFamily: BODY }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section style={{ background: HERO_SURFACE, padding: '100px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: BODY, marginBottom: '32px' }}>THE FOUNDER</p>
          <Image
            src="/olusegun-adedoyin-founder.jpg"
            alt="Olusegun Adedoyin, Founder of GenoMatch"
            width={480}
            height={600}
            sizes="240px"
            style={{
              width: '100%',
              maxWidth: '240px',
              height: '300px',
              objectFit: 'cover',
              objectPosition: 'center top',
              borderRadius: '20px',
              border: `1px solid ${GOLD}`,
              boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
              display: 'block',
              margin: '0 auto 24px',
            }}
          />
          <h2 style={{ color: WHITE, fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, margin: '0 0 8px' }}>Olusegun Adedoyin</h2>
          <p style={{ color: SAGE, fontSize: '15px', fontFamily: BODY, margin: '0 0 40px' }}>Founder, GenoMatch Ltd</p>
          <div style={{ textAlign: 'left' }}>
            <p style={{ color: SAGE, fontSize: '17px', lineHeight: 1.8, marginBottom: '16px', fontFamily: BODY }}>
              GenoMatch is personal. Olusegun has spent years close to community health work across Lagos, watching how often the right information arrives too late to change anything — a diagnosis after a decision&apos;s already been made, a conversation that should have happened months earlier. That pattern is what GenoMatch exists to interrupt: bringing the genotype conversation to the very start of a relationship, where it can quietly inform the choices couples make, while there&apos;s still time for it to matter.
            </p>
            <p style={{ color: SAGE, fontSize: '17px', lineHeight: 1.8, marginBottom: '16px', fontFamily: BODY }}>
              Olusegun builds technology to solve deeply human problems across sub-Saharan Africa and beyond. He also runs a Brand &amp; Business Strategy Studio, helping founders and businesses through sharp positioning, strategic clarity, and communication that converts. His background spans education, communication, and international relations, and his interest in community health goes back to his school years, when he led the Health and Life Planning Club, an Action Health Incorporated initiative running across local government areas in Lagos.
            </p>
            <p style={{ color: SAGE, fontSize: '17px', lineHeight: 1.8, fontFamily: BODY }}>
              GenoMatch brings these threads together — care, technology, and a belief that better information leads to healthier families.
            </p>
          </div>
          <div style={{ marginTop: '40px' }}>
            <a href="mailto:hello@genomatch.app" className="gm-link" style={{ color: GOLD, fontSize: '16px', fontFamily: BODY, textDecoration: 'none', borderBottom: `1px solid ${GOLD}`, paddingBottom: '4px' }}>hello@genomatch.app</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: LINEN, padding: '100px 24px', textAlign: 'center' }}>
        <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '16px' }}>Join the movement</h2>
        <p style={{ color: TEXT_SOFT, fontSize: '17px', marginBottom: '40px', fontFamily: BODY }}>Be among the first to experience GenoMatch when we launch.</p>
        <Link href="/#waitlist" className="gm-btn" style={{ background: GOLD, color: FOREST_BG, padding: '16px 40px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '16px', fontFamily: BODY }}>Join the Waitlist</Link>
      </section>

      {/* Footer */}
      <footer style={{ background: FOREST, padding: '40px 24px', textAlign: 'center', borderTop: '1px solid rgba(191,155,74,0.15)' }}>
        <p style={{ color: GOLD, fontSize: '14px', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '8px' }}>Connecting Hearts. Aligning Genes.</p>
        <p style={{ color: 'rgba(143,175,149,0.7)', fontSize: '12px', fontFamily: BODY }}>© {new Date().getFullYear()} GenoMatch Ltd · RC No. 9236521 · Nigeria</p>
      </footer>

    </div>
  )
}
