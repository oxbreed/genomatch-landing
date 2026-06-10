export const metadata = {
  title: 'Can AS Marry AS? The Truth About Sickle Cell Risk',
  description: 'It is one of the most searched questions in Nigeria. The answer is more nuanced than a simple yes or no — and understanding it could protect your future family.',
}

const FOREST = '#163522'
const FOREST_BG = '#0D2818'
const LINEN = '#F3EDE3'
const GOLD = '#BF9B4A'
const SAGE = '#8FAF95'
const WHITE = '#FFFFFF'
const TEXT_SOFT = '#5A7268'
const BODY = 'var(--font-geist-sans), system-ui, sans-serif'

export default function Article2() {
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
        <span style={{ background: LINEN, color: FOREST, fontSize: '11px', letterSpacing: '1px', padding: '4px 12px', borderRadius: '99px', fontFamily: BODY, fontWeight: 700, border: `1px solid rgba(22,53,34,0.15)` }}>Sickle Cell Awareness</span>
        <h1 style={{ color: FOREST, fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 700, margin: '24px 0 16px', lineHeight: 1.2 }}>
          Can AS Marry AS? The Truth About Sickle Cell Risk
        </h1>
        <p style={{ color: TEXT_SOFT, fontSize: '14px', fontFamily: BODY, marginBottom: '48px' }}>June 2026 · 6 min read · GenoMatch</p>

        <div style={{ color: '#2A4A35', fontSize: '18px', lineHeight: 1.9, fontFamily: BODY }}>
          <p style={{ marginBottom: '24px' }}>It is one of the most searched questions in Nigeria. Every day, thousands of people type it into Google, WhatsApp their friends about it, or ask their doctors quietly after a blood test result comes back AS.</p>
          <p style={{ marginBottom: '24px' }}>"Can AS marry AS?"</p>
          <p style={{ marginBottom: '24px' }}>The answer is not simple. And anyone who gives you a one-word response, yes or no, is not giving you the full picture.</p>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>What does AS mean?</h2>
          <p style={{ marginBottom: '24px' }}>AS means you are a sickle cell carrier. You have one normal haemoglobin gene (A) and one sickle cell gene (S). People with AS genotype are generally healthy. They do not have sickle cell disease. But they carry the gene and can pass it to their children.</p>
          <p style={{ marginBottom: '24px' }}>In Nigeria, approximately 25% of the population carries the AS genotype. That means 1 in 4 Nigerians is a carrier, making this conversation extraordinarily common and extraordinarily important.</p>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>What happens when AS meets AS?</h2>
          <p style={{ marginBottom: '24px' }}>When two AS carriers have children, each pregnancy has four possible outcomes, each with equal probability:</p>
          <div style={{ background: WHITE, borderRadius: '16px', padding: '32px', marginBottom: '32px', border: `1px solid rgba(191,155,74,0.2)` }}>
            {[
              { outcome: 'AA', prob: '25%', desc: 'Child is double healthy, does not carry the trait' },
              { outcome: 'AS', prob: '50%', desc: 'Child is a carrier like their parents, generally healthy' },
              { outcome: 'SS', prob: '25%', desc: 'Child has sickle cell disease' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px 0', borderBottom: i < 2 ? '1px solid rgba(22,53,34,0.08)' : 'none' }}>
                <div style={{ background: i === 2 ? '#FDECEA' : '#EDF3EE', color: i === 2 ? '#C0392B' : FOREST, fontWeight: 700, padding: '8px 16px', borderRadius: '8px', minWidth: '60px', textAlign: 'center', fontFamily: 'Georgia, serif' }}>{row.outcome}</div>
                <div>
                  <div style={{ color: FOREST, fontWeight: 700, marginBottom: '4px' }}>{row.prob} chance</div>
                  <div style={{ color: TEXT_SOFT, fontSize: '15px' }}>{row.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginBottom: '24px' }}>In plain terms: if two AS carriers have four children, on average one will have sickle cell disease. That is not a small risk. That is a family-shaping reality.</p>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>So can they marry?</h2>
          <p style={{ marginBottom: '24px' }}>Legally and medically, yes. No law in Nigeria prevents AS from marrying AS. And many AS couples do marry, go on to have healthy children, and live full lives.</p>
          <p style={{ marginBottom: '24px' }}>But the question is not just "can they?" The question is "should they proceed without a plan?"</p>
          <p style={{ marginBottom: '24px' }}>If two AS carriers choose to marry, they need to have a very honest conversation about:</p>
          <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
            <li style={{ marginBottom: '12px' }}>The real statistical risk to each pregnancy</li>
            <li style={{ marginBottom: '12px' }}>Whether they are emotionally and financially prepared to raise a child with sickle cell disease</li>
            <li style={{ marginBottom: '12px' }}>Whether they would consider genetic counselling or prenatal testing</li>
            <li style={{ marginBottom: '12px' }}>Their personal, religious, and ethical positions on these options</li>
          </ul>
          <p style={{ marginBottom: '24px' }}>This is not a conversation to have after the wedding. It is a conversation to have before you fall in love.</p>

          <h2 style={{ color: FOREST, fontSize: '1.6rem', fontWeight: 700, margin: '48px 0 16px', fontFamily: 'Georgia, serif' }}>Why GenoMatch exists</h2>
          <p style={{ marginBottom: '24px' }}>GenoMatch was built precisely for this moment, before the feelings run deep, before the families are introduced, before the conversation becomes painful. On GenoMatch, your genotype is part of your profile from day one. Compatibility is calculated before the first message is sent.</p>
          <p style={{ marginBottom: '48px' }}>This does not mean AS cannot match with AS on GenoMatch. It means both people know exactly where they stand before they invest their hearts. The choice remains theirs. The information is simply available when it matters most.</p>

          <div style={{ background: FOREST, borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
            <h3 style={{ color: WHITE, fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Know your compatibility from day one</h3>
            <p style={{ color: SAGE, marginBottom: '24px', fontFamily: BODY }}>Join the GenoMatch waitlist and be first to experience intentional, informed dating.</p>
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
