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
        className="rounded-2xl border px-6 py-5 text-center shadow-md"
        style={{
          borderColor: `${GOLD}55`,
          backgroundColor: "rgba(255,255,255,0.95)",
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
          className="min-h-12 w-full flex-1 rounded-xl border-2 bg-white px-4 shadow-sm outline-none transition placeholder:text-[#0D2818]/40 focus:ring-2 sm:min-w-0"
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
          className="min-h-12 w-full shrink-0 rounded-xl px-6 font-bold shadow-md transition hover:brightness-105 active:scale-[0.98] sm:w-auto"
          style={{ backgroundColor: GOLD, color: FOREST }}
        >
          Join the Waitlist
        </button>
      </form>
      {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}

function BondMarkGraphic({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
    >
      <circle cx="42" cy="60" r="28" stroke={GOLD} strokeWidth="2" opacity="0.55" />
      <circle cx="78" cy="60" r="28" stroke={SAGE} strokeWidth="2" opacity="0.45" />
      <path
        d="M42 32c12-8 24-8 36 0M42 88c12 8 24 8 36 0"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <circle cx="60" cy="60" r="5" fill={GOLD} opacity="0.65" />
    </svg>
  );
}

function HelixAccent({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 80"
      fill="none"
      aria-hidden
    >
      <path
        d="M0 40c25-22 50 22 75 0s50 22 75 0 50 22 50 0"
        stroke={GOLD}
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M0 52c25-18 50 18 75 0s50 18 75 0 50 18 50 0"
        stroke={SAGE}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.28"
      />
    </svg>
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
        className="relative sticky top-0 z-50 overflow-hidden border-b shadow-sm"
        style={{
          backgroundColor: FOREST_BG,
          borderColor: `${GOLD}33`,
        }}
      >
        <BondMarkGraphic className="pointer-events-none absolute -left-6 top-1/2 h-16 w-16 -translate-y-1/2 opacity-60" />
        <HelixAccent className="pointer-events-none absolute -right-4 top-2 h-8 w-32 opacity-70" />
        <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[4.5rem] lg:px-8">
          <a
            href="#"
            className="text-2xl font-bold tracking-tight lg:text-3xl"
            style={{ ...headingStyle, color: GOLD }}
          >
            GenoMatch
          </a>
          <a
            href="#waitlist"
            className="rounded-full px-5 py-2.5 text-sm font-bold shadow-md transition hover:brightness-105"
            style={{ backgroundColor: GOLD, color: FOREST }}
          >
            Join Waitlist
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          className="relative w-full overflow-hidden px-6 pb-16 pt-14 lg:px-8 lg:pb-20 lg:pt-20"
          style={{ backgroundColor: FOREST_BG }}
        >
          <BondMarkGraphic className="pointer-events-none absolute left-6 top-16 h-28 w-28 opacity-50 lg:left-12 lg:h-36 lg:w-36" />
          <BondMarkGraphic className="pointer-events-none absolute -right-8 bottom-20 h-32 w-32 rotate-12 opacity-40 lg:right-8" />
          <HelixAccent className="pointer-events-none absolute left-1/2 top-8 w-48 -translate-x-1/2 opacity-60 lg:w-64" />
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl"
            style={{ backgroundColor: `${GOLD}18` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full blur-3xl"
            style={{ backgroundColor: `${SAGE}15` }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-4xl text-center">
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
              className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{ ...headingStyle, color: "#FFFFFF" }}
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

            <div id="waitlist" className="mx-auto mt-10 scroll-mt-24">
              <WaitlistForm />
            </div>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: `${SAGE}cc` }}>
              Be among the first to experience GenoMatch when we launch.
            </p>
          </div>

          <div
            className="mx-auto mt-14 h-px max-w-4xl"
            style={{
              background: `linear-gradient(90deg, transparent, ${GOLD}88, transparent)`,
            }}
            aria-hidden
          />
        </section>

        {/* Statistics */}
        <section
          className="px-6 py-20 lg:px-8 lg:py-28"
          style={{ backgroundColor: LINEN }}
        >
          <div className="mx-auto max-w-6xl">
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
                  className="rounded-2xl border-l-4 bg-white p-8 shadow-lg transition hover:shadow-xl"
                  style={{ borderLeftColor: GOLD }}
                >
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
        <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
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
                className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-7 hidden h-0.5 sm:block"
                style={{ backgroundColor: `${GOLD}55` }}
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
                  <li key={step} className="relative flex flex-col items-center text-center">
                    <div
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold shadow-md"
                      style={{ backgroundColor: GOLD, color: FOREST }}
                    >
                      {step}
                    </div>
                    <div
                      className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${GOLD}18`, color: FOREST }}
                    >
                      <Icon className="h-6 w-6" />
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
          <BondMarkGraphic className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 opacity-35" />
          <BondMarkGraphic className="pointer-events-none absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 opacity-35" />
          <HelixAccent className="pointer-events-none absolute bottom-8 left-1/2 w-56 -translate-x-1/2 opacity-50" />
          <blockquote className="relative mx-auto max-w-4xl text-center">
            <span
              className="pointer-events-none absolute -left-2 -top-6 select-none text-7xl font-bold leading-none opacity-40 sm:-left-4 sm:-top-8 sm:text-8xl"
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
            <span
              className="pointer-events-none absolute -bottom-10 -right-2 select-none text-7xl font-bold leading-none opacity-40 sm:-bottom-12 sm:-right-4 sm:text-8xl"
              style={{ ...headingStyle, color: GOLD }}
              aria-hidden
            >
              &rdquo;
            </span>
          </blockquote>
        </section>

        {/* Second CTA */}
        <section
          className="px-6 py-16 lg:px-8 lg:py-20"
          style={{ backgroundColor: LINEN }}
        >
          <div className="mx-auto max-w-xl text-center">
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
            <div className="mt-8 flex justify-center">
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
        <HelixAccent className="pointer-events-none absolute left-1/2 top-4 w-48 -translate-x-1/2 opacity-45" />
        <BondMarkGraphic className="pointer-events-none absolute bottom-2 left-8 h-14 w-14 opacity-40" />
        <BondMarkGraphic className="pointer-events-none absolute bottom-2 right-8 h-14 w-14 opacity-40" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:gap-4">
          <p
            className="text-lg font-bold tracking-tight"
            style={{ ...headingStyle, color: GOLD }}
          >
            GenoMatch
          </p>
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
