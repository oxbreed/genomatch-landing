import type { Metadata } from 'next';
import Link from 'next/link';

const BODY = 'var(--font-geist-sans), system-ui, sans-serif';
const HEADING = 'Georgia, serif';

export const metadata: Metadata = {
  title: 'GenoMatch support',
  description:
    'Get help with your GenoMatch account, report a member, ask about genotype matching, or reach the team.',
};

const topics = [
  {
    title: 'Report someone',
    body: 'Open their profile or your chat with them, tap the menu, and choose Report. Blocking takes effect immediately and they are not told. Every report is reviewed by a person.',
  },
  {
    title: 'Delete your account',
    body: 'Profile tab, scroll down, Delete account. It is permanent and immediate.',
    href: '/delete-account',
    hrefLabel: 'Full details',
  },
  {
    title: 'Reset your password',
    body: 'Tap Forgot password on the sign-in screen. The link in the email opens a page where you can set a new one.',
  },
  {
    title: 'Change your genotype',
    body: 'Profile tab, then edit your genotype. If your city is locked after verification, email us and we will unlock it.',
  },
  {
    title: 'Something looks wrong in a compatibility result',
    body: 'Tell us the two genotypes and what you saw. GenoMatch shows educational information only and is not a substitute for a lab test or a genetic counsellor, but we do want to know about mistakes.',
  },
];

export default function SupportPage() {
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
          Support
        </h1>
        <p style={{ color: '#6E737C', marginBottom: 12 }}>
          Email{' '}
          <a href="mailto:hello@genomatch.app" style={{ color: '#C8102E' }}>
            hello@genomatch.app
          </a>
          . A person reads every message and replies within two working days.
        </p>
        <p style={{ color: '#6E737C', marginBottom: 40, fontSize: 14 }}>
          GenoMatch Ltd (RC 9236521), Lagos, Nigeria.
        </p>

        {topics.map((topic) => (
          <section key={topic.title} style={{ marginBottom: 28 }}>
            <h2
              style={{
                color: '#C8102E',
                marginBottom: 8,
                fontSize: 20,
                fontWeight: 700,
                fontFamily: HEADING,
              }}
            >
              {topic.title}
            </h2>
            <p style={{ margin: 0 }}>{topic.body}</p>
            {topic.href ? (
              <Link
                href={topic.href}
                style={{ color: '#C8102E', fontSize: 14, display: 'inline-block', marginTop: 6 }}
              >
                {topic.hrefLabel}
              </Link>
            ) : null}
          </section>
        ))}

        <section
          style={{
            marginTop: 40,
            padding: 20,
            borderRadius: 12,
            border: '1px solid rgba(212,175,55,0.3)',
            background: '#FAF8F5',
          }}
        >
          <h2
            style={{
              color: '#C8102E',
              marginTop: 0,
              marginBottom: 8,
              fontSize: 18,
              fontWeight: 700,
              fontFamily: HEADING,
            }}
          >
            Urgent safety concerns
          </h2>
          <p style={{ margin: 0 }}>
            If you believe someone is in immediate danger, contact your local emergency
            services first. Then email us with the member&apos;s profile name so we can
            act on the account.
          </p>
        </section>

        <p style={{ marginTop: 40, fontSize: 14, color: '#6E737C' }}>
          <Link href="/privacy" style={{ color: '#C8102E' }}>
            Privacy Policy
          </Link>
          {' · '}
          <Link href="/terms" style={{ color: '#C8102E' }}>
            Terms of Service
          </Link>
          {' · '}
          <Link href="/delete-account" style={{ color: '#C8102E' }}>
            Delete your account
          </Link>
        </p>
      </main>
    </div>
  );
}
