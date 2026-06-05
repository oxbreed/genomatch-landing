"use client";

import { FormEvent, useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FOREST = "#0D2818";
const FOREST_BG = "#1A3D28";
const LINEN = "#F5EFE6";
const GOLD = "#D4A843";
const SAGE = "#8FAF95";

const headingStyle = {
  fontFamily: 'Georgia, "Times New Roman", serif',
  letterSpacing: "-0.02em",
} as const;

function WaitlistForm({ id }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email address.");
      return;
    }
    if (!EMAIL_RE.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border px-6 py-5 text-center shadow-lg"
        style={{
          borderColor: `${GOLD}55`,
          backgroundColor: "rgba(255,255,255,0.97)",
          boxShadow: `0 12px 40px ${FOREST}18`,
        }}
      >
        <p
          className="text-lg font-bold"
          style={{ ...headingStyle, color: FOREST }}
        >
          You&apos;re on the list!
        </p>
        <p
          className="mt-1 text-sm leading-relaxed"
          style={{ color: `${FOREST}cc` }}
        >
          We&apos;ll reach out when GenoMatch launches. Thank you for believing
          in love with intention.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl">
      <form
        id={id}
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
        noValidate
      >
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          className="min-h-12 w-full flex-1 rounded-xl border-2 bg-white px-4 shadow-sm outline-none transition placeholder:text-[#0D2818]/40 focus:ring-2 focus:ring-[#D4A843]/35 sm:min-w-0"
          style={{
            color: FOREST,
            borderColor: `${FOREST}22`,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = GOLD;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = `${FOREST}22`;
          }}
        />
        <button
          type="submit"
          className="min-h-12 w-full shrink-0 rounded-xl px-6 font-bold shadow-lg transition hover:brightness-105 active:scale-[0.98] sm:w-auto"
          style={{
            background: `linear-gradient(135deg, ${GOLD} 0%, #E8C56A 50%, #C49A3A 100%)`,
            color: FOREST,
            boxShadow: `0 8px 24px ${GOLD}44`,
          }}
        >
          Join the Waitlist
        </button>
      </form>
      {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}

function CeremonyRule({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        height: 1,
        background: `linear-gradient(90deg, transparent 0%, ${GOLD}22 15%, ${GOLD} 50%, ${GOLD}22 85%, transparent 100%)`,
      }}
      aria-hidden
    />
  );
}

function GenoCrest({ size = 120, className }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={GOLD} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#C49A3A" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="crestSage" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={SAGE} stopOpacity="0.85" />
          <stop offset="100%" stopColor={SAGE} stopOpacity="0.45" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="54" stroke={GOLD} strokeWidth="0.75" strokeDasharray="4 6" opacity="0.35" />
      <circle cx="44" cy="60" r="26" stroke="url(#crestGold)" strokeWidth="2.25" />
      <circle cx="76" cy="60" r="26" stroke="url(#crestSage)" strokeWidth="2.25" />
      <path
        d="M44 36c10-7 22-7 32 0M44 84c10 7 22 7 32 0"
        stroke="url(#crestGold)"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M60 28v64M48 44c8 6 16 6 24 0M48 76c8-6 16-6 24 0"
        stroke={SAGE}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <circle cx="60" cy="60" r="6" fill="url(#crestGold)" />
      <circle cx="60" cy="60" r="2.5" fill={LINEN} opacity="0.9" />
    </svg>
  );
}

function HelixField({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 140" fill="none" aria-hidden>
      <path
        d="M0 70c40-35 80 35 120 0s80 35 120 0 80 35 80 0"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.32"
      />
      <path
        d="M0 82c40-28 80 28 120 0s80 28 120 0 80 28 80 0"
        stroke={SAGE}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.24"
      />
      <path
        d="M0 58c40-28 80 28 120 0s80 28 120 0 80 28 80 0"
        stroke={GOLD}
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.18"
      />
      {[
        [40, 70],
        [120, 70],
        [200, 70],
        [280, 70],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="3"
          fill={i % 2 === 0 ? GOLD : SAGE}
          opacity="0.45"
        />
      ))}
    </svg>
  );
}

function MeshBackdrop({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden>
      <defs>
        <pattern id="meshDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.75" fill={GOLD} opacity="0.18" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#meshDots)" />
      <circle cx="200" cy="200" r="160" stroke={GOLD} strokeWidth="0.5" opacity="0.12" />
      <circle cx="200" cy="200" r="120" stroke={SAGE} strokeWidth="0.5" opacity="0.1" />
    </svg>
  );
}

function CornerBrackets({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M4 14V4h10M44 14V4H34M4 34v10h10M44 34v10H34" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

function ForestSectionBackdrop() {
  return (
    <>
      <MeshBackdrop className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${GOLD}14 0%, transparent 65%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 100%, ${SAGE}10 0%, transparent 60%)`,
        }}
        aria-hidden
      />
    </>
  );
}

function DnaIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        d="M8 4c0 2.5 1.5 4 4 4s4-1.5 4-4M8 20c0-2.5 1.5-4 4-4s4 1.5 4 4M8 8c2 2 4 2 6 0s4-2 6 0M8 16c2-2 4-2 6 0s4 2 6 0"
      />
    </svg>
  );
}

function SearchHeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <circle cx="10" cy="10" r="6" />
      <path strokeLinecap="round" d="M14.5 14.5L20 20" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 9.5c.8-.8 2.2-.8 3 0"
      />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: LINEN, color: FOREST }}
    >
      {/* Navigation */}
      <header
        className="relative sticky top-0 z-50 overflow-hidden border-b"
        style={{
          backgroundColor: FOREST_BG,
          borderColor: `${GOLD}33`,
          boxShadow: `0 4px 24px ${FOREST}40`,
        }}
      >
        <CeremonyRule className="absolute left-0 right-0 top-0" />
        <ForestSectionBackdrop />
        <HelixField className="pointer-events-none absolute -right-6 top-1 h-16 w-40 opacity-60" />
        <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[4.5rem] lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <GenoCrest size={36} className="shrink-0 opacity-90" />
            <span
              className="text-2xl font-bold tracking-tight lg:text-3xl"
              style={{ ...headingStyle, color: GOLD }}
            >
              GenoMatch
            </span>
          </a>
          <a
            href="#waitlist"
            className="rounded-full px-5 py-2.5 text-sm font-bold shadow-md transition hover:brightness-105"
            style={{
              background: `linear-gradient(135deg, ${GOLD}, #C49A3A)`,
              color: FOREST,
              boxShadow: `0 4px 16px ${GOLD}40`,
            }}
          >
            Join Waitlist
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          className="relative w-full overflow-hidden px-6 pb-16 pt-14 lg:px-8 lg:pb-24 lg:pt-24"
          style={{ backgroundColor: FOREST_BG }}
        >
          <ForestSectionBackdrop />
          <GenoCrest
            size={200}
            className="pointer-events-none absolute -left-16 top-20 opacity-[0.18] lg:-left-8 lg:opacity-[0.22]"
          />
          <GenoCrest
            size={180}
            className="pointer-events-none absolute -right-12 bottom-16 rotate-12 opacity-[0.14] lg:right-4"
          />
          <HelixField className="pointer-events-none absolute left-1/2 top-10 w-72 -translate-x-1/2 opacity-50 lg:w-96" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <GenoCrest size={72} className="opacity-95 drop-shadow-lg" />
            </div>
            <p
              className="mb-5 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{
                borderColor: `${GOLD}44`,
                color: GOLD,
                backgroundColor: `${GOLD}12`,
              }}
            >
              Genotype-aware dating
            </p>
            <h1
              className="text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{
                ...headingStyle,
                color: "#FFFFFF",
                textShadow: `0 2px 32px ${FOREST}88`,
              }}
            >
              The World&apos;s First Genotype-Aware Dating App
            </h1>
            <p
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl"
              style={{ color: SAGE }}
            >
              Find love without leaving your family&apos;s future to chance.
              Built for anyone who values informed love.
            </p>

            <div
              className="mx-auto mt-10 max-w-xl rounded-2xl border p-5 sm:p-6"
              id="waitlist"
              style={{
                scrollMarginTop: "6rem",
                borderColor: `${GOLD}33`,
                backgroundColor: `${FOREST}33`,
                boxShadow: `0 16px 48px ${FOREST}55`,
              }}
            >
              <WaitlistForm />
            </div>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: `${SAGE}cc` }}>
              Be among the first to experience GenoMatch when we launch.
            </p>
          </div>

          <CeremonyRule className="relative mx-auto mt-14 max-w-3xl" />
        </section>

        {/* Statistics */}
        <section
          className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28"
          style={{ backgroundColor: LINEN }}
        >
          <HelixField className="pointer-events-none absolute -right-8 top-12 w-48 opacity-30" />
          <div className="relative mx-auto max-w-6xl">
            <CeremonyRule className="mb-10 max-w-xs" />
            <h2
              className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
              style={{ ...headingStyle, color: FOREST }}
            >
              One conversation could change everything.
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:mt-16 lg:gap-8">
              {[
                {
                  stat: "1 in 4",
                  label: "AS couples risk having SS child",
                },
                {
                  stat: "300,000",
                  label: "Sickle cell affects births annually",
                },
                {
                  stat: "too late",
                  label: "Most couples find out",
                },
              ].map(({ stat, label }) => (
                <article
                  key={stat}
                  className="relative overflow-hidden rounded-2xl border-l-4 bg-white p-8 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                  style={{
                    borderLeftColor: GOLD,
                    boxShadow: `0 8px 32px ${FOREST}0d`,
                  }}
                >
                  <CornerBrackets className="pointer-events-none absolute right-3 top-3 h-8 w-8 opacity-40" />
                  <p
                    className="text-3xl font-bold lg:text-4xl"
                    style={{ ...headingStyle, color: GOLD }}
                  >
                    {stat}
                  </p>
                  <p
                    className="mt-3 text-base font-semibold leading-relaxed lg:text-lg"
                    style={{ color: FOREST }}
                  >
                    {label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-8 lg:py-28">
          <MeshBackdrop className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-25" />
          <div className="relative mx-auto max-w-6xl">
            <div className="text-center">
              <CeremonyRule className="mx-auto mb-8 max-w-xs" />
              <h2
                className="text-3xl font-bold sm:text-4xl"
                style={{ ...headingStyle, color: FOREST }}
              >
                How it works
              </h2>
              <p
                className="mx-auto mt-4 max-w-xl leading-relaxed"
                style={{ color: `${FOREST}b3` }}
              >
                Three simple steps to match with clarity, compassion, and
                confidence.
              </p>
            </div>

            <div className="relative mt-14 lg:mt-20">
              <div
                className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-7 hidden h-px sm:block"
                style={{
                  background: `linear-gradient(90deg, transparent, ${GOLD}66, ${GOLD}, ${GOLD}66, transparent)`,
                }}
                aria-hidden
              />

              <ol className="grid gap-10 sm:grid-cols-3 lg:gap-12">
                {[
                  {
                    step: "01",
                    title: "Enter your genotype",
                    body: "Share your sickle cell status securely. Your data stays private and in your control.",
                    Icon: DnaIcon,
                  },
                  {
                    step: "02",
                    title: "Discover compatible matches",
                    body: "Meet people aligned with your values and your genetic compatibility—before feelings run deep.",
                    Icon: SearchHeartIcon,
                  },
                  {
                    step: "03",
                    title: "Connect with confidence",
                    body: "Start conversations knowing you've already addressed what matters for your future family.",
                    Icon: ShieldCheckIcon,
                  },
                ].map(({ step, title, body, Icon }) => (
                  <li
                    key={step}
                    className="group relative flex flex-col items-center rounded-2xl border bg-white p-6 text-center shadow-md transition hover:shadow-lg"
                    style={{
                      borderColor: `${GOLD}22`,
                      boxShadow: `0 6px 24px ${FOREST}08`,
                    }}
                  >
                    <div
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold shadow-md"
                      style={{
                        background: `linear-gradient(145deg, ${GOLD}, #C49A3A)`,
                        color: FOREST,
                      }}
                    >
                      {step}
                    </div>
                    <div
                      className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl border"
                      style={{
                        backgroundColor: `${GOLD}12`,
                        borderColor: `${GOLD}28`,
                        color: FOREST,
                      }}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3
                      className="mt-5 text-xl font-bold"
                      style={{ ...headingStyle, color: FOREST }}
                    >
                      {title}
                    </h3>
                    <p
                      className="mt-2 max-w-xs text-sm leading-relaxed"
                      style={{ color: `${FOREST}99` }}
                    >
                      {body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section
          className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28"
          style={{ backgroundColor: FOREST_BG }}
        >
          <ForestSectionBackdrop />
          <GenoCrest
            size={220}
            className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 opacity-[0.12]"
          />
          <GenoCrest
            size={220}
            className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.12]"
          />
          <blockquote className="relative mx-auto max-w-4xl rounded-3xl border px-8 py-12 text-center sm:px-12"
            style={{
              borderColor: `${GOLD}28`,
              backgroundColor: `${FOREST}44`,
              boxShadow: `0 20px 60px ${FOREST}66`,
            }}
          >
            <CeremonyRule className="mb-8" />
            <span
              className="pointer-events-none absolute -left-1 -top-4 select-none text-7xl font-bold leading-none opacity-50 sm:-left-2 sm:-top-6 sm:text-8xl"
              style={{ ...headingStyle, color: GOLD }}
              aria-hidden
            >
              &ldquo;
            </span>
            <p
              className="relative text-2xl font-medium italic leading-snug sm:text-3xl lg:text-4xl lg:leading-tight"
              style={{ ...headingStyle, color: "#FFFFFF" }}
            >
              Every major dating app optimises for attraction.{" "}
              <span style={{ color: GOLD, fontStyle: "normal", fontWeight: 700 }}>
                GenoMatch optimises for outcomes.
              </span>
            </p>
            <CeremonyRule className="mt-8" />
            <span
              className="pointer-events-none absolute -bottom-8 -right-1 select-none text-7xl font-bold leading-none opacity-50 sm:-bottom-10 sm:-right-2 sm:text-8xl"
              style={{ ...headingStyle, color: GOLD }}
              aria-hidden
            >
              &rdquo;
            </span>
          </blockquote>
        </section>

        {/* Second CTA */}
        <section
          className="relative overflow-hidden px-6 py-16 lg:px-8 lg:py-20"
          style={{ backgroundColor: LINEN }}
        >
          <HelixField className="pointer-events-none absolute bottom-4 left-1/2 w-56 -translate-x-1/2 opacity-25" />
          <div className="relative mx-auto max-w-xl text-center">
            <GenoCrest size={48} className="mx-auto mb-5 opacity-80" />
            <h2
              className="text-2xl font-bold sm:text-3xl"
              style={{ ...headingStyle, color: FOREST }}
            >
              Ready when you are.
            </h2>
            <p
              className="mt-2 leading-relaxed"
              style={{ color: `${FOREST}b3` }}
            >
              Join the waitlist and be first in line for launch.
            </p>
            <div
              className="mt-8 rounded-2xl border bg-white p-5 shadow-lg"
              style={{
                borderColor: `${GOLD}33`,
                boxShadow: `0 12px 40px ${FOREST}10`,
              }}
            >
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="relative overflow-hidden border-t px-6 py-12 lg:px-8"
        style={{
          backgroundColor: FOREST_BG,
          borderColor: `${GOLD}22`,
        }}
      >
        <ForestSectionBackdrop />
        <CeremonyRule className="relative mx-auto mb-8 max-w-lg" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:gap-4">
          <div className="flex items-center gap-3">
            <GenoCrest size={32} className="opacity-85" />
            <p
              className="text-lg font-bold tracking-tight"
              style={{ ...headingStyle, color: GOLD }}
            >
              GenoMatch
            </p>
          </div>
          <div
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm leading-relaxed"
            style={{ color: SAGE }}
          >
            <a
              href="mailto:hello@genomatch.app"
              className="font-semibold transition hover:brightness-110"
              style={{ color: GOLD }}
            >
              hello@genomatch.app
            </a>
            <span className="hidden opacity-50 sm:inline" aria-hidden>
              ·
            </span>
            <a
              href="https://genomatch.app"
              className="transition hover:brightness-110"
              style={{ color: SAGE }}
            >
              genomatch.app
            </a>
          </div>
          <p
            className="text-sm font-semibold tracking-wide"
            style={{ color: GOLD }}
          >
            Connecting Hearts. Aligning Genes.
          </p>
        </div>
      </footer>
    </div>
  );
}
