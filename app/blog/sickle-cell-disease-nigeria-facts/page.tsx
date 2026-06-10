export const metadata = {
  title: 'Sickle Cell Disease in Nigeria: The Numbers That Should Shock You',
  description: 'Nigeria has the highest burden of sickle cell disease in the world. These are the facts every Nigerian needs to know — and what we can do about it.',
}

const FOREST = '#163522'
const FOREST_BG = '#0D2818'
const LINEN = '#F3EDE3'
const GOLD = '#BF9B4A'
const SAGE = '#8FAF95'
const WHITE = '#FFFFFF'
const TEXT_SOFT = '#5A7268'
const BODY = 'var(--font-geist-sans), system-ui, sans-serif'

export default function Article3() {
  return (
    <div style={{ background: LINEN, minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <header style={{ background: FOREST, padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(191,155,74,0.15)' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <span style={{ color: GOLD, fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 }}>GenoMatch</span>
        </a>
        <a href="/#waitlist" className="gm-btn" style={{ background: GOLD, color: FOREST_BG, padding: '10px 24px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '14px', fontFamily: BODY }}>Join Waitlist</a>
      </header>

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px' }}>
        <a href="/blog" className="gm-link" style={{ color: GOLD, fontSize: '14px', fontFamily: BODY, textDecoration: 'none', display: 'block', marginBottom: '40px' }}>← Back to Blog</a>
        <span style={{ background: LINEN, color: FOREST, fontSize: '11px', letterSpacing: '1px', padding: '4px 12px', borderRadius: '99px', fontFamily: BODY, fontWeight: 700, border: `1px solid rgba(22,53,34,0.15)` }}>Public Health</span>
        <h1 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 700, margin: '24px 0 16px', lineHeight: 1.2 }}>
          Sickle Cell Disease in Nigeria: The Numbers That Should Shock You
        </h1>
        <p style={{ color: TEXT_SOFT, fontSize: '14px', fontFamily: BODY, marginBottom: '48px' }}>June 2026 · 4 min read · GenoMatch</p>

        <div style={{ color: '#2A4A35', fontSize: '18px', lineHeight: 1.9, fontFamily: BODY }}>
          <p style={{ marginBottom: '24px' }}>Nigeria is one of the most vibrant, resilient, and culturally rich nations on earth. It is also home to the world's highest burden of sickle cell disease. These two facts coexist, and the second one does not get nearly enough attention.</p>
          <p style={{ marginBottom: '24px' }}>Here are the numbers. All of them are real. All of them matter.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '48px 0' }}>
            {[
              { stat: '150,000+', label: 'Children born with SCD in Nigeria every year' },
              { stat: '25M+', label: 'Nigerians carrying the AS sickle cell trait' },
              { stat: '1 in 4', label: 'Risk when two AS carriers have children' },
              { stat: '50%', label: 'Of global SCD burden is in Africa' },
              { stat: '80%', label: 'Of SCD deaths occur in Sub-Saharan Africa' },
              { stat: '50-60', label: 'Years, average life expectancy with SCD in Nigeria' },
            ].map((item, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: '16px', padding: '24px', borderLeft: `4px solid ${GOLD}` }}>
                <div style={{ color: GOLD, fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>{item.stat}</div>
                <div style={{ color: FOREST, fontSize: '13px', lineHeight: 1.5 }}>{item.label}</div>
              </div>
            ))}
          </div>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>What these numbers mean</h2>
          <p style={{ marginBottom: '24px' }}>Every single day in Nigeria, more than 400 children are born with sickle cell disease. That is more than one every two minutes. Each of these children will face a lifetime of pain crises, hospital admissions, organ damage, and social limitations that their peers will never experience.</p>
          <p style={{ marginBottom: '24px' }}>Their parents, in the vast majority of cases, did not know. Not because they did not care, but because nobody told them to check before they fell in love.</p>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>The cost of not knowing</h2>
          <p style={{ marginBottom: '24px' }}>The economic burden of sickle cell disease in Nigeria is staggering. A single pain crisis requiring hospitalisation can cost a family between ₦50,000 and ₦500,000, in a country where the minimum wage is ₦30,000 per month. For families with SS children, this is not an occasional expense. It is a constant financial emergency.</p>
          <p style={{ marginBottom: '24px' }}>Beyond money, the emotional weight of watching a child suffer from a preventable condition, and knowing that a single conversation before marriage could have changed everything, is a burden no family should have to carry.</p>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>What can be done</h2>
          <p style={{ marginBottom: '24px' }}>The medical community has known for decades that sickle cell disease is preventable through genotype-aware family planning. The challenge has never been the science. It has been the culture, the reluctance to have the conversation early, the stigma around SS, the lack of accessible tools to make genotype awareness part of everyday life.</p>
          <p style={{ marginBottom: '24px' }}>This is what GenoMatch is changing. By integrating genotype compatibility into the dating process itself, the earliest possible moment of a potential relationship, we are making the conversation normal, natural, and timely.</p>
          <p style={{ marginBottom: '48px' }}>The numbers above do not have to define the next generation. But only if we start the conversation sooner.</p>

          <div style={{ background: FOREST, borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
            <h3 style={{ color: WHITE, fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Be part of the change</h3>
            <p style={{ color: SAGE, marginBottom: '24px', fontFamily: BODY }}>Join GenoMatch and help normalise genotype awareness in Nigeria and across the diaspora.</p>
            <a href="/#waitlist" className="gm-btn" style={{ background: GOLD, color: FOREST_BG, padding: '14px 32px', borderRadius: '99px', fontWeight: 700, textDecoration: 'none', fontSize: '16px', fontFamily: BODY }}>Join the Waitlist</a>
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
