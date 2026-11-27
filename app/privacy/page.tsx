import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';

const BODY = 'var(--font-geist-sans), system-ui, sans-serif';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How GenoMatch Ltd collects, uses, stores, and protects your personal data — including sensitive genotype health information — under Nigeria\u2019s NDPA 2023.',
  path: '/privacy',
});

export default function PrivacyPolicy() {
  return (
    <div style={{ background: '#FAF8F5', minHeight: '100vh' }}>
      <header style={{ background: '#FFFFFF', padding: '20px 40px', borderBottom: '1px solid rgba(200,16,46,0.1)' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span className="gm-wordmark-text" style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 }}>GenoMatch</span>
        </Link>
      </header>
      <main id="main-content" style={{ maxWidth: 800, margin: '0 auto', padding: '56px 24px', fontFamily: BODY, lineHeight: 1.7, color: '#0B0C0E' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: '#C8102E', fontFamily: 'Georgia, serif' }}>Privacy Policy</h1>
      <p style={{ color: '#6E737C', marginBottom: 40 }}>Last updated: November 2026</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>1. Introduction</h2>
      <p>GenoMatch ("we", "our", or "us") is operated by GenoMatch Ltd (RC No. 9236521). We are committed to protecting your privacy and handling your personal data with transparency, care, and respect. This Privacy Policy explains what data we collect, why we collect it, how we use it, and your rights. By using the GenoMatch app or website, you agree to this policy. Contact us at hello@genomatch.app.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>2. Who We Are</h2>
      <p>GenoMatch Ltd is a company registered in Nigeria (RC No. 9236521). GenoMatch is a genotype-aware dating app for adults 18 and over. Members share a self-reported genotype so they can find compatible matches. GenoMatch does not provide medical advice, diagnosis, or laboratory testing; talk to a qualified health professional if you have questions about your genotype. GenoMatch is open to adults globally who care about genotype compatibility.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>3. What Data We Collect</h2>
      <p><strong>Information you provide directly:</strong> name, email address, date of birth, gender, interests, relationship goals, messages with matches, city and country, and the genotype you enter (AA, AS, SS, AC, or SC). We also collect profile photos and an identity-review selfie (used to check that you are a real person, and not shown as your public profile photo).</p>
      <p><strong>Approximate location:</strong> the city you choose, and if you allow it, a coarse device location used to set that city and nearby matching. We store rounded coordinates, not a precise live trail. The camera is used only when you take a live selfie for photo or identity review.</p>
      <p><strong>Information we collect automatically:</strong> app usage data, device type and operating system, a push-notification token if you grant notification permission, and error and crash reports.</p>
      <p><strong>Sensitive data:</strong> genotype is sensitive, health-adjacent information. We treat it as sensitive, show it on your profile so you can find compatible matches, and never sell it. You provide it voluntarily and can update or delete it at any time. GenoMatch does not provide medical advice, diagnosis, or laboratory testing.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>4. Why We Collect Your Data</h2>
      <p>We use your data to show your profile to other adults, including the genotype you enter so you can find compatible matches, to let mutual matches message each other, to review identity selfies and photos, to send optional match and message notifications if you allow them, and to keep the service working. We do not use this data to track you across other companies&apos; apps or websites, and we do not use it for third-party advertising. GenoMatch does not provide medical advice; talk to a qualified health professional.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>5. Legal Basis for Processing</h2>
      <p>We process your data on the basis of contract, consent, legitimate interests, and legal obligation.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>6. How We Store Your Data</h2>
      <p>Your data is stored securely using Supabase (database with row level security), Cloudinary (photo storage), and encrypted storage on your device. We implement industry standard security measures.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>7. Who We Share Your Data With</h2>
      <p>We do not sell your personal data. Your display name, photos, genotype, bio, interests, city, and relationship goal are visible to other members. Your email address and identity-review selfie are never shown as your public profile. We share data only with service providers essential to operating the app: Supabase (secure storage and authentication), Cloudinary (photo hosting, including profile photos and identity-review selfies), and Expo or Apple or Google (delivering push notifications if you opted in), and with legal authorities when required by law.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>8. Your Rights</h2>
      <p>You have the right to access, correct, delete, and port your data, withdraw consent, and object to certain processing. Email hello@genomatch.app to exercise any right. We respond within 30 days.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>9. Account Deletion</h2>
      <p>You can delete your account at any time from Profile → Delete Account in the app, after confirming with your password. Deletion is immediate: we remove your login, profile, messages, likes, photos, and identity-review selfie. If you cannot open the app, email hello@genomatch.app or privacy@genomatch.app and ask us to delete the account. Limited records may be retained where required for legal or security purposes, such as abuse reports needed to keep a banned member from returning.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>10. Data Retention</h2>
      <p>Data for active accounts is retained while your account remains open. When you delete your account, we delete or anonymise your personal data in line with applicable Nigerian law, subject to limited retention where required for legal or security purposes. Anonymised aggregated data that cannot identify you may be retained.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>11. Children's Privacy</h2>
      <p>GenoMatch is not intended for anyone under 18. We do not knowingly collect data from minors. Contact hello@genomatch.app if you believe a minor has an account.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>12. Push Notifications</h2>
      <p>If you grant notification permission, we store a push-notification token so we can send you optional alerts for new matches and messages. You can turn these off in your device settings at any time. Denying permission does not stop you from using the app.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>13. Cookies</h2>
      <p>The GenoMatch mobile app does not use cookies. Our website may use essential cookies for functionality only. We do not use tracking or advertising cookies.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>14. International Data Transfers</h2>
      <p>Your data may be processed in countries outside your country of residence where our service providers operate. We ensure appropriate safeguards are in place for all international transfers.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>15. Changes to This Policy</h2>
      <p>We may update this policy from time to time. We will notify you of significant changes through the app or by email.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>16. Contact Us</h2>
      <p>GenoMatch Ltd<br />Email: hello@genomatch.app<br />Website: genomatch.app<br />RC No. 9236521</p>
      <p>Regardless of where you are in the world, you have the right to lodge a complaint with your local data protection authority if you believe we have not handled your data correctly. For UK and EU users this includes the ICO and relevant EU supervisory authorities.</p>

      <h2 style={{ color: '#C8102E', marginTop: 32, marginBottom: 12, fontSize: 22, fontWeight: 700, fontFamily: 'Georgia, serif' }}>Data Protection Contact</h2>
      <p>GenoMatch Ltd is the data controller responsible for your personal data. For questions, requests, or concerns about how your data is handled, or to exercise your data protection rights, contact our Data Protection Officer at <a href="mailto:privacy@genomatch.app">privacy@genomatch.app</a>.</p>

      <p style={{ marginTop: 48, color: '#6E737C', fontSize: 14 }}>© {new Date().getFullYear()} GenoMatch Ltd. All rights reserved.</p>
      </main>
    </div>
  );
}
