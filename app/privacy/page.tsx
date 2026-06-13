import Link from 'next/link';

const BODY = 'var(--font-geist-sans), system-ui, sans-serif';

export default function PrivacyPolicy() {
  return (
    <div style={{ background: '#F3EDE3', minHeight: '100vh' }}>
      <header style={{ background: '#163522', padding: '20px 40px', borderBottom: '1px solid rgba(191,155,74,0.15)' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ color: '#BF9B4A', fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 }}>GenoMatch</span>
        </Link>
      </header>
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '56px 24px', fontFamily: BODY, lineHeight: 1.7, color: '#243830' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: '#163522', fontFamily: 'Georgia, serif' }}>Privacy Policy</h1>
      <p style={{ color: '#5A7268', marginBottom: 40 }}>Last updated: June 2026</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>1. Introduction</h2>
      <p>GenoMatch ("we", "our", or "us") is operated by GenoMatch Ltd (RC No. 9236521). We are committed to protecting your privacy and handling your personal data with transparency, care, and respect. This Privacy Policy explains what data we collect, why we collect it, how we use it, and your rights. By using the GenoMatch app or website, you agree to this policy. Contact us at hello@genomatch.app.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>2. Who We Are</h2>
      <p>GenoMatch Ltd is a company registered in Nigeria (RC No. 9236521). Our app helps people find compatible partners based on genotype compatibility to support informed decisions about relationships and family planning. GenoMatch is open to anyone globally who cares about genotype compatibility.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>3. What Data We Collect</h2>
      <p><strong>Information you provide directly:</strong> full name and display name, email address, date of birth, gender, city and country, genotype (AA, AS, SS, AC), profile photos, bio and personal description, relationship goals, and interests.</p>
      <p><strong>Information we collect automatically:</strong> app usage data, device type and operating system, push notification tokens, and error and crash reports.</p>
      <p><strong>Sensitive data:</strong> we collect genotype information, which is sensitive health data. We collect this solely for genotype compatibility matching. You provide this voluntarily and can update or delete it at any time.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>4. Why We Collect Your Data</h2>
      <p>We use your data to provide the service, verify identity, improve the app, keep you safe, communicate with you, and comply with the law.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>5. Legal Basis for Processing</h2>
      <p>We process your data on the basis of contract, consent, legitimate interests, and legal obligation.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>6. How We Store Your Data</h2>
      <p>Your data is stored securely using Supabase (database with row level security), Cloudinary (photo storage), and encrypted storage on your device. We implement industry standard security measures.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>7. Who We Share Your Data With</h2>
      <p>We do not sell your personal data. Your display name, photos, genotype, bio, interests, city, and relationship goal are visible to other verified users. Your email address is never visible to other users. We share data only with service providers (Supabase, Cloudinary, Expo/Apple) and legal authorities when required by law.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>8. Your Rights</h2>
      <p>You have the right to access, correct, delete, and port your data, withdraw consent, and object to certain processing. Email hello@genomatch.app to exercise any right. We respond within 30 days.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>9. Account Deletion</h2>
      <p>You can request deletion by tapping "Delete Account" in the app Profile section or emailing hello@genomatch.app with subject "Account Deletion Request". We delete your data within 30 days.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>10. Data Retention</h2>
      <p>We retain your data while your account is active. After deletion we remove personal data within 30 days. Anonymised aggregated data may be retained indefinitely.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>11. Children's Privacy</h2>
      <p>GenoMatch is not intended for anyone under 18. We do not knowingly collect data from minors. Contact hello@genomatch.app if you believe a minor has an account.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>12. Push Notifications</h2>
      <p>We send push notifications for new matches and messages. You can turn these off in your device settings at any time.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>13. Cookies</h2>
      <p>The GenoMatch mobile app does not use cookies. Our website may use essential cookies for functionality only. We do not use tracking or advertising cookies.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>14. International Data Transfers</h2>
      <p>Your data may be processed in countries outside your country of residence where our service providers operate. We ensure appropriate safeguards are in place for all international transfers.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>15. Changes to This Policy</h2>
      <p>We may update this policy from time to time. We will notify you of significant changes through the app or by email.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>16. Contact Us</h2>
      <p>GenoMatch Ltd<br />Email: hello@genomatch.app<br />Website: genomatch.app<br />RC No. 9236521</p>
      <p>Regardless of where you are in the world, you have the right to lodge a complaint with your local data protection authority if you believe we have not handled your data correctly. For UK and EU users this includes the ICO and relevant EU supervisory authorities.</p>

      <h2 style={{ color: '#163522', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>Data Protection Contact</h2>
      <p>GenoMatch Ltd is the data controller responsible for your personal data. For questions, requests, or concerns about how your data is handled, or to exercise your data protection rights, contact our Data Protection Officer at <a href="mailto:privacy@genomatch.app">privacy@genomatch.app</a>.</p>

      <p style={{ marginTop: 48, color: '#5A7268', fontSize: 14 }}>© {new Date().getFullYear()} GenoMatch Ltd. All rights reserved.</p>
      </main>
    </div>
  );
}
