"use client";

import { FormEvent, useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
        className="rounded-2xl border border-[#074D2E]/15 bg-[#A8D5BA]/25 px-6 py-5 text-center"
      >
        <p className="text-lg font-semibold text-[#074D2E]">
          You&apos;re on the list!
        </p>
        <p className="mt-1 text-sm text-[#074D2E]/80">
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
          className="min-h-12 flex-1 rounded-xl border border-[#074D2E]/20 bg-white px-4 text-[#074D2E] shadow-sm outline-none transition placeholder:text-[#074D2E]/40 focus:border-[#074D2E]/40 focus:ring-2 focus:ring-[#A8D5BA]"
        />
        <button
          type="submit"
          className="min-h-12 shrink-0 rounded-xl bg-[#FFE082] px-6 font-semibold text-[#074D2E] shadow-md transition hover:bg-[#FFD54F] hover:shadow-lg active:scale-[0.98]"
        >
          Join the Waitlist
        </button>
      </form>
      {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
    </div>
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
    <div className="min-h-screen bg-[#FAFAF7] text-[#074D2E]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#074D2E]/10 bg-[#FAFAF7]/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-[#074D2E] lg:text-2xl"
          >
            Geno<span className="text-[#074D2E]/70">Match</span>
          </a>
          <a
            href="#waitlist"
            className="rounded-full bg-[#FFE082] px-5 py-2.5 text-sm font-semibold text-[#074D2E] shadow-sm transition hover:bg-[#FFD54F] hover:shadow-md"
          >
            Join Waitlist
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#A8D5BA]/30 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#FFE082]/25 blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-4 inline-block rounded-full border border-[#074D2E]/15 bg-[#A8D5BA]/20 px-4 py-1 text-xs font-medium uppercase tracking-widest text-[#074D2E]/80">
              Genotype-aware dating
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#074D2E] sm:text-5xl lg:text-6xl">
              The World&apos;s First Genotype-Aware Dating App
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#074D2E]/75 sm:text-xl">
              Find love without leaving your family&apos;s future to chance.
              Built for West Africa. Built for forever.
            </p>

            <div id="waitlist" className="mx-auto mt-10 scroll-mt-24">
              <WaitlistForm />
            </div>
            <p className="mt-4 text-sm text-[#074D2E]/60">
              Be among the first to experience GenoMatch when we launch.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="bg-[#074D2E] px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#FAFAF7] sm:text-4xl lg:text-5xl">
              One conversation could change everything.
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:mt-16 lg:gap-8">
              {[
                <>
                  <span className="text-[#FFE082]">1 in 4</span> AS couples risk
                  having an SS child
                </>,
                <>
                  Sickle cell affects{" "}
                  <span className="text-[#FFE082]">300,000</span> births annually
                </>,
                <>
                  Most couples find out{" "}
                  <span className="text-[#FFE082]">too late</span>
                </>,
              ].map((content, i) => (
                <article
                  key={i}
                  className="rounded-2xl border border-[#A8D5BA]/25 bg-[#074D2E] p-8 shadow-lg ring-1 ring-[#FAFAF7]/5 transition hover:border-[#A8D5BA]/50"
                >
                  <p className="text-xl font-semibold leading-snug text-[#FAFAF7] lg:text-2xl">
                    {content}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#074D2E] sm:text-4xl">
                How it works
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[#074D2E]/70">
                Three simple steps to match with clarity, compassion, and
                confidence.
              </p>
            </div>

            <ol className="mt-14 grid gap-10 sm:grid-cols-3 lg:mt-20 lg:gap-12">
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
                  className="group relative rounded-2xl border border-[#074D2E]/10 bg-white p-8 shadow-sm transition hover:border-[#A8D5BA] hover:shadow-md"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#074D2E]/40">
                    Step {step}
                  </span>
                  <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#A8D5BA]/30 text-[#074D2E] transition group-hover:bg-[#FFE082]/50">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#074D2E]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#074D2E]/70">
                    {body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Testimonial */}
        <section className="border-y border-[#074D2E]/10 bg-[#FAFAF7] px-6 py-20 lg:px-8 lg:py-28">
          <blockquote className="mx-auto max-w-4xl text-center">
            <div
              className="mx-auto mb-8 h-1 w-16 rounded-full bg-[#FFE082]"
              aria-hidden
            />
            <p className="text-2xl font-medium leading-snug text-[#074D2E] sm:text-3xl lg:text-4xl lg:leading-tight">
              &ldquo;Every major dating app optimises for attraction.{" "}
              <span className="font-semibold text-[#074D2E] underline decoration-[#FFE082] decoration-4 underline-offset-4">
                GenoMatch optimises for outcomes.
              </span>
              &rdquo;
            </p>
          </blockquote>
        </section>

        {/* Footer CTA strip */}
        <section className="bg-[#A8D5BA]/20 px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-[#074D2E]">
              Ready when you are.
            </h2>
            <p className="mt-2 text-[#074D2E]/70">
              Join the waitlist and be first in line for launch.
            </p>
            <div className="mt-8 flex justify-center">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#074D2E]/10 bg-[#074D2E] px-6 py-12 text-[#FAFAF7] lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:gap-4">
          <p className="text-lg font-semibold tracking-tight">GenoMatch</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#A8D5BA]">
            <a
              href="mailto:hello@genomatch.app"
              className="transition hover:text-[#FFE082]"
            >
              hello@genomatch.app
            </a>
            <span className="hidden text-[#A8D5BA]/50 sm:inline" aria-hidden>
              ·
            </span>
            <a
              href="https://genomatch.app"
              className="transition hover:text-[#FFE082]"
            >
              genomatch.app
            </a>
          </div>
          <p className="text-sm text-[#A8D5BA]/90">
            Connecting Hearts. Aligning Genes.
          </p>
        </div>
      </footer>
    </div>
  );
}
