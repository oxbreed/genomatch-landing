import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';

const BODY = 'var(--font-geist-sans), system-ui, sans-serif';
const HEADING = 'Georgia, serif';

export const metadata: Metadata = buildMetadata({
  title: 'Delete your account',
  description:
    'How to permanently delete your GenoMatch account and what happens to your data, including genotype, photos, and messages.',
  path: '/delete-account',
});

const steps = [
  'Open GenoMatch and go to the Profile tab.',
  'Scroll to the bottom and tap Delete account.',
  'Enter your password to confirm it is you.',
  'Confirm. The account and its data are removed immediately.',
];

const removed = [
  'Your profile, including your genotype, photos, bio and location',
  'Every message you have sent and the conversations they belong to',
  'Your matches, likes and passes',
  'Your login credentials',
];

export default function DeleteAccountPage() {
  return (
    <div style={{ background: '#FAF8F5', minHeight: '100vh' }}>
      <header
        style={{
          background: '#FFFFFF',
          padding: '20px 40px',
          borderBottom: '1px solid rgba(11,12,14,0.1)',
        }}
      >
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span
            className="gm-wordmark-text"
            style={{ fontFamily: HEADING, fontSize: 22, fontWeight: 700 }}
          >
            GenoMatch
          </span>
        </Link>
      </header>

      <main
        id="main-content"
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '56px 24px',
          fontFamily: BODY,
          lineHeight: 1.7,
          color: '#0B0C0E',
        }}
      >
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 8,
            color: '#C8102E',
            fontFamily: HEADING,
          }}
        >
          Delete your account
        </h1>
        <p style={{ color: '#6E737C', marginBottom: 40 }}>
          You can delete your GenoMatch account yourself, from inside the app, at any
          time. You do not need to contact us and you do not need a reason.
        </p>

        <h2
          style={{
            color: '#C8102E',
            marginTop: 32,
            marginBottom: 12,
            fontSize: 22,
            fontWeight: 700,
            fontFamily: HEADING,
          }}
        >
          In the app
        </h2>
        <ol style={{ paddingLeft: 22, margin: 0 }}>
          {steps.map((step) => (
            <li key={step} style={{ marginBottom: 8 }}>
              {step}
            </li>
          ))}
        </ol>

        <h2
          style={{
            color: '#C8102E',
            marginTop: 32,
            marginBottom: 12,
            fontSize: 22,
            fontWeight: 700,
            fontFamily: HEADING,
          }}
        >
          What is deleted
        </h2>
        <ul style={{ paddingLeft: 22, margin: 0 }}>
          {removed.map((item) => (
            <li key={item} style={{ marginBottom: 8 }}>
              {item}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 16 }}>
          Deletion is permanent. There is no recovery window and no way for us to
          restore an account once it is gone.
        </p>

        <h2
          style={{
            color: '#C8102E',
            marginTop: 32,
            marginBottom: 12,
            fontSize: 22,
            fontWeight: 700,
            fontFamily: HEADING,
          }}
        >
          What we keep, and why
        </h2>
        <p>
          Records we are required by law to retain, such as reports of abuse and the
          minimum needed to prevent a banned member from returning, are kept in a
          separate store that is not linked to your profile. Aggregate counts that
          cannot identify you may remain in our analytics.
        </p>

        <h2
          style={{
            color: '#C8102E',
            marginTop: 32,
            marginBottom: 12,
            fontSize: 22,
            fontWeight: 700,
            fontFamily: HEADING,
          }}
        >
          If you cannot open the app
        </h2>
        <p>
          Email{' '}
          <a href="mailto:hello@genomatch.app" style={{ color: '#C8102E' }}>
            hello@genomatch.app
          </a>{' '}
          from the address on your account and ask us to delete it. We will confirm
          within five working days.
        </p>

        <p style={{ marginTop: 40, fontSize: 14, color: '#6E737C' }}>
          See also our{' '}
          <Link href="/privacy" style={{ color: '#C8102E' }}>
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/terms" style={{ color: '#C8102E' }}>
            Terms of Service
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
