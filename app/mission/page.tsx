'use client'

const FOREST = '#163522'
const FOREST_BG = '#0D2818'
const LINEN = '#F5EFE6'
const GOLD = '#D4A843'
const SAGE = '#8FAF95'
const WHITE = '#FFFFFF'

export default function Mission() {
  return (
    <div style={{ background: LINEN, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* Nav */}
      <header style={{ background: FOREST_BG, padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(212,168,67,0.15)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <span style={{ color: GOLD, fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 }}>GenoMatch</span>
        </a>
        <a href="/#waitlist" style={{ background: GOLD, color: FOREST_BG, padding: '10px 24px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '14px' }}>Join Waitlist</a>
      </header>

      {/* Hero */}
      <section style={{ background: FOREST, padding: '100px 24px', textAlign: 'center' }}>
        <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: 'Arial, sans-serif', marginBottom: '16px' }}>OUR MISSION</p>
        <h1 style={{ color: WHITE, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, maxWidth: '800px', margin: '0 auto 24px', lineHeight: 1.2 }}>
          Love should be intentional. So should genetic health.
        </h1>
        <p style={{ color: SAGE, fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'Arial, sans-serif' }}>
          GenoMatch was built because too many families in West Africa are blindsided by sickle cell disease — a heartbreak that is entirely preventable with the right information at the right time.
        </p>
      </section>

      {/* The Problem */}
      <section style={{ background: LINEN, padding: '100px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: 'Arial, sans-serif', marginBottom: '16px' }}>THE PROBLEM</p>
        <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '32px', lineHeight: 1.3 }}>
          A preventable crisis affecting millions of African families
        </h2>
        <p style={{ color: '#4A6355', fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', fontFamily: 'Arial, sans-serif' }}>
          Nigeria has the highest burden of sickle cell disease in the world. Over 150,000 children are born with the condition every year — making it the most common severe genetic disorder on the African continent.
        </p>
        <p style={{ color: '#4A6355', fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', fontFamily: 'Arial, sans-serif' }}>
          Sickle cell disease (SCD) occurs when two carriers of the sickle cell trait — both with the AS genotype — have children together. Each pregnancy carries a 1 in 4 chance of producing a child with SS, the most severe form of the disease.
        </p>
        <p style={{ color: '#4A6355', fontSize: '18px', lineHeight: 1.8, fontFamily: 'Arial, sans-serif' }}>
          The tragedy is not just medical. It is emotional. Most couples only discover their genotype incompatibility after they have fallen in love, planned a future, or already started a family. By then, the conversation is devastating rather than empowering.
        </p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginTop: '60px' }}>
          {[
            { stat: '150,000+', label: 'Children born with sickle cell disease in Nigeria annually' },
            { stat: '1 in 4', label: 'Chance of an SS child when both parents carry the AS trait' },
            { stat: '25M+', label: 'People in Nigeria carry the sickle cell trait (AS genotype)' },
          ].map((item, i) => (
            <div key={i} style={{ background: WHITE, borderRadius: '16px', padding: '32px 24px', borderLeft: `4px solid ${GOLD}` }}>
              <div style={{ color: GOLD, fontSize: '2.5rem', fontWeight: 700, marginBottom: '12px' }}>{item.stat}</div>
              <div style={{ color: FOREST, fontSize: '14px', lineHeight: 1.6, fontFamily: 'Arial, sans-serif' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Solution */}
      <section style={{ background: WHITE, padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: 'Arial, sans-serif', marginBottom: '16px' }}>OUR SOLUTION</p>
          <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '32px', lineHeight: 1.3 }}>
            Genetic awareness, built into the foundation of every match
          </h2>
          <p style={{ color: '#4A6355', fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', fontFamily: 'Arial, sans-serif' }}>
            GenoMatch is the world's first dating application that integrates genotype compatibility into its core matching algorithm. Users declare their genotype — AA, AS, SS, or AC — during registration, and every match is scored not just on personality and interests, but on genetic compatibility.
          </p>
          <p style={{ color: '#4A6355', fontSize: '18px', lineHeight: 1.8, marginBottom: '24px', fontFamily: 'Arial, sans-serif' }}>
            This is not about restricting who people can love. It is about ensuring they have the information they need before emotions make the conversation harder. GenoMatch normalises genotype awareness as a natural, early part of any intentional relationship.
          </p>
          <p style={{ color: '#4A6355', fontSize: '18px', lineHeight: 1.8, fontFamily: 'Arial, sans-serif' }}>
            We believe that informed love is stronger love. And we believe that every family in West Africa deserves the chance to make that choice with their eyes open.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ background: LINEN, padding: '100px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: 'Arial, sans-serif', marginBottom: '16px', textAlign: 'center' }}>OUR VALUES</p>
          <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '60px', lineHeight: 1.3, textAlign: 'center' }}>
            What we stand for
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Informed Love', body: 'We believe every person deserves to enter a relationship with the knowledge that protects their future family. Awareness is not a barrier to love — it is an act of it.' },
              { title: 'Privacy First', body: 'Genotype is sensitive health data. We encrypt it, protect it, and never sell it. Your health information exists solely to serve your compatibility — nothing else.' },
              { title: 'Cultural Respect', body: 'We are built for West Africa and the African diaspora. We understand the cultural weight of relationships and marriage in our communities, and we honour it.' },
              { title: 'Scientific Integrity', body: 'Our compatibility scoring is grounded in haematology and genetic science. We do not oversimplify or sensationalise. We present the facts clearly and let people make their own choices.' },
              { title: 'Intentionality', body: 'GenoMatch is not a casual dating app. It is a platform for people who are serious about building a future. Every feature we build serves that purpose.' },
              { title: 'Community Impact', body: 'Reducing the incidence of sickle cell disease in Nigeria is not just a feature — it is our mission. Every match made on GenoMatch is a step toward a healthier generation.' },
            ].map((item, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: '16px', padding: '32px 24px', borderTop: `3px solid ${GOLD}` }}>
                <h3 style={{ color: FOREST, fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: '#4A6355', fontSize: '15px', lineHeight: 1.7, fontFamily: 'Arial, sans-serif' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section style={{ background: FOREST_BG, padding: '100px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ color: GOLD, fontSize: '11px', letterSpacing: '3px', fontFamily: 'Arial, sans-serif', marginBottom: '16px' }}>THE FOUNDER</p>
          <h2 style={{ color: WHITE, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '24px' }}>Olusegun Adedoyin</h2>
          <p style={{ color: SAGE, fontSize: '17px', lineHeight: 1.8, marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>
            Founder & CEO of GenoMatch Ltd (RC No. 9236521). Brand strategist and entrepreneur with a mission to use technology to solve deeply human problems across West Africa.
          </p>
          <p style={{ color: SAGE, fontSize: '17px', lineHeight: 1.8, fontFamily: 'Arial, sans-serif' }}>
            GenoMatch was built from a simple belief: that the most important conversation a couple can have deserves to happen at the beginning — not the end.
          </p>
          <div style={{ marginTop: '40px' }}>
            <a href="mailto:hello@genomatch.app" style={{ color: GOLD, fontSize: '16px', fontFamily: 'Arial, sans-serif', textDecoration: 'none', borderBottom: `1px solid ${GOLD}`, paddingBottom: '4px' }}>hello@genomatch.app</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: LINEN, padding: '100px 24px', textAlign: 'center' }}>
        <h2 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '16px' }}>Join the movement</h2>
        <p style={{ color: SAGE, fontSize: '17px', marginBottom: '40px', fontFamily: 'Arial, sans-serif' }}>Be among the first to experience GenoMatch when we launch.</p>
        <a href="/#waitlist" style={{ background: GOLD, color: FOREST_BG, padding: '16px 40px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>Join the Waitlist</a>
      </section>

      {/* Footer */}
      <footer style={{ background: FOREST_BG, padding: '40px 24px', textAlign: 'center', borderTop: '1px solid rgba(212,168,67,0.15)' }}>
        <p style={{ color: GOLD, fontSize: '14px', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '8px' }}>Connecting Hearts. Aligning Genes.</p>
        <p style={{ color: 'rgba(143,175,149,0.5)', fontSize: '12px', fontFamily: 'Arial, sans-serif' }}>© 2025 GenoMatch Ltd · RC No. 9236521 · Nigeria</p>
      </footer>

    </div>
  )
}
