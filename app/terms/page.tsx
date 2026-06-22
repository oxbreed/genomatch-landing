import Link from 'next/link';

const BODY = 'var(--font-geist-sans), system-ui, sans-serif';

export default function TermsOfService() {
  return (
    <div style={{ background: '#F3EDE3', minHeight: '100vh' }}>
      <header style={{ background: '#163522', padding: '20px 40px', borderBottom: '1px solid rgba(191,155,74,0.15)' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ color: '#BF9B4A', fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 }}>GenoMatch</span>
        </Link>
      </header>
      <main id="main-content" style={{ maxWidth: 800, margin: '0 auto', padding: '56px 24px', fontFamily: BODY, lineHeight: 1.7, color: '#243830' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: '#163522', fontFamily: 'Georgia, serif' }}>Terms of Service</h1>
      <p style={{ color: '#5A7268', marginBottom: 40 }}>Last updated: June 2026</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>1. Introduction</h2>
      <p>
        Welcome to GenoMatch. These Terms of Service ("Terms") govern your access to and use of the GenoMatch mobile
        application and website (collectively, the "Service") operated by GenoMatch Ltd (RC No. 9236521) ("GenoMatch",
        "we", "our", or "us"). GenoMatch is a genotype aware dating platform designed to help adults make informed
        decisions about compatibility, relationships, and family planning. Please read these Terms carefully before
        using the Service.
      </p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>2. Acceptance of Terms</h2>
      <p>
        By creating an account, accessing, or using GenoMatch, you agree to be bound by these Terms and our Privacy
        Policy. If you do not agree, you must not use the Service. We may update these Terms from time to time; your
        continued use after changes are posted constitutes acceptance of the revised Terms.
      </p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>3. Eligibility</h2>
      <p>
        You must be at least 18 years old to use GenoMatch. By using the Service, you represent and warrant that you
        are 18 or older, have the legal capacity to enter into these Terms, and are not prohibited from using the
        Service under applicable law. We do not knowingly permit minors to create accounts or use the Service.
      </p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>4. Account Registration</h2>
      <p>
        To use certain features, you must register for an account and provide accurate, current, and complete
        information. You are responsible for maintaining the confidentiality of your login credentials and for all
        activity that occurs under your account. Notify us immediately at hello@genomatch.app if you suspect
        unauthorised access. We reserve the right to suspend or terminate accounts that violate these Terms or that
        we reasonably believe pose a risk to other users or the Service.
      </p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>5. Genotype Information</h2>
      <p>
        GenoMatch allows you to declare your genotype (AA, AS, SS, AC) for compatibility matching. Genotype
        information you provide is declared by you and is not verified by GenoMatch as a medical or laboratory
        result unless we expressly state otherwise in the app. GenoMatch does not provide medical advice, genetic
        counselling, or clinical diagnosis. Compatibility scores and match suggestions are informational tools only
        and should not replace professional healthcare or genetic advice. You are responsible for the accuracy of
        genotype information you submit.
      </p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>6. User Conduct</h2>
      <p>You agree not to:</p>
      <p>
        harass, threaten, abuse, or harm other users; create fake profiles or impersonate any person; provide
        misleading, false, or deceptive information; upload content that is illegal, obscene, hateful, or infringes
        others' rights; solicit money, spam, or promote unrelated commercial activity; scrape, reverse engineer, or
        interfere with the Service; or use GenoMatch for any unlawful purpose. We may investigate reports, remove
        content, block users, and cooperate with law enforcement where appropriate.
      </p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>7. Matching and Communication</h2>
      <p>
        GenoMatch may suggest potential matches based on profile information, preferences, and genotype compatibility.
        We do not guarantee that you will find a match or that any match will result in a relationship. Messaging
        and other communication features are available between mutual matches subject to our community standards.
        You are solely responsible for your interactions with other users, both on and off the platform.
      </p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>8. Privacy</h2>
      <p>
        Your use of GenoMatch is also governed by our Privacy Policy, which explains how we collect, use, store, and
        share your personal data. By using the Service, you consent to our data practices as described in the
        Privacy Policy. You may review our Privacy Policy at genomatch.app/privacy.
      </p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>9. Intellectual Property</h2>
      <p>
        The GenoMatch name, logo, app design, software, and all related content and materials are owned by GenoMatch
        Ltd or its licensors and are protected by intellectual property laws. You may not copy, modify, distribute,
        sell, or create derivative works from any part of the Service without our prior written consent. You retain
        ownership of content you submit, but you grant us a nonexclusive, worldwide, royalty free licence to use,
        display, and store that content solely to operate and improve the Service.
      </p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>10. Disclaimers</h2>
      <p>
        The Service is provided on an "as is" and "as available" basis. To the fullest extent permitted by law,
        GenoMatch disclaims all warranties, express or implied, including fitness for a particular purpose and
        noninfringement. We do not warrant that the Service will be uninterrupted, free of errors, or secure, or that
        matches or compatibility information will meet your expectations. Any reliance on genotype or compatibility
        information is at your own risk.
      </p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>11. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, GenoMatch Ltd and its officers, directors, employees, and
        agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any
        loss of profits, data, or goodwill, arising from your use of the Service or interactions with other users. Our
        total liability for any claim arising from these Terms or the Service shall not exceed the amount you paid us
        in the twelve months preceding the claim, or one hundred US dollars (USD $100), whichever is greater, where
        such limitation is permitted by law.
      </p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>12. Termination</h2>
      <p>
        You may stop using GenoMatch at any time and may request account deletion through the app or by emailing
        hello@genomatch.app. We may suspend or terminate your access immediately if you breach these Terms, if we
        are required to do so by law, or if we discontinue the Service. Upon termination, your right to use the
        Service ends, but provisions that by their nature should survive (including disclaimers, limitation of
        liability, and intellectual property) will remain in effect.
      </p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>13. Changes to Terms</h2>
      <p>
        We may revise these Terms from time to time. When we make material changes, we will notify you through the
        app, by email, or by posting an updated version on genomatch.app/terms. The "Last updated" date at the top of
        this page indicates when the Terms were last revised. Your continued use after the effective date of changes
        constitutes acceptance.
      </p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>14. Contact</h2>
      <p>
        If you have questions about these Terms, please contact us:
      </p>
      <p>
        GenoMatch Ltd<br />
        Email: hello@genomatch.app<br />
        Website: genomatch.app<br />
        RC No. 9236521
      </p>

      <p style={{ marginTop: 48, color: '#5A7268', fontSize: 14 }}>© {new Date().getFullYear()} GenoMatch Ltd. All rights reserved.</p>
      </main>
    </div>
  );
}
