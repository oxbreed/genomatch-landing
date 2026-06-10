'use client';

import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import { FormEvent, useEffect, useMemo, useState } from 'react';

const BODY = 'var(--font-geist-sans), system-ui, sans-serif';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);
  const [initializing, setInitializing] = useState(true);

  const supabase = useMemo(
    () =>
      createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
        {
          auth: {
            detectSessionInUrl: true,
            persistSession: true,
            autoRefreshToken: true,
          },
        }
      ),
    []
  );

  useEffect(() => {
    let cancelled = false;

    const markSessionReady = () => {
      if (cancelled) return;
      setSessionReady(true);
      setInitializing(false);
      setError('');
      if (window.location.hash || window.location.search) {
        window.history.replaceState({}, '', window.location.pathname);
      }
    };

    const markSessionFailed = (message: string) => {
      if (cancelled) return;
      setError(message);
      setInitializing(false);
    };

    const establishSession = async () => {
      setError('');
      setInitializing(true);

      const hashParams = new URLSearchParams(
        window.location.hash.startsWith('#')
          ? window.location.hash.slice(1)
          : window.location.hash
      );
      const queryParams = new URLSearchParams(window.location.search);

      const accessToken = hashParams.get('access_token');
      const refreshToken = hashParams.get('refresh_token');
      const tokenType = hashParams.get('type');
      const code = queryParams.get('code');

      const hasHashRecovery = Boolean(accessToken && tokenType === 'recovery');
      const hasCode = Boolean(code);

      // 1. Hash fragment: #access_token=xxx&type=recovery
      if (hasHashRecovery) {
        const { error: sessionError } = await supabase.auth.setSession({
          access_token: accessToken!,
          refresh_token: refreshToken ?? '',
        });
        if (sessionError) {
          markSessionFailed(sessionError.message);
          return;
        }
        markSessionReady();
        return;
      }

      // 2. Query parameter: ?code=xxx
      if (hasCode) {
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code!);
        if (exchangeError) {
          markSessionFailed(exchangeError.message);
          return;
        }
        markSessionReady();
        return;
      }

      // 3. Already have an active session
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) {
        markSessionFailed(sessionError.message);
        return;
      }

      if (session) {
        markSessionReady();
        return;
      }

      // Only invalid when no hash recovery token, no code, and no session
      if (!hasHashRecovery && !hasCode) {
        markSessionFailed(
          'Invalid or expired reset link. Please request a new password reset email.'
        );
      }
    };

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY' || (session && event === 'SIGNED_IN')) {
        markSessionReady();
      }
    });

    void establishSession();

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, [supabase]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');
    setError('');

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    const { error: updateError } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setMessage('Password updated successfully. You can now sign in to the GenoMatch app.');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div style={{ background: '#F3EDE3', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <header style={{ background: '#163522', padding: '20px 40px', borderBottom: '1px solid rgba(191,155,74,0.15)' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ color: '#BF9B4A', fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 }}>GenoMatch</span>
        </Link>
      </header>
      <main
        style={{
          maxWidth: 440,
          margin: '0 auto',
          padding: '56px 24px',
          lineHeight: 1.7,
          color: '#243830',
        }}
      >
        <div style={{ background: '#FFFFFF', borderRadius: 16, padding: '40px 32px', border: '1px solid rgba(191,155,74,0.25)' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: '#163522' }}>
        Reset Password
      </h1>
      <p style={{ color: '#5A7268', fontFamily: BODY, marginBottom: 32 }}>
        Enter a new password for your GenoMatch account.
      </p>

      <p style={{ color: '#5A7268', fontFamily: BODY, fontSize: 14, marginBottom: 24 }}>
        Password must be at least 8 characters
      </p>

      {initializing ? (
        <p style={{ color: '#5A7268', fontFamily: BODY }}>Verifying your reset link…</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="new-password"
            style={{ display: 'block', fontWeight: 600, color: '#163522', marginBottom: 8, fontFamily: BODY }}
          >
            New Password
          </label>
          <input
            id="new-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password"
            disabled={!sessionReady || loading || !!message}
            required
            minLength={8}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '12px 14px',
              marginBottom: 20,
              borderRadius: 8,
              border: '1px solid rgba(22, 53, 34, 0.2)',
              fontSize: 16,
              fontFamily: BODY,
            }}
          />

          <label
            htmlFor="confirm-password"
            style={{ display: 'block', fontWeight: 600, color: '#163522', marginBottom: 8, fontFamily: BODY }}
          >
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            autoComplete="new-password"
            disabled={!sessionReady || loading || !!message}
            required
            minLength={8}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '12px 14px',
              marginBottom: 24,
              borderRadius: 8,
              border: '1px solid rgba(22, 53, 34, 0.2)',
              fontSize: 16,
              fontFamily: BODY,
            }}
          />

          <button
            type="submit"
            disabled={!sessionReady || loading || !!message}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: 8,
              border: 'none',
              backgroundColor: '#163522',
              color: '#fff',
              fontSize: 16,
              fontWeight: 600,
              fontFamily: BODY,
              cursor: sessionReady && !loading && !message ? 'pointer' : 'not-allowed',
              opacity: sessionReady && !loading && !message ? 1 : 0.6,
            }}
          >
            {loading ? 'Updating…' : 'Update Password'}
          </button>
        </form>
      )}

      {message ? (
        <p style={{ marginTop: 24, color: '#163522', fontWeight: 600 }}>{message}</p>
      ) : null}

      {error ? (
        <p style={{ marginTop: 24, color: '#A32D2D', fontWeight: 600 }}>{error}</p>
      ) : null}

        </div>
        <p style={{ marginTop: 32, color: '#5A7268', fontSize: 14, textAlign: 'center', fontFamily: BODY }}>
          © {new Date().getFullYear()} GenoMatch Ltd. All rights reserved.
        </p>
      </main>
    </div>
  );
}
