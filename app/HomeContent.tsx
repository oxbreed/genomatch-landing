"use client";

import { CSSProperties, FormEvent, ReactNode, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { joinWaitlist } from "./actions";
import BrandMark from "./components/BrandMark";
import SickleCellMark from "./components/SickleCellMark";
import SickleCellRibbon from "./components/SickleCellRibbon";
import { FAQ_ITEMS, getFaqJsonLd } from "@/lib/faq";
import { SCD_STATS, SOURCE_SETS, getSources } from "@/lib/scd-facts";
import {
  BRAND_BLACK,
  CREAM,
  LOGO_GOLD,
  LOGO_GOLD_BRIGHT,
  LOGO_GOLD_DEEP,
  LOGO_RED,
  LOGO_RED_BRIGHT,
  METALLIC_CHROME,
  METALLIC_STEEL,
  WHITE,
} from "./theme";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BORDER = METALLIC_CHROME;
const BORDER_SOFT = METALLIC_CHROME;
const SURFACE = WHITE;
const SURFACE_LIFT = WHITE;
const TEXT = BRAND_BLACK;
const TEXT_SOFT = METALLIC_STEEL;

const goldFoil = `linear-gradient(135deg, ${LOGO_GOLD_BRIGHT} 0%, ${LOGO_GOLD} 28%, ${LOGO_GOLD} 52%, ${LOGO_GOLD_DEEP} 78%, ${LOGO_GOLD} 100%)`;
const goldHairline = `linear-gradient(90deg, transparent, ${LOGO_GOLD}28 22%, ${LOGO_GOLD}66 50%, ${LOGO_GOLD}28 78%, transparent)`;
const heroAmbient = `radial-gradient(ellipse 90% 70% at 50% -10%, rgba(212,175,55,0.16) 0%, transparent 52%), radial-gradient(ellipse 55% 45% at 100% 80%, rgba(200,16,46,0.07) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 0% 60%, rgba(232,22,58,0.06) 0%, transparent 50%), #FAF8F5`;
const statsAmbient = `linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 48%, #FFFFFF 100%)`;
const creamWash = CREAM;
const creamFooter = CREAM;

const FOOTER_LINK = LOGO_RED;
const FOOTER_MUTED = METALLIC_STEEL;

const shadowSoft =
  "0 1px 2px rgba(163,12,36,0.03), 0 8px 24px rgba(163,12,36,0.05), 0 20px 48px rgba(212,175,55,0.04)";
const shadowDeep =
  "0 2px 8px rgba(163,12,36,0.04), 0 18px 44px rgba(163,12,36,0.07), 0 40px 80px rgba(212,175,55,0.05)";
const shadowElevated =
  "0 2px 12px rgba(163,12,36,0.05), 0 24px 56px rgba(163,12,36,0.07), 0 0 0 1px rgba(255,255,255,0.9) inset, 0 1px 0 rgba(255,255,255,0.95) inset";
const shadowLuxe =
  "0 4px 20px rgba(163,12,36,0.06), 0 28px 64px rgba(163,12,36,0.08), 0 0 0 1px rgba(255,255,255,0.94) inset, 0 1px 0 rgba(255,255,255,0.98) inset";
const shadowQuote =
  "0 24px 64px rgba(163,12,36,0.08), 0 8px 24px rgba(212,175,55,0.08), inset 0 1px 0 rgba(255,255,255,0.98), inset 0 -1px 0 rgba(200,16,46,0.04)";

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
      .reveal {
        opacity: 1;
        transform: none;
        transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .reveal.reveal-pending {
        opacity: 0;
        transform: translateY(20px);
      }
      .reveal.reveal-in {
        opacity: 1;
        transform: none;
      }
      @media (prefers-reduced-motion: reduce) {
        .rise, .rise-1, .rise-2, .rise-3 { animation: none; opacity: 1; transform: none; }
        .reveal { opacity: 1; transform: none; transition: none; }
        .drift { animation: none; }
        .glass-orb { animation: none; }
        .btn-premium::before { animation: none; opacity: 0.35; }
        .btn-premium:hover { transform: none; }
        .nav-glass::before { animation: none; opacity: 0.45; }
        .nav-glass { animation: none; }
        .gm-wordmark-text { animation: none; }
        .headline-gloss { animation: none; }
        .gold-accent { animation: none; }
        .card-lift:hover { transform: none; }
        .faq-answer { animation: none; }
        .faq-icon { transition: none; }
        .mobile-menu { animation: none; }
      }
      .gold-accent {
        color: ${LOGO_GOLD_DEEP};
        background: linear-gradient(
          135deg,
          ${LOGO_GOLD_BRIGHT} 0%,
          ${LOGO_GOLD} 28%,
          ${LOGO_GOLD} 52%,
          ${LOGO_GOLD_DEEP} 78%,
          ${LOGO_GOLD} 100%
        );
        background-size: 180% 180%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 1px 0 rgba(255,255,255,0.35));
        animation: goldSheen 10s ease-in-out infinite;
      }
      @supports not ((-webkit-background-clip: text) or (background-clip: text)) {
        .gold-accent {
          color: ${LOGO_GOLD_DEEP};
          -webkit-text-fill-color: ${LOGO_GOLD_DEEP};
          background: none;
          filter: none;
        }
      }
      .headline-gloss {
        color: ${LOGO_RED};
        background: linear-gradient(
          145deg,
          #e8163a 0%,
          #c8102e 28%,
          #a30c24 55%,
          #c8102e 78%,
          #e8163a 100%
        );
        background-size: 180% 180%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 1px 0 rgba(255,255,255,0.28));
        animation: headlineSheen 12s ease-in-out infinite;
      }
      @supports not ((-webkit-background-clip: text) or (background-clip: text)) {
        .headline-gloss {
          color: ${LOGO_RED};
          -webkit-text-fill-color: ${LOGO_RED};
          background: none;
          filter: none;
        }
      }
      .gm-wordmark-text {
        color: ${LOGO_RED};
        background: linear-gradient(
          125deg,
          #e8163a 0%,
          #c8102e 32%,
          #a30c24 52%,
          #c8102e 72%,
          #c8102e 100%
        );
        background-size: 200% 200%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 1px 0 rgba(255,255,255,0.3));
        animation: logoRedSheen 9s ease-in-out infinite;
      }
      @supports not ((-webkit-background-clip: text) or (background-clip: text)) {
        .gm-wordmark-text {
          color: ${LOGO_RED};
          -webkit-text-fill-color: ${LOGO_RED};
          background: none;
          filter: none;
        }
      }
      @keyframes logoRedSheen {
        0%, 100% { background-position: 0% 45%; }
        50% { background-position: 100% 55%; }
      }
      @keyframes headlineSheen {
        0%, 100% { background-position: 0% 40%; }
        50% { background-position: 100% 60%; }
      }
      @keyframes goldSheen {
        0%, 100% { background-position: 0% 45%; }
        50% { background-position: 100% 55%; }
      }
      @keyframes glassShimmer {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
      @keyframes orbFloat {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(2%, -3%) scale(1.04); }
      }
      .nav-glass {
        position: relative;
        background: linear-gradient(
          155deg,
          #e8163a 0%,
          #c8102e 28%,
          #a30c24 52%,
          #c8102e 78%,
          #e8163a 100%
        );
        background-size: 180% 180%;
        -webkit-backdrop-filter: blur(24px) saturate(200%);
        backdrop-filter: blur(24px) saturate(200%);
        border-bottom: 1px solid rgba(255,255,255,0.45);
        box-shadow:
          0 1px 0 rgba(255,255,255,0.7) inset,
          0 2px 0 rgba(255,255,255,0.22) inset,
          0 -1px 0 rgba(11,12,14,0.35) inset,
          0 12px 40px rgba(163,12,36,0.22);
        overflow: hidden;
        animation: mirrorRedShift 10s ease-in-out infinite;
      }
      .nav-glass::before {
        content: "";
        pointer-events: none;
        position: absolute;
        inset: 0;
        background: linear-gradient(
          105deg,
          transparent 0%,
          transparent 28%,
          rgba(255,255,255,0.55) 45%,
          rgba(255,255,255,0.15) 52%,
          transparent 62%,
          transparent 100%
        );
        background-size: 240% 100%;
        opacity: 0.75;
        animation: glassShimmer 5.5s ease-in-out infinite;
      }
      .nav-glass::after {
        content: "";
        pointer-events: none;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 48%;
        background: linear-gradient(
          180deg,
          rgba(255,255,255,0.42) 0%,
          rgba(255,255,255,0.08) 55%,
          transparent 100%
        );
      }
      .nav-glass > * { position: relative; z-index: 1; }
      @keyframes mirrorRedShift {
        0%, 100% { background-position: 0% 40%; }
        50% { background-position: 100% 60%; }
      }
      .nav-glass .nav-link {
        color: rgba(250,248,245,0.95) !important;
        text-shadow: 0 1px 1px rgba(11,12,14,0.25);
      }
      .nav-glass .nav-link:hover {
        color: #fff !important;
      }
      .nav-glass .gm-wordmark-text {
        color: #faf8f5;
        background: linear-gradient(
          125deg,
          #ffffff 0%,
          #d4d8e0 22%,
          #faf8f5 48%,
          #ffffff 72%,
          #b8bcc4 100%
        );
        background-size: 220% 220%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        filter:
          drop-shadow(0 1px 0 rgba(255,255,255,0.35))
          drop-shadow(0 1px 2px rgba(11,12,14,0.3));
        animation: headlineSheen 8s ease-in-out infinite;
      }
      .nav-glass .menu-toggle {
        border-color: rgba(255,255,255,0.5);
        background: linear-gradient(145deg, rgba(255,255,255,0.35), rgba(255,255,255,0.08));
        box-shadow:
          0 1px 0 rgba(255,255,255,0.45) inset,
          0 2px 8px rgba(11,12,14,0.15);
      }
      .nav-glass .menu-toggle svg path {
        stroke: #faf8f5;
      }
      .panel-luxe {
        border-radius: 1.35rem;
        border-color: rgba(255,255,255,0.72) !important;
      }
      @media (min-width: 640px) {
        .panel-luxe { border-radius: 1.65rem; }
      }
      .quote-luxe {
        box-shadow: ${shadowQuote.replace(/"/g, "")};
        background: linear-gradient(
          165deg,
          rgba(255,255,255,0.88) 0%,
          rgba(255,248,246,0.72) 50%,
          rgba(255,255,255,0.78) 100%
        ) !important;
        -webkit-backdrop-filter: blur(24px) saturate(160%);
        backdrop-filter: blur(24px) saturate(160%);
        border-color: rgba(255,255,255,0.75) !important;
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
        opacity: 0.9;
      }
      .btn-premium {
        position: relative;
        overflow: hidden;
        background: linear-gradient(
          155deg,
          rgba(255,255,255,0.55) 0%,
          rgba(240,230,208,0.65) 16%,
          ${LOGO_GOLD} 34%,
          ${LOGO_GOLD} 55%,
          ${LOGO_GOLD_DEEP} 82%,
          rgba(255,255,255,0.28) 100%
        );
        background-size: 160% 160%;
        border: 1px solid rgba(255,255,255,0.55);
        box-shadow:
          0 1px 0 rgba(255,255,255,0.7) inset,
          0 -1px 0 rgba(163,12,36,0.1) inset,
          0 4px 18px rgba(161,117,56,0.26),
          0 14px 36px rgba(200,16,46,0.07);
        transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease, background-position 0.7s ease;
      }
      .btn-premium::before {
        content: "";
        pointer-events: none;
        position: absolute;
        inset: 0;
        background: linear-gradient(
          115deg,
          transparent 28%,
          rgba(255,255,255,0.55) 48%,
          transparent 64%
        );
        background-size: 240% 100%;
        opacity: 0.5;
        animation: glassShimmer 7s ease-in-out infinite;
      }
      .btn-premium:hover {
        transform: translateY(-1px);
        background-position: 100% 40%;
        box-shadow:
          0 1px 0 rgba(255,255,255,0.8) inset,
          0 -1px 0 rgba(163,12,36,0.08) inset,
          0 8px 26px rgba(161,117,56,0.3),
          0 18px 44px rgba(200,16,46,0.09);
      }
      .btn-premium:disabled {
        opacity: 0.72;
        cursor: not-allowed;
        transform: none;
      }
      .btn-premium > * { position: relative; z-index: 1; }
      .card-lift {
        transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease, border-color 0.5s ease, background 0.5s ease;
      }
      .card-lift:hover {
        transform: translateY(-3px);
        box-shadow: ${shadowDeep.replace(/"/g, "")};
      }
      .glass-card {
        background: linear-gradient(
          165deg,
          rgba(255,255,255,0.82) 0%,
          rgba(255,255,255,0.48) 48%,
          rgba(255,248,246,0.55) 100%
        );
        -webkit-backdrop-filter: blur(26px) saturate(170%);
        backdrop-filter: blur(26px) saturate(170%);
        border: 1px solid rgba(255,255,255,0.72);
        box-shadow:
          0 1px 0 rgba(255,255,255,0.9) inset,
          0 -1px 0 rgba(200,16,46,0.04) inset,
          0 14px 44px rgba(163,12,36,0.06),
          0 0 0 1px rgba(212,175,55,0.08);
      }
      .glass-card:hover {
        border-color: rgba(212,175,55,0.32);
        box-shadow:
          0 1px 0 rgba(255,255,255,0.95) inset,
          0 20px 52px rgba(163,12,36,0.08),
          0 0 0 1px rgba(212,175,55,0.14);
      }
      .stat-number {
        color: ${LOGO_GOLD_DEEP};
        background: ${goldFoil};
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      @supports not ((-webkit-background-clip: text) or (background-clip: text)) {
        .stat-number {
          color: ${LOGO_GOLD_DEEP};
          -webkit-text-fill-color: ${LOGO_GOLD_DEEP};
          background: none;
        }
      }
      .eyebrow-pill {
        border: 1px solid rgba(212,175,55,0.26);
        color: ${LOGO_RED};
        background: linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,248,246,0.7));
        -webkit-backdrop-filter: blur(18px) saturate(170%);
        backdrop-filter: blur(18px) saturate(170%);
        box-shadow:
          0 1px 0 rgba(255,255,255,0.95) inset,
          0 4px 18px rgba(163,12,36,0.05),
          0 0 0 1px rgba(212,175,55,0.06);
        letter-spacing: 0.26em;
      }
      .trust-pill {
        border: 1px solid rgba(212,175,55,0.18);
        color: ${TEXT_SOFT};
        background: linear-gradient(160deg, rgba(255,255,255,0.88), rgba(255,255,255,0.55));
        -webkit-backdrop-filter: blur(14px) saturate(160%);
        backdrop-filter: blur(14px) saturate(160%);
        box-shadow:
          0 1px 0 rgba(255,255,255,0.9) inset,
          0 3px 12px rgba(163,12,36,0.04);
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
        border: 1px solid rgba(212,175,55,0.26);
        background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,248,246,0.82));
        -webkit-backdrop-filter: blur(14px) saturate(150%);
        backdrop-filter: blur(14px) saturate(150%);
        color: ${LOGO_RED};
        font-size: 0.875rem;
        font-weight: 500;
        box-shadow:
          0 1px 0 rgba(255,255,255,0.95) inset,
          0 2px 10px rgba(163,12,36,0.04),
          0 0 0 1px rgba(212,175,55,0.04);
      }
      .email-input::placeholder {
        color: ${TEXT_SOFT};
        font-weight: 500;
        opacity: 1;
      }
      .email-input:focus {
        border-color: rgba(212,175,55,0.55);
        box-shadow:
          0 0 0 3px rgba(212,175,55,0.16),
          0 1px 0 rgba(255,255,255,0.85) inset,
          0 4px 14px rgba(163,12,36,0.06);
      }
      .panel-premium {
        position: relative;
        overflow: hidden;
        background: linear-gradient(
          168deg,
          rgba(255,255,255,0.88) 0%,
          rgba(255,255,255,0.52) 45%,
          rgba(255,248,246,0.62) 100%
        );
        -webkit-backdrop-filter: blur(32px) saturate(180%);
        backdrop-filter: blur(32px) saturate(180%);
        border: 1px solid rgba(255,255,255,0.78);
        box-shadow:
          0 1px 0 rgba(255,255,255,0.95) inset,
          0 -1px 0 rgba(200,16,46,0.04) inset,
          0 22px 60px rgba(163,12,36,0.07),
          0 2px 10px rgba(212,175,55,0.08),
          0 0 0 1px rgba(212,175,55,0.08);
      }
      .panel-premium::before {
        content: "";
        position: absolute;
        left: 6%;
        right: 6%;
        top: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.98), rgba(232,197,90,0.55), rgba(255,255,255,0.98), transparent);
        z-index: 2;
      }
      .panel-premium::after {
        content: "";
        pointer-events: none;
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 95% 50% at 50% -8%, rgba(255,255,255,0.85) 0%, transparent 55%),
          radial-gradient(ellipse 45% 35% at 92% 8%, rgba(212,175,55,0.14) 0%, transparent 60%),
          linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.22) 50%, transparent 65%);
        background-size: auto, auto, 220% 100%;
        opacity: 0.95;
        animation: glassShimmer 9s ease-in-out infinite;
      }
      .glass-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(52px);
        pointer-events: none;
        animation: orbFloat 16s ease-in-out infinite;
      }
      .phone-glass {
        border-radius: 1.85rem;
        border: 1px solid rgba(255,255,255,0.7);
        box-shadow:
          0 1px 0 rgba(255,255,255,0.8) inset,
          0 28px 68px rgba(163,12,36,0.12),
          0 0 0 1px rgba(212,175,55,0.2);
        background: linear-gradient(160deg, rgba(255,255,255,0.5), rgba(255,255,255,0.12));
        -webkit-backdrop-filter: blur(12px) saturate(150%);
        backdrop-filter: blur(12px) saturate(150%);
        padding: 7px;
      }
      .phone-glass img {
        border-radius: 1.5rem;
        display: block;
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
          background: linear-gradient(180deg, transparent, ${LOGO_GOLD}28 30%, ${LOGO_GOLD_BRIGHT}44 50%, ${LOGO_GOLD}28 70%, transparent);
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
        color: ${LOGO_RED};
      }
      .quote-punchline {
        font-family: ${displayFont};
        font-feature-settings: "liga" 1, "kern" 1, "onum" 1;
        font-weight: 600;
        font-size: clamp(1.125rem, 2vw, 1.4375rem);
        letter-spacing: -0.018em;
        line-height: 1.45;
        color: ${LOGO_RED};
      }
      .quote-promise {
        letter-spacing: 0.24em;
        text-transform: uppercase;
        font-size: 0.5625rem;
        font-weight: 500;
        color: ${FOOTER_MUTED};
      }
      .footer-link { color: ${FOOTER_LINK}; transition: opacity 0.3s ease; }
      .footer-link:hover { opacity: 0.82; }
      .footer-link:focus-visible {
        outline: 2px solid ${LOGO_GOLD};
        outline-offset: 3px;
        border-radius: 2px;
      }
      .faq-item {
        border-bottom: 1px solid rgba(212,175,55,0.22);
      }
      .faq-summary {
        cursor: pointer;
        list-style: none;
        color: ${LOGO_RED};
        transition: color 0.3s ease;
      }
      .faq-summary::-webkit-details-marker { display: none; }
      .faq-summary:hover { color: ${LOGO_RED_BRIGHT}; }
      .faq-summary:focus-visible {
        outline: 2px solid ${LOGO_GOLD};
        outline-offset: 4px;
        border-radius: 4px;
      }
      .faq-icon {
        transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
      }
      details[open] .faq-icon { transform: rotate(45deg); }
      @keyframes faqReveal {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .faq-answer { animation: faqReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) both; }
      .menu-toggle {
        border: 1px solid rgba(255,255,255,0.55);
        background: linear-gradient(145deg, rgba(255,255,255,0.65), rgba(255,255,255,0.28));
        -webkit-backdrop-filter: blur(14px) saturate(160%);
        backdrop-filter: blur(14px) saturate(160%);
        box-shadow: 0 1px 0 rgba(255,255,255,0.7) inset, 0 4px 14px rgba(163,12,36,0.05);
        cursor: pointer;
        transition: background 0.3s ease, box-shadow 0.3s ease;
      }
      .menu-toggle:active { background: rgba(255,255,255,0.85); }
      .menu-toggle:focus-visible {
        outline: 2px solid ${LOGO_GOLD};
        outline-offset: 2px;
      }
      @keyframes menuReveal {
        from { opacity: 0; transform: translateY(-6px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .mobile-menu {
        animation: menuReveal 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
        box-shadow: 0 24px 48px rgba(163,12,36,0.08);
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
        <path d="M4 0L8 4L4 8L0 4L4 0Z" fill={LOGO_GOLD} fillOpacity="0.45" />
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
        <path d="M1 7V1h6" stroke={LOGO_GOLD} strokeWidth="1" strokeLinecap="round" />
      </svg>
      <svg className="pointer-events-none absolute right-3 top-3 h-5 w-5 opacity-35" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M19 7V1h-6" stroke={LOGO_GOLD} strokeWidth="1" strokeLinecap="round" />
      </svg>
      <svg className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 opacity-35" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M1 13v6h6" stroke={LOGO_GOLD} strokeWidth="1" strokeLinecap="round" />
      </svg>
      <svg className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 opacity-35" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M19 13v6h-6" stroke={LOGO_GOLD} strokeWidth="1" strokeLinecap="round" />
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
          <circle cx="1" cy="1" r="0.75" fill={LOGO_GOLD} opacity="0.14" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill={`url(#${patternId})`} />
      <circle cx="200" cy="200" r="160" stroke={LOGO_GOLD} strokeWidth="0.5" opacity="0.1" />
      <circle cx="200" cy="200" r="120" stroke={METALLIC_STEEL} strokeWidth="0.5" opacity="0.08" />
    </svg>
  );
}

function AmbientBackdrop() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0" style={{ background: heroAmbient }} aria-hidden />
      <MeshBackdrop idPrefix="hero" className="pointer-events-none absolute inset-0 h-full w-full opacity-40" />
      <div
        className="glass-orb"
        style={{
          width: "42vw",
          maxWidth: 520,
          height: "42vw",
          maxHeight: 520,
          top: "-8%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(212,175,55,0.28) 0%, transparent 68%)",
        }}
        aria-hidden
      />
      <div
        className="glass-orb"
        style={{
          width: "36vw",
          maxWidth: 420,
          height: "36vw",
          maxHeight: 420,
          bottom: "4%",
          left: "-6%",
          background: "radial-gradient(circle, rgba(200,16,46,0.16) 0%, transparent 70%)",
          animationDelay: "-4s",
        }}
        aria-hidden
      />
      <div
        className="glass-orb"
        style={{
          width: "28vw",
          maxWidth: 340,
          height: "28vw",
          maxHeight: 340,
          top: "28%",
          right: "-4%",
          background: "radial-gradient(circle, rgba(232,22,58,0.14) 0%, rgba(232,197,90,0.12) 45%, transparent 72%)",
          animationDelay: "-7s",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,255,255,0.45) 0%, transparent 58%)",
        }}
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
        style={{ borderColor: BORDER_SOFT, backgroundColor: WHITE }}
      >
        <div
          className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full"
          style={{ background: goldFoil, boxShadow: "0 3px 12px rgba(184,146,46,0.22)" }}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M5 10l3.5 3.5L15 7" stroke={LOGO_RED} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-lg font-semibold" style={{ ...headingStyle, color: LOGO_RED }}>
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
          style={{ ...bodyStyle, color: LOGO_RED }}
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

function HelixField({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 140" fill="none" aria-hidden>
      <path d="M0 70c40-35 80 35 120 0s80 35 120 0 80 35 80 0" stroke={LOGO_GOLD} strokeWidth="1" strokeLinecap="round" opacity="0.16" />
      <path d="M0 82c40-28 80 28 120 0s80 28 120 0 80 28 80 0" stroke={LOGO_RED} strokeWidth="0.75" strokeLinecap="round" opacity="0.2" />
      <path d="M0 58c40-28 80 28 120 0s80 28 120 0 80 28 80 0" stroke={LOGO_GOLD} strokeWidth="0.5" strokeLinecap="round" opacity="0.12" />
    </svg>
  );
}

function Reveal({
  children,
  className,
  delay,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"in" | "pending">("in");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setPhase("in");
      return;
    }

    // Only hide for animation if the block is below the viewport.
    const rect = el.getBoundingClientRect();
    const belowFold = rect.top > window.innerHeight * 0.92;
    if (!belowFold) {
      setPhase("in");
      return;
    }

    setPhase("pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("in");
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );
    observer.observe(el);
    const fallback = window.setTimeout(() => setPhase("in"), 1200);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${phase === "pending" ? "reveal-pending" : "reveal-in"} ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

function QuoteDivider() {
  return (
    <div className="my-5 flex items-center justify-center gap-3" aria-hidden>
      <div className="h-px w-8" style={{ background: goldHairline }} />
      <svg width="5" height="5" viewBox="0 0 8 8" fill="none">
        <path d="M4 0L8 4L4 8L0 4L4 0Z" fill={LOGO_GOLD} fillOpacity="0.4" />
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
        background: `linear-gradient(168deg, ${SURFACE_LIFT} 0%, ${WHITE} 100%)`,
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
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#how-it-works", label: "How it works" },
    { href: "/mission", label: "Our Mission" },
    { href: "/partners", label: "For Partners" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  const trustBadges = ["Matching grounded in science", "Private and secure", "Built for Africa and the diaspora"];

  const homepageSources = getSources(SOURCE_SETS.homepageStats);

  const stats = [
    { stat: SCD_STATS.asCoupleSsRisk, label: "Chance of an SS child when both parents are AS carriers" },
    { stat: `${SCD_STATS.globalBirthsPerYear}+`, label: "Babies born with sickle cell disease worldwide each year" },
    { stat: `${SCD_STATS.nigeriaBirthsPerYear}+`, label: "Of those births occur in Nigeria each year" },
  ];

  const steps = [
    { step: "01", title: "Enter your genotype", body: "Share your sickle cell status securely. Your data stays private and in your control." },
    { step: "02", title: "Discover compatible matches", body: "Meet people aligned with your values and genetic compatibility, before feelings run deep." },
    { step: "03", title: "Connect with confidence", body: "Start conversations knowing you've addressed what matters for your future family." },
  ];

  return (
    <div className="min-h-screen antialiased" style={{ ...bodyStyle, backgroundColor: SURFACE, color: TEXT }}>
      <PageStyles />
      <noscript>
        <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>
      <Grain />

      <header
        className="nav-glass sticky top-0 z-50"
      >
        <CeremonyRule className="absolute left-0 right-0 top-0 opacity-60" />
        <CeremonyRule className="absolute bottom-0 left-0 right-0 opacity-50" />
        <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[4.5rem] lg:px-8">
          <Link href="/" className="link-refined flex items-center gap-3">
            <BrandMark size={34} className="shrink-0" />
            <span className="text-xl font-bold tracking-tight sm:text-2xl lg:text-[1.75rem]" style={{ ...displayStyle, fontWeight: 700 }}>
              <span className="gm-wordmark-text">GenoMatch</span>
            </span>
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="nav-link text-sm" style={{ color: TEXT_SOFT }}>
                {label}
              </a>
            ))}
            <a href="#waitlist" className="btn-premium rounded-full px-5 py-2.5 text-sm font-semibold" style={{ color: LOGO_RED }}>
              Join Waitlist
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a href="#waitlist" className="btn-premium whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold" style={{ color: LOGO_RED }}>
              Join Waitlist
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="menu-toggle flex h-10 w-10 items-center justify-center rounded-full"
            >
              {menuOpen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 3l10 10M13 3L3 13" stroke={LOGO_RED} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M2 5h12M2 11h12" stroke={LOGO_RED} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </nav>
        {menuOpen ? (
          <div
            id="mobile-menu"
            className="mobile-menu nav-glass absolute inset-x-0 top-full lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
              {navLinks.map(({ href, label }, index) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3.5 text-sm"
                  style={{
                    color: "rgba(255,248,246,0.94)",
                    borderBottom: index < navLinks.length - 1 ? "1px solid rgba(255,255,255,0.22)" : "none",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main id="main-content">
        <section
          className="relative flex min-h-[88vh] w-full flex-col justify-center overflow-hidden px-6 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20"
          style={{ backgroundColor: CREAM }}
        >
          <AmbientBackdrop />
          <BrandMark
            size={220}
            watermark
            className="gm-brand-drift pointer-events-none absolute -left-20 top-16 opacity-[0.14] lg:-left-10 lg:opacity-[0.18]"
          />
          <div
            className="pointer-events-none absolute -right-14 bottom-20 opacity-[0.12] lg:right-2 lg:opacity-[0.16]"
            style={{ animation: "drift 11s ease-in-out infinite reverse" }}
          >
            <BrandMark size={200} watermark className="rotate-[18deg]" />
          </div>
          <HelixField className="pointer-events-none absolute left-1/2 top-10 w-72 -translate-x-1/2 opacity-35 lg:w-96" />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
            style={{ background: `linear-gradient(180deg, transparent, ${CREAM}88)` }}
            aria-hidden
          />

          <div className="relative mx-auto w-full max-w-4xl text-center">
            <div className="rise mb-7 flex justify-center">
              <div className="relative">
                <div
                  className="absolute inset-0 -m-8 rounded-full"
                  style={{
                    background: `radial-gradient(circle, rgba(212,175,55,0.22) 0%, rgba(200,16,46,0.08) 42%, transparent 70%)`,
                  }}
                  aria-hidden
                />
                <BrandMark size={92} priority className="relative gm-brand-glow" />
              </div>
            </div>
            <p className="rise rise-1 eyebrow-pill mb-6 inline-block rounded-full px-5 py-2 text-[0.6875rem] font-medium uppercase">
              Genotype aware dating
            </p>
            <h1
              className="rise rise-2 font-bold leading-[1.04]"
              style={{
                ...displayStyle,
                fontWeight: 700,
                fontSize: "clamp(2.75rem, 5.8vw, 4.35rem)",
              }}
            >
              <span className="headline-gloss">The World&apos;s First </span>
              <span className="gold-accent">Genotype Aware</span>
              <span className="headline-gloss"> Dating App</span>
            </h1>
            <p
              className="rise rise-3 mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed sm:text-xl"
              style={{ color: TEXT_SOFT }}
            >
              Find love without leaving your family&apos;s future to chance.
              Built for anyone who values informed love.
            </p>

            <div className="rise rise-3 mt-8 flex flex-wrap items-center justify-center gap-4">
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
                No spam. Private by design
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
            style={{ background: `linear-gradient(180deg, ${CREAM}, transparent)` }}
            aria-hidden
          />
          <HelixField className="pointer-events-none absolute -right-8 top-12 w-48 opacity-25" />
          <SickleCellMark
            size={240}
            idPrefix="stats-watermark"
            className="pointer-events-none absolute -bottom-10 -right-8 rotate-12 opacity-[0.08] sm:-right-4 lg:opacity-[0.1]"
          />
          <SickleCellMark
            size={120}
            idPrefix="stats-watermark-l"
            className="pointer-events-none absolute -left-6 top-1/3 -rotate-12 opacity-[0.05] hidden sm:block"
          />
          <div className="relative mx-auto max-w-6xl">
            <Reveal>
              <DiamondRule className="mb-10 max-w-xs" />
              <div
                className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-2"
                style={{
                  borderColor: "rgba(165,42,58,0.22)",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.88) 100%)",
                  boxShadow: "0 1px 8px rgba(165,42,58,0.06)",
                }}
              >
                <SickleCellRibbon size={20} />
                <span style={{ ...labelStyle, color: "#8A3A45", marginBottom: 0 }}>Sickle cell awareness</span>
              </div>
              <SectionLabel>The facts</SectionLabel>
              <h2
                className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
                style={{ ...headingStyle, color: LOGO_RED }}
              >
                The conversation that changes everything.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: TEXT_SOFT }}>
                The facts that inspired us to build GenoMatch.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-14 grid gap-6 sm:grid-cols-3 lg:mt-20 lg:gap-8">
              {stats.map(({ stat, label }, index) => (
                <article
                  key={stat}
                  className={`card-lift glass-card group relative overflow-hidden rounded-2xl border-l-4 p-8 sm:rounded-3xl ${
                    index === 1 ? "stat-featured sm:-translate-y-1" : ""
                  }`}
                  style={{
                    borderLeftColor: LOGO_GOLD,
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
                  <p className="relative text-base font-medium leading-relaxed lg:text-lg" style={{ color: LOGO_RED }}>
                    {label}
                  </p>
                </article>
              ))}
            </Reveal>
            <p className="mt-10 text-xs font-light leading-relaxed" style={{ color: TEXT_SOFT }}>
              Sources:{" "}
              {homepageSources.map((source, index) => (
                <span key={source.url}>
                  {index > 0 ? "; " : null}
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-refined underline decoration-[rgba(212,175,55,0.45)] underline-offset-2"
                    style={{ color: LOGO_GOLD }}
                  >
                    {source.publisher}
                    {source.year ? ` (${source.year})` : ""}
                  </a>
                </span>
              ))}
              . Global birth estimate from {SCD_STATS.globalBirthsYear} data.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-28" style={{ backgroundColor: CREAM }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(ellipse 50% 60% at 72% 50%, rgba(212,175,55,0.07) 0%, transparent 65%)` }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <Reveal className="text-center">
              <DiamondRule className="mx-auto mb-8 max-w-xs" />
              <SectionLabel>The product</SectionLabel>
              <h2 className="text-3xl font-bold sm:text-4xl" style={{ ...headingStyle, color: LOGO_RED }}>
                Compatibility, at first glance.
              </h2>
              <p className="mx-auto mt-5 max-w-md leading-relaxed" style={{ color: TEXT_SOFT }}>
                Every profile carries a genotype badge, and every match a compatibility
                score. The most important conversation starts before the first message,
                quietly and without awkwardness.
              </p>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: METALLIC_STEEL }}>
                Launching soon on iOS and Android.
              </p>
              <div className="relative mx-auto mt-8 w-full max-w-[260px] sm:max-w-[280px]">
                <div
                  className="pointer-events-none absolute -inset-10"
                  style={{ background: `radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 68%)` }}
                  aria-hidden
                />
                <div className="phone-glass relative">
                  <Image
                    src="/genomatch-app-onboarding-v2.png"
                    alt="GenoMatch onboarding: science-led matching and genotype-aware compatibility"
                    width={472}
                    height={1024}
                    sizes="280px"
                    className="relative w-full"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="how-it-works"
          className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32"
          style={{ backgroundColor: CREAM }}
        >
          <MeshBackdrop idPrefix="how" className="pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-20" />
          <BrandMark
            size={160}
            watermark
            className="pointer-events-none absolute -right-8 bottom-10 hidden opacity-[0.1] sm:block lg:right-6 lg:opacity-[0.13]"
          />
          <div className="relative mx-auto max-w-6xl">
            <Reveal className="text-center">
              <DiamondRule className="mx-auto mb-8 max-w-xs" />
              <SectionLabel>The process</SectionLabel>
              <h2 className="text-3xl font-bold sm:text-4xl" style={{ ...headingStyle, color: LOGO_RED }}>
                How it works
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed" style={{ color: TEXT_SOFT }}>
                Three simple steps to match with clarity, compassion, and confidence.
              </p>
            </Reveal>

            <Reveal delay={120} className="relative mt-14 lg:mt-20">
              <div
                className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-7 hidden h-px sm:block"
                style={{ background: `linear-gradient(90deg, transparent, ${LOGO_GOLD}55, ${LOGO_GOLD}, ${LOGO_GOLD}55, transparent)` }}
                aria-hidden
              />
              <ol className="grid gap-10 sm:grid-cols-3 lg:gap-12">
                {steps.map(({ step, title, body }) => (
                  <li
                    key={step}
                    className="card-lift glass-card group relative flex flex-col items-center rounded-2xl p-8 text-center sm:rounded-3xl"
                  >
                    <div
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold"
                      style={{
                        background: goldFoil,
                        color: LOGO_RED,
                        boxShadow: `0 0 0 4px rgba(255,255,255,0.55), 0 3px 14px rgba(161,117,56,0.25), inset 0 1px 0 rgba(255,255,255,0.45)`,
                      }}
                    >
                      {step}
                    </div>
                    <h3 className="mt-5 text-xl font-bold" style={{ ...headingStyle, color: LOGO_RED }}>
                      {title}
                    </h3>
                    <CeremonyRule className="my-4 w-10 opacity-50" />
                    <p className="max-w-xs text-sm leading-relaxed" style={{ color: TEXT_SOFT }}>
                      {body}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* FAQ Section - AEO */}
        <section
          className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-28"
          style={{ background: `linear-gradient(180deg, ${CREAM} 0%, ${CREAM} 100%)` }}
        >
          <BrandMark
            size={140}
            watermark
            className="pointer-events-none absolute -left-10 top-16 hidden opacity-[0.09] sm:block"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getFaqJsonLd()),
            }}
          />
          <Reveal className="relative mx-auto max-w-2xl">
            <div className="mb-12 text-center lg:mb-14">
              <DiamondRule className="mx-auto mb-8 max-w-xs" />
              <SectionLabel>Frequently asked questions</SectionLabel>
              <h2 className="text-3xl font-bold sm:text-4xl" style={{ ...headingStyle, color: LOGO_RED }}>
                Everything you need to know
              </h2>
            </div>
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="faq-item">
                <summary
                  className="faq-summary flex items-center justify-between gap-6 py-5 text-lg"
                  style={headingStyle}
                >
                  {item.question}
                  <svg className="faq-icon shrink-0" width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M7 1v12M1 7h12" stroke={LOGO_GOLD} strokeWidth="1.25" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="faq-answer max-w-[58ch] pb-6 pr-8 text-[0.9375rem] leading-relaxed" style={{ color: TEXT_SOFT }}>
                  {item.answer}
                </p>
              </details>
            ))}
          </Reveal>
        </section>

        <section
          className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-24"
          style={{ background: creamWash }}
        >
          <MeshBackdrop idPrefix="quote" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(ellipse 60% 48% at 50% 38%, rgba(212,188,130,0.1) 0%, transparent 58%)` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(ellipse 70% 50% at 50% 100%, rgba(200,16,46,0.04) 0%, transparent 60%)` }}
            aria-hidden
          />
          <BrandMark
            size={190}
            watermark
            className="gm-brand-drift pointer-events-none absolute -left-16 top-1/2 hidden -translate-y-1/2 opacity-[0.14] sm:block"
          />
          <BrandMark
            size={190}
            watermark
            className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 rotate-180 opacity-[0.14] sm:block"
            style={{ animation: "drift 12s ease-in-out infinite reverse" }}
          />
          <Reveal>
            <QuoteBlock />
          </Reveal>
        </section>

        <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28" style={{ backgroundColor: CREAM }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(ellipse 55% 45% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 65%)` }}
            aria-hidden
          />
          <HelixField className="pointer-events-none absolute bottom-4 left-1/2 w-56 -translate-x-1/2 opacity-25" />
          <Reveal className="relative mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:mx-0">
                <div
                  className="pointer-events-none absolute -inset-10"
                  style={{ background: `radial-gradient(circle, rgba(212,175,55,0.14) 0%, transparent 68%)` }}
                  aria-hidden
                />
                <Image
                  src="/genomatch-coming-soon-v2.jpg"
                  alt="GenoMatch coming soon on iOS and Android — where hearts align and futures bloom"
                  width={1024}
                  height={1024}
                  sizes="(max-width: 1024px) 300px, 340px"
                  className="relative w-full rounded-2xl"
                  style={{ boxShadow: shadowDeep }}
                />
              </div>
              <div className="text-center lg:text-left">
                <BrandMark size={52} className="mx-auto mb-5 gm-brand-glow lg:mx-0" />
                <SectionLabel>Join us</SectionLabel>
                <h2 className="text-2xl font-bold sm:text-3xl" style={{ ...headingStyle, color: LOGO_RED }}>
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
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t px-6 py-12 lg:px-8 lg:py-16" style={{ background: creamFooter, borderColor: `${LOGO_GOLD}22` }}>
        <MeshBackdrop idPrefix="footer" className="pointer-events-none absolute inset-0 h-full w-full opacity-15" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(ellipse 70% 60% at 50% 0%, rgba(212,188,130,0.08) 0%, transparent 62%)` }}
          aria-hidden
        />
        <CeremonyRule className="relative mx-auto mb-8 max-w-lg opacity-60" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:gap-4">
          <div className="flex items-center gap-3">
            <BrandMark size={36} className="gm-brand-glow" />
            <p className="text-lg font-bold tracking-tight" style={{ ...displayStyle, fontWeight: 700 }}>
              <span className="gm-wordmark-text">GenoMatch</span>
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
            © {new Date().getFullYear()} GenoMatch Ltd · RC No. 9236521 · Nigeria
          </p>
        </div>
      </footer>
    </div>
  );
}
