"use client";

import { CSSProperties, FormEvent, ReactNode, useId, useState } from "react";
import { joinWaitlist } from "./actions";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Midnight Jade & Champagne — warm ivory canvas, deep forest depth, antique gold accent */
const FOREST = "#0F2419";
const FOREST_MID = "#1A3528";
const FOREST_SOFT = "#2A4A3A";
const GOLD = "#BF9B4A";
const SAGE = "#7A9488";
const SAGE_LIGHT = "#A8BDB2";
const WHITE = "#FFFFFF";

const IVORY = "#FBFAF6";
const PEARL = "#F7F5F0";
const LINEN = "#F3EDE3";
const CREAM = "#EDE6DA";

const MINT_FRESH = PEARL;
const MINT = LINEN;
const MINT_PEARL = IVORY;
const MINT_SOFT = "#DDE6DF";
const MINT_DEEP = "#C8D5CC";
const MINT_RICH = "#A8BDB2";
const MINT_FOREST = FOREST_MID;
const MINT_FOREST_DEEP = FOREST;
const MINT_WHISPER = "#F5F2EC";
const BORDER = "#C8D4CC";
const BORDER_SOFT = "#D8E2DC";

const SURFACE = IVORY;
const SURFACE_LIFT = WHITE;
const SURFACE_MINT = "#F5F0E8";

const TEXT = "#243830";
const TEXT_SOFT = "#5A7268";

const GOLD_LIGHT = "#F0E6D0";
const GOLD_MID = "#BF9B4A";
const GOLD_DEEP = "#8A6824";
const GOLD_CHAMPAGNE = "#D4BC82";

const goldFoil = `linear-gradient(135deg, ${GOLD_LIGHT} 0%, ${GOLD_CHAMPAGNE} 28%, ${GOLD_MID} 52%, ${GOLD_DEEP} 72%, ${GOLD_LIGHT} 100%)`;
const goldHairline = `linear-gradient(90deg, transparent, ${GOLD_MID}18 22%, ${GOLD_CHAMPAGNE}55 50%, ${GOLD_MID}18 78%, transparent)`;
const heroAmbient = `linear-gradient(168deg, ${IVORY} 0%, ${PEARL} 38%, ${LINEN} 72%, ${CREAM} 100%)`;
const statsAmbient = `linear-gradient(180deg, ${LINEN} 0%, ${MINT_SOFT} 52%, ${MINT_DEEP} 100%)`;
const forestDepth = `linear-gradient(168deg, ${FOREST_MID} 0%, ${FOREST} 100%)`;
const forestFooter = `linear-gradient(180deg, ${FOREST_MID} 0%, ${FOREST} 62%, #0A1A12 100%)`;

const FOOTER_LINK = "#C5D5CB";
const FOOTER_MUTED = "#8FA396";

const shadowSoft =
  "0 1px 2px rgba(15,36,25,0.04), 0 6px 20px rgba(15,36,25,0.05), 0 18px 40px rgba(15,36,25,0.04)";
const shadowDeep =
  "0 2px 6px rgba(15,36,25,0.05), 0 16px 40px rgba(15,36,25,0.08), 0 40px 80px rgba(15,36,25,0.06)";
const shadowElevated =
  "0 2px 10px rgba(15,36,25,0.06), 0 24px 52px rgba(15,36,25,0.08), 0 0 0 1px rgba(255,255,255,0.88) inset";
const shadowLuxe =
  "0 4px 20px rgba(15,36,25,0.07), 0 32px 72px rgba(15,36,25,0.1), 0 0 0 1px rgba(255,255,255,0.92) inset";
const shadowQuote =
  "0 28px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(15,36,25,0.08), inset 0 1px 0 rgba(255,255,255,0.95)";

const displayFont =
  'Georgia, "Times New Roman", "Palatino Linotype", "Book Antiqua", serif';
const bodyFont = 'var(--font-geist-sans), "Inter", system-ui, -apple-system, sans-serif';

const displayStyle = {
  fontFamily: displayFont,
  fontFeatureSettings: '"liga" 1, "kern" 1, "onum" 1',
  letterSpacing: "-0.028em",
} as const;

const headingStyle = { ...displayStyle, fontWeight: 600 } as const;

const bodyStyle = {
  fontFamily: bodyFont,
  fontFeatureSettings: '"kern" 1, "liga" 1',
  letterSpacing: "0.012em",
} as const;

const labelStyle = {
  ...bodyStyle,
  fontWeight: 500,
  letterSpacing: "0.24em",
  textTransform: "uppercase" as const,
  fontSize: "0.625rem",
};

function PageStyles() {
  return (
    <style>{`
      @keyframes rise {
        from { opacity: 0; transform: translateY(18px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes drift {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
      .rise { animation: rise 0.85s cubic-bezier(0.22, 1, 0.36, 1) both; }
      .rise-1 { animation-delay: 0.1s; }
      .rise-2 { animation-delay: 0.22s; }
      .rise-3 { animation-delay: 0.34s; }
      .drift { animation: drift 8s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) {
        .rise, .rise-1, .rise-2, .rise-3 { animation: none; opacity: 1; transform: none; }
        .drift { animation: none; }
        .btn-premium:hover { transform: none; }
        .card-lift:hover { transform: none; }
      }
      .gold-accent {
        background: ${goldFoil};
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .nav-glass {
        background: rgba(251,250,246,0.82);
        box-shadow: 0 1px 0 rgba(191,155,74,0.1), 0 12px 40px rgba(15,36,25,0.04);
      }
      .panel-luxe {
        border-radius: 1.25rem;
        border-color: rgba(191,155,74,0.14) !important;
      }
      @media (min-width: 640px) {
        .panel-luxe { border-radius: 1.5rem; }
      }
      .quote-luxe {
        box-shadow: ${shadowQuote.replace(/"/g, "")};
      }
      .stat-featured {
        box-shadow: ${shadowLuxe.replace(/"/g, "")};
      }
      .stat-featured::before {
        content: "";
        position: absolute;
        inset-inline: 0;
        top: 0;
        height: 2px;
        background: ${goldFoil};
        opacity: 0.85;
      }
      .btn-premium {
        background: ${goldFoil};
        box-shadow: 0 2px 8px rgba(150,117,46,0.22), inset 0 1px 0 rgba(255,255,255,0.42);
        transition: transform 0.35s ease, box-shadow 0.35s ease;
      }
      .btn-premium:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 20px rgba(150,117,46,0.28), inset 0 1px 0 rgba(255,255,255,0.48);
      }
      .btn-premium:disabled {
        opacity: 0.72;
        cursor: not-allowed;
        transform: none;
      }
      .card-lift {
        transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease, border-color 0.5s ease;
      }
      .card-lift:hover {
        transform: translateY(-3px);
        box-shadow: ${shadowDeep.replace(/"/g, "")};
      }
      .stat-number {
        background: ${goldFoil};
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .eyebrow-pill {
        border: 1px solid ${GOLD_MID}38;
        color: ${FOREST_SOFT};
        background: rgba(255,255,255,0.62);
        backdrop-filter: blur(12px);
        letter-spacing: 0.26em;
      }
      .trust-pill {
        border: 1px solid ${BORDER};
        color: ${SAGE};
        background: rgba(255,255,255,0.35);
        backdrop-filter: blur(6px);
      }
      .link-refined { transition: opacity 0.3s ease, color 0.3s ease; }
      .link-refined:hover { opacity: 0.72; }
      .nav-link {
        position: relative;
        transition: color 0.3s ease;
      }
      .nav-link::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 100%;
        height: 1px;
        background: ${goldHairline};
        transform: scaleX(0);
        transition: transform 0.35s ease;
      }
      .nav-link:hover::after { transform: scaleX(1); }
      .email-input {
        border: 1px solid ${BORDER};
        background-color: ${WHITE};
        color: ${FOREST};
        font-size: 0.875rem;
        font-weight: 500;
        box-shadow: 0 1px 4px rgba(15,36,25,0.04), inset 0 1px 2px rgba(15,36,25,0.03);
      }
      .email-input::placeholder {
        color: ${TEXT_SOFT};
        font-weight: 500;
        opacity: 1;
      }
      .email-input:focus {
        border-color: ${GOLD_MID};
        box-shadow: 0 0 0 3px rgba(191,155,74,0.14), 0 2px 8px rgba(15,36,25,0.06);
      }
      .panel-premium {
        position: relative;
        overflow: hidden;
        background: linear-gradient(168deg, ${SURFACE_LIFT} 0%, ${SURFACE_MINT} 100%);
        box-shadow: ${shadowElevated.replace(/"/g, "")};
      }
      .panel-premium::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 1px;
        background: ${goldHairline};
      }
      .panel-premium::after {
        content: "";
        pointer-events: none;
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.85) 0%, transparent 65%);
        opacity: 0.55;
      }
      .quote-canvas {
        position: relative;
        isolation: isolate;
      }
      @media (min-width: 640px) {
        .quote-canvas::before,
        .quote-canvas::after {
          content: "";
          position: absolute;
          top: 20%;
          bottom: 20%;
          width: 1px;
          background: linear-gradient(180deg, transparent, ${GOLD_MID}28 30%, ${GOLD_LIGHT}44 50%, ${GOLD_MID}28 70%, transparent);
        }
        .quote-canvas::before { left: 1.75rem; }
        .quote-canvas::after { right: 1.75rem; }
      }
      .quote-lead {
        font-family: ${displayFont};
        font-feature-settings: "liga" 1, "kern" 1;
        font-weight: 400;
        font-style: italic;
        font-size: clamp(1.0625rem, 1.85vw, 1.3125rem);
        letter-spacing: 0.01em;
        line-height: 1.55;
        color: ${FOREST_MID};
      }
      .quote-punchline {
        font-family: ${displayFont};
        font-feature-settings: "liga" 1, "kern" 1, "onum" 1;
        font-weight: 600;
        font-size: clamp(1.125rem, 2vw, 1.4375rem);
        letter-spacing: -0.018em;
        line-height: 1.45;
        color: ${FOREST};
      }
      .quote-promise {
        letter-spacing: 0.24em;
        text-transform: uppercase;
        font-size: 0.5625rem;
        font-weight: 500;
        color: ${SAGE};
      }
      .footer-link { color: ${FOOTER_LINK}; transition: opacity 0.3s ease; }
      .footer-link:hover { opacity: 0.82; }
      .footer-link:focus-visible {
        outline: 2px solid ${GOLD_MID};
        outline-offset: 3px;
        border-radius: 2px;
      }
    `}</style>
  );
}

function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.018]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
      aria-hidden
    />
  );
}

function CeremonyRule({ className }: { className?: string }) {
  return (
    <div className={className} style={{ height: 1, background: goldHairline }} aria-hidden />
  );
}

function DiamondRule({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className ?? ""}`} aria-hidden>
      <div className="h-px flex-1" style={{ background: goldHairline }} />
      <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
        <path d="M4 0L8 4L4 8L0 4L4 0Z" fill={GOLD_MID} fillOpacity="0.45" />
      </svg>
      <div className="h-px flex-1" style={{ background: goldHairline }} />
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4" style={{ ...labelStyle, color: TEXT_SOFT }}>
      {children}
    </p>
  );
}

function CornerAccents() {
  return (
    <>
      <svg className="pointer-events-none absolute left-3 top-3 h-5 w-5 opacity-35" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M1 7V1h6" stroke={GOLD_MID} strokeWidth="1" strokeLinecap="round" />
      </svg>
      <svg className="pointer-events-none absolute right-3 top-3 h-5 w-5 opacity-35" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M19 7V1h-6" stroke={GOLD_MID} strokeWidth="1" strokeLinecap="round" />
      </svg>
      <svg className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 opacity-35" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M1 13v6h6" stroke={GOLD_MID} strokeWidth="1" strokeLinecap="round" />
      </svg>
      <svg className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 opacity-35" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M19 13v6h-6" stroke={GOLD_MID} strokeWidth="1" strokeLinecap="round" />
      </svg>
    </>
  );
}

function PremiumPanel({
  children,
  className,
  id,
  style,
  luxe,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  luxe?: boolean;
}) {
  return (
    <div
      id={id}
      className={`panel-premium rounded-2xl border ${luxe ? "panel-luxe" : ""} ${className ?? ""}`}
      style={{ borderColor: BORDER_SOFT, ...style }}
    >
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

function MeshBackdrop({ className, idPrefix }: { className?: string; idPrefix?: string }) {
  const autoId = useId().replace(/:/g, "");
  const patternId = `${idPrefix ?? autoId}-meshDots`;

  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden>
      <defs>
        <pattern id={patternId} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.75" fill={GOLD_MID} opacity="0.14" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill={`url(#${patternId})`} />
      <circle cx="200" cy="200" r="160" stroke={GOLD_MID} strokeWidth="0.5" opacity="0.1" />
      <circle cx="200" cy="200" r="120" stroke={SAGE} strokeWidth="0.5" opacity="0.08" />
    </svg>
  );
}

function AmbientBackdrop() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0" style={{ background: heroAmbient }} aria-hidden />
      <MeshBackdrop idPrefix="hero" className="pointer-events-none absolute inset-0 h-full w-full opacity-40" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(191,155,74,0.09) 0%, transparent 58%)` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 55% 40% at 50% 100%, rgba(122,148,136,0.08) 0%, transparent 55%)` }}
        aria-hidden
      />
    </>
  );
}

function WaitlistForm({ inputId }: { inputId: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
    setLoading(true);
    try {
      const result = await joinWaitlist(trimmed);
      if (result.success) {
        setMessage(result.message);
        setSubmitted(true);
      } else {
        setError(result.message);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-xl border px-6 py-6 text-center"
        style={{ borderColor: BORDER_SOFT, backgroundColor: MINT_WHISPER }}
      >
        <div
          className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full"
          style={{ background: goldFoil, boxShadow: "0 3px 12px rgba(150,117,46,0.22)" }}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M5 10l3.5 3.5L15 7" stroke={FOREST} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-lg font-semibold" style={{ ...headingStyle, color: FOREST }}>
          {message}
        </p>
        <p className="mt-2 text-sm font-light leading-relaxed" style={{ color: TEXT_SOFT }}>
          We&apos;ll reach out when GenoMatch launches. Thank you for believing in love with intention.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-stretch" noValidate>
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          className="email-input min-h-12 w-full flex-1 rounded-xl px-4 outline-none transition-all duration-300 sm:min-w-0"
          style={bodyStyle}
        />
        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          className="btn-premium min-h-12 w-full shrink-0 rounded-xl px-6 text-sm font-semibold active:scale-[0.99] sm:w-auto"
          style={{ ...bodyStyle, color: FOREST }}
        >
          {loading ? "Joining…" : "Join the Waitlist"}
        </button>
      </form>
      {error ? (
        <p className="mt-2 text-sm" style={{ color: "#9E5A5A" }} role="alert" aria-live="polite">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function GenoCrest({
  size = 120,
  className,
  idPrefix = "crest",
}: {
  size?: number;
  className?: string;
  idPrefix?: string;
}) {
  const goldId = `${idPrefix}-g`;
  const sageId = `${idPrefix}-s`;

  return (
    <svg className={className} width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden>
      <defs>
        <linearGradient id={goldId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={GOLD_LIGHT} />
          <stop offset="50%" stopColor={GOLD_MID} />
          <stop offset="100%" stopColor={GOLD_DEEP} />
        </linearGradient>
        <linearGradient id={sageId} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={SAGE_LIGHT} />
          <stop offset="100%" stopColor={SAGE} />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="55" stroke={GOLD_MID} strokeWidth="0.375" strokeDasharray="2 8" opacity="0.22" />
      <circle cx="44" cy="60" r="26" stroke={`url(#${goldId})`} strokeWidth="1.25" />
      <circle cx="76" cy="60" r="26" stroke={`url(#${sageId})`} strokeWidth="1.25" />
      <path d="M44 36c10-7 22-7 32 0M44 84c10 7 22 7 32 0" stroke={`url(#${goldId})`} strokeWidth="1" strokeLinecap="round" opacity="0.65" />
      <path d="M60 28v64M48 44c8 6 16 6 24 0M48 76c8-6 16-6 24 0" stroke={SAGE} strokeWidth="0.5" strokeLinecap="round" opacity="0.42" />
      <circle cx="60" cy="60" r="4" fill={`url(#${goldId})`} />
    </svg>
  );
}

function HelixField({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 140" fill="none" aria-hidden>
      <path d="M0 70c40-35 80 35 120 0s80 35 120 0 80 35 80 0" stroke={GOLD_MID} strokeWidth="1" strokeLinecap="round" opacity="0.16" />
      <path d="M0 82c40-28 80 28 120 0s80 28 120 0 80 28 80 0" stroke={SAGE} strokeWidth="0.75" strokeLinecap="round" opacity="0.2" />
      <path d="M0 58c40-28 80 28 120 0s80 28 120 0 80 28 80 0" stroke={GOLD_MID} strokeWidth="0.5" strokeLinecap="round" opacity="0.12" />
    </svg>
  );
}

function QuoteDivider() {
  return (
    <div className="my-5 flex items-center justify-center gap-3" aria-hidden>
      <div className="h-px w-8" style={{ background: goldHairline }} />
      <svg width="5" height="5" viewBox="0 0 8 8" fill="none">
        <path d="M4 0L8 4L4 8L0 4L4 0Z" fill={GOLD_MID} fillOpacity="0.4" />
      </svg>
      <div className="h-px w-8" style={{ background: goldHairline }} />
    </div>
  );
}

function QuoteBlock() {
  return (
    <blockquote
      className="quote-canvas quote-luxe relative mx-auto max-w-xl rounded-2xl border px-7 py-9 text-center sm:rounded-3xl sm:px-10 sm:py-11"
      style={{
        borderColor: BORDER_SOFT,
        background: `linear-gradient(168deg, ${SURFACE_LIFT} 0%, ${SURFACE_MINT} 100%)`,
        boxShadow: shadowQuote,
      }}
    >
      <CornerAccents />
      <DiamondRule className="mb-7 opacity-75" />
      <p className="quote-lead mx-auto max-w-md">
        Every major dating app optimises for attraction.
      </p>
      <QuoteDivider />
      <p className="quote-punchline mx-auto max-w-md">
        <span className="gold-accent">GenoMatch optimises for outcomes.</span>
      </p>
      <p className="quote-promise mt-6">The GenoMatch Promise</p>
    </blockquote>
  );
}

export default function Home() {
  const trustBadges = ["Science-backed matching", "Private & secure", "Built for Africa & diaspora"];

  const stats = [
    { stat: "1 in 4", label: "AS couples risk having an SS child" },
    { stat: "300,000", label: "Sickle cell births annually" },
    { stat: "Too late", label: "When most couples find out" },
  ];

  const steps = [
    { step: "01", title: "Enter your genotype", body: "Share your sickle cell status securely. Your data stays private and in your control." },
    { step: "02", title: "Discover compatible matches", body: "Meet people aligned with your values and genetic compatibility—before feelings run deep." },
    { step: "03", title: "Connect with confidence", body: "Start conversations knowing you've addressed what matters for your future family." },
  ];

  return (
    <div className="min-h-screen antialiased" style={{ ...bodyStyle, backgroundColor: SURFACE, color: TEXT }}>
      <PageStyles />
      <Grain />

      <header
        className="nav-glass sticky top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150"
        style={{ borderColor: `${GOLD_MID}18` }}
      >
        <CeremonyRule className="absolute left-0 right-0 top-0 opacity-60" />
        <CeremonyRule className="absolute bottom-0 left-0 right-0 opacity-50" />
        <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[4.5rem] lg:px-8">
          <a href="/" className="link-refined flex items-center gap-3">
            <GenoCrest size={36} idPrefix="nav" className="shrink-0 opacity-90" />
            <span className="text-2xl font-bold tracking-tight lg:text-[1.75rem]" style={{ ...displayStyle, fontWeight: 700 }}>
              <span className="gold-accent">GenoMatch</span>
            </span>
          </a>
          <div className="flex items-center gap-7">
            <a href="#how-it-works" className="nav-link text-sm" style={{ color: TEXT_SOFT }}>
              How it works
            </a>
            <a href="#waitlist" className="btn-premium rounded-full px-5 py-2.5 text-sm font-semibold" style={{ color: FOREST }}>
              Join Waitlist
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          className="relative flex min-h-[88vh] w-full flex-col justify-center overflow-hidden px-6 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20"
          style={{ backgroundColor: IVORY }}
        >
          <AmbientBackdrop />
          <GenoCrest
            size={200}
            idPrefix="hero-bg-l"
            className="drift pointer-events-none absolute -left-16 top-20 opacity-[0.12] lg:-left-8 lg:opacity-[0.16]"
          />
          <div
            className="pointer-events-none absolute -right-12 bottom-16 rotate-12 opacity-[0.1] lg:right-4"
            style={{ animation: "drift 10s ease-in-out infinite reverse" }}
          >
            <GenoCrest size={180} idPrefix="hero-bg-r" />
          </div>
          <HelixField className="pointer-events-none absolute left-1/2 top-10 w-72 -translate-x-1/2 opacity-35 lg:w-96" />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
            style={{ background: `linear-gradient(180deg, transparent, ${IVORY}88)` }}
            aria-hidden
          />

          <div className="relative mx-auto w-full max-w-4xl text-center">
            <div className="rise mb-7 flex justify-center">
              <div className="relative">
                <div
                  className="absolute inset-0 -m-6 rounded-full"
                  style={{ background: `radial-gradient(circle, rgba(191,155,74,0.16) 0%, transparent 68%)` }}
                  aria-hidden
                />
                <GenoCrest size={80} idPrefix="hero" className="relative opacity-95" />
              </div>
            </div>
            <p className="rise rise-1 eyebrow-pill mb-6 inline-block rounded-full px-5 py-2 text-[0.6875rem] font-medium uppercase">
              Genotype-aware dating
            </p>
            <h1
              className="rise rise-2 font-bold leading-[1.04]"
              style={{
                ...displayStyle,
                fontWeight: 700,
                color: FOREST,
                fontSize: "clamp(2.75rem, 5.8vw, 4.35rem)",
              }}
            >
              The World&apos;s First{" "}
              <span className="gold-accent">Genotype-Aware</span> Dating App
            </h1>
            <p
              className="rise rise-3 mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed sm:text-xl"
              style={{ color: SAGE }}
            >
              Find love without leaving your family&apos;s future to chance.
              Built for anyone who values informed love.
            </p>

            <div className="rise rise-3 mt-8 flex flex-wrap items-center justify-center gap-3">
              {trustBadges.map((badge) => (
                <span key={badge} className="trust-pill rounded-full px-4 py-1.5 text-xs font-medium tracking-wide">
                  {badge}
                </span>
              ))}
            </div>

            <PremiumPanel
              id="waitlist"
              luxe
              className="rise rise-3 mx-auto mt-12 max-w-xl p-6 sm:p-8"
              style={{ scrollMarginTop: "6rem" }}
            >
              <CornerAccents />
              <DiamondRule className="mb-6" />
              <SectionLabel>Early access</SectionLabel>
              <WaitlistForm inputId="waitlist-email-hero" />
              <p className="mt-4 text-xs font-light tracking-wide" style={{ color: TEXT_SOFT }}>
                No spam · Private by design
              </p>
            </PremiumPanel>
            <p className="rise rise-3 mt-4 text-sm leading-relaxed" style={{ color: TEXT_SOFT }}>
              Be among the first to experience GenoMatch when we launch.
            </p>
          </div>

          <DiamondRule className="relative mx-auto mt-14 max-w-md" />
        </section>

        <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32" style={{ background: statsAmbient }}>
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-20"
            style={{ background: `linear-gradient(180deg, ${IVORY}, transparent)` }}
            aria-hidden
          />
          <HelixField className="pointer-events-none absolute -right-8 top-12 w-48 opacity-25" />
          <div className="relative mx-auto max-w-6xl">
            <DiamondRule className="mb-10 max-w-xs" />
            <SectionLabel>The facts</SectionLabel>
            <h2
              className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
              style={{ ...headingStyle, color: FOREST }}
            >
              The conversation that changes everything.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: TEXT_SOFT }}>
              The facts that inspired us to build GenoMatch.
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-3 lg:mt-20 lg:gap-8">
              {stats.map(({ stat, label }, index) => (
                <article
                  key={stat}
                  className={`card-lift group relative overflow-hidden rounded-2xl border border-l-4 p-8 sm:rounded-3xl ${
                    index === 1 ? "stat-featured sm:-translate-y-1" : ""
                  }`}
                  style={{
                    borderColor: BORDER_SOFT,
                    borderLeftColor: GOLD_MID,
                    background: `linear-gradient(162deg, ${SURFACE_LIFT} 0%, ${SURFACE_MINT} 100%)`,
                    boxShadow: index === 1 ? shadowLuxe : shadowElevated,
                  }}
                >
                  <CornerAccents />
                  <div
                    className="absolute bottom-0 left-0 top-0 w-[3px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: goldFoil }}
                    aria-hidden
                  />
                  <p className="stat-number relative text-3xl font-bold lg:text-4xl" style={{ ...displayStyle }}>
                    {stat}
                  </p>
                  <CeremonyRule className="relative my-4 max-w-12 opacity-70" />
                  <p className="relative text-base font-medium leading-relaxed lg:text-lg" style={{ color: FOREST_MID }}>
                    {label}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-10 text-xs font-light leading-relaxed" style={{ color: TEXT_SOFT }}>
              Sources: WHO African Region sickle cell data; NIH sickle cell disease statistics.
            </p>
          </div>
        </section>

        <section
          id="how-it-works"
          className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32"
          style={{ backgroundColor: PEARL }}
        >
          <MeshBackdrop idPrefix="how" className="pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-20" />
          <div className="relative mx-auto max-w-6xl">
            <div className="text-center">
              <DiamondRule className="mx-auto mb-8 max-w-xs" />
              <SectionLabel>The process</SectionLabel>
              <h2 className="text-3xl font-bold sm:text-4xl" style={{ ...headingStyle, color: FOREST }}>
                How it works
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed" style={{ color: TEXT_SOFT }}>
                Three simple steps to match with clarity, compassion, and confidence.
              </p>
            </div>

            <div className="relative mt-14 lg:mt-20">
              <div
                className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-7 hidden h-px sm:block"
                style={{ background: `linear-gradient(90deg, transparent, ${GOLD_MID}55, ${GOLD_MID}, ${GOLD_MID}55, transparent)` }}
                aria-hidden
              />
              <ol className="grid gap-10 sm:grid-cols-3 lg:gap-12">
                {steps.map(({ step, title, body }) => (
                  <li
                    key={step}
                    className="card-lift group relative flex flex-col items-center rounded-2xl border p-8 text-center sm:rounded-3xl"
                    style={{
                      borderColor: BORDER_SOFT,
                      background: `linear-gradient(165deg, ${SURFACE_LIFT} 0%, ${MINT_WHISPER} 100%)`,
                      boxShadow: shadowSoft,
                    }}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-px opacity-40"
                      style={{ background: goldHairline }}
                      aria-hidden
                    />
                    <div
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold"
                      style={{
                        background: goldFoil,
                        color: FOREST,
                        boxShadow: `0 0 0 4px ${IVORY}, 0 3px 14px rgba(150,117,46,0.2)`,
                      }}
                    >
                      {step}
                    </div>
                    <h3 className="mt-5 text-xl font-bold" style={{ ...headingStyle, color: FOREST }}>
                      {title}
                    </h3>
                    <CeremonyRule className="my-4 w-10 opacity-50" />
                    <p className="max-w-xs text-sm leading-relaxed" style={{ color: TEXT_SOFT }}>
                      {body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ Section - AEO */}
        <section style={{ background: "#F5EFE6", padding: "80px 24px" }}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is GenoMatch?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "GenoMatch is the world's first genotype-aware dating app built for West Africa and the African diaspora. It matches singles based on genotype compatibility (AA, AS, SS, AC) alongside personality and interest compatibility, helping couples make informed decisions about their future family health.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How does genotype matching work on GenoMatch?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Users declare their genotype (AA, AS, SS, or AC) during registration. GenoMatch calculates a compatibility score based on the genetic risk of sickle cell disease in potential children. For example, two AS carriers have a 1 in 4 chance of having an SS child, so GenoMatch factors this into match rankings to help couples have this important conversation early.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is GenoMatch available in Nigeria?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. GenoMatch is primarily built for Nigeria and is expanding across West Africa and the African diaspora in the UK, US, and Canada. The app is currently available on iOS and Android.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What genotypes does GenoMatch support?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "GenoMatch supports all major genotypes including AA (Double Healthy), AS (Carrier), SS (Sickle Cell), and AC (AC Carrier). The app calculates compatibility scores between all genotype combinations and shows the sickle cell risk level for each pairing.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is my genotype data safe on GenoMatch?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. GenoMatch treats genotype information as sensitive health data. It is encrypted, never sold to third parties, and used solely for compatibility matching within the app. GenoMatch is compliant with Nigeria's NDPA 2023 data protection law.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What makes GenoMatch different from other dating apps?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "GenoMatch is the only dating app in the world that incorporates genotype compatibility into its matching algorithm. While other apps like Tinder, Bumble, and Hinge match on attraction and interests alone, GenoMatch adds a genetic compatibility layer that is especially important in West Africa where sickle cell disease affects millions of families.",
                    },
                  },
                ],
              }),
            }}
          />
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <p
              style={{
                color: "#D4A843",
                fontSize: "11px",
                letterSpacing: "3px",
                textAlign: "center",
                marginBottom: "12px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "#163522",
                textAlign: "center",
                marginBottom: "48px",
              }}
            >
              Everything you need to know
            </h2>
            {[
              {
                q: "What is GenoMatch?",
                a: "GenoMatch is the world's first genotype-aware dating app built for West Africa and the African diaspora. It matches singles based on genotype compatibility (AA, AS, SS, AC) alongside personality and interests.",
              },
              {
                q: "How does genotype matching work?",
                a: "You declare your genotype during registration. GenoMatch calculates a compatibility score based on the genetic risk for each pairing. Two AS carriers have a 1 in 4 chance of an SS child — GenoMatch ensures you know this before feelings run deep.",
              },
              {
                q: "Is GenoMatch available in Nigeria?",
                a: "Yes. GenoMatch is built primarily for Nigeria and is expanding across West Africa and the African diaspora in the UK, US, and Canada.",
              },
              {
                q: "Is my genotype data safe?",
                a: "Absolutely. Your genotype is treated as sensitive health data — encrypted, never sold, and used only for compatibility matching. GenoMatch is compliant with Nigeria's NDPA 2023 data protection law.",
              },
              {
                q: "What makes GenoMatch different from Tinder or Bumble?",
                a: "GenoMatch is the only dating app in the world that incorporates genetic compatibility into matching. Other apps optimise for attraction. GenoMatch optimises for outcomes — helping you build a love story that protects your future family.",
              },
            ].map((item, i) => (
              <details
                key={i}
                style={{
                  borderBottom: "1px solid rgba(22,53,34,0.1)",
                  padding: "20px 0",
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#163522",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {item.q}
                  <span style={{ color: "#D4A843", fontSize: "24px", fontWeight: 300 }}>+</span>
                </summary>
                <p
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "16px",
                    color: "#7A9488",
                    lineHeight: 1.7,
                    marginTop: "12px",
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-24"
          style={{ background: forestDepth }}
        >
          <MeshBackdrop idPrefix="quote" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(ellipse 60% 48% at 50% 38%, rgba(212,188,130,0.06) 0%, transparent 58%)` }}
            aria-hidden
          />
          <GenoCrest
            size={180}
            idPrefix="quote-l"
            className="pointer-events-none absolute -left-16 top-1/2 hidden -translate-y-1/2 opacity-[0.12] sm:block"
          />
          <GenoCrest
            size={180}
            idPrefix="quote-r"
            className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 opacity-[0.12] sm:block"
          />
          <QuoteBlock />
        </section>

        <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28" style={{ backgroundColor: LINEN }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(ellipse 55% 45% at 50% 50%, rgba(191,155,74,0.04) 0%, transparent 65%)` }}
            aria-hidden
          />
          <HelixField className="pointer-events-none absolute bottom-4 left-1/2 w-56 -translate-x-1/2 opacity-25" />
          <div className="relative mx-auto max-w-xl text-center">
            <GenoCrest size={48} idPrefix="cta" className="mx-auto mb-5 opacity-85" />
            <SectionLabel>Join us</SectionLabel>
            <h2 className="text-2xl font-bold sm:text-3xl" style={{ ...headingStyle, color: FOREST }}>
              Ready when you are.
            </h2>
            <p className="mt-2 leading-relaxed" style={{ color: TEXT_SOFT }}>
              Join the waitlist and be first in line for launch.
            </p>
            <PremiumPanel luxe className="mt-10 p-6 sm:p-7">
              <CornerAccents />
              <WaitlistForm inputId="waitlist-email-cta" />
            </PremiumPanel>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t px-6 py-12 lg:px-8 lg:py-16" style={{ background: forestFooter, borderColor: `${GOLD_MID}22` }}>
        <MeshBackdrop idPrefix="footer" className="pointer-events-none absolute inset-0 h-full w-full opacity-15" />
        <CeremonyRule className="relative mx-auto mb-8 max-w-lg opacity-60" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:gap-4">
          <div className="flex items-center gap-3">
            <GenoCrest size={32} idPrefix="footer" className="opacity-85" />
            <p className="text-lg font-bold tracking-tight" style={{ ...displayStyle, fontWeight: 700 }}>
              <span className="gold-accent">GenoMatch</span>
            </p>
          </div>
          <p className="gold-accent text-sm font-medium tracking-[0.16em]">
            Connecting Hearts. Aligning Genes.
          </p>
          <DiamondRule className="max-w-[12rem] opacity-50" />
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm leading-relaxed">
            <a href="mailto:hello@genomatch.app" className="footer-link">
              hello@genomatch.app
            </a>
            <span className="hidden opacity-50 sm:inline" aria-hidden>·</span>
            <a href="https://genomatch.app" className="footer-link">
              genomatch.app
            </a>
            <span className="hidden opacity-50 sm:inline" aria-hidden>·</span>
            <a href="https://www.instagram.com/genomatch1" target="_blank" rel="noopener noreferrer" className="footer-link">
              Instagram
            </a>
          </div>
          <p className="text-xs font-light tracking-wide" style={{ color: FOOTER_MUTED }}>
            © 2026 GenoMatch Ltd · RC No. 9236521 · Nigeria
          </p>
        </div>
      </footer>
    </div>
  );
}
