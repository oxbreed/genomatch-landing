# HANDOFF: oxbreed/genomatch-landing

GenoMatch public marketing site for www.genomatch.app. Legal name in site config: GenoMatch Ltd. Tagline: "Connecting Hearts. Aligning Genes." The mobile app lives in `oxbreed/genomatch-app`; the admin app is the private repo `oxbreed/genomatch-admin`.

Repo: https://github.com/oxbreed/genomatch-landing (public, default branch `main`)
Canonical site: https://www.genomatch.app (apex genomatch.app 301s here)
Vercel project URL: https://genomatch-landing.vercel.app
Contact: hello@genomatch.app

This repo already lives on GitHub. Agent `bc-01a0f3e1-c34d-7503-b24f-6d36c26af336` pushed `cursor/world-class-seo-f336` and that work is merged as PR #2. Partner infra agent `bc-e59360f9-0a37-4dcd-a2b9-d94a2321629f` has no remaining branch under a `1629f` / `e593` suffix; treat its work as absorbed into later landing commits if it shipped. Env-setup agent `bc-23852b66-f4e3-477e-a803-560f3103e22f` has no matching GitHub branch; if that run only configured a Cursor environment, there is no extra app code to copy.

## Stack

- Next.js 16.2.7 (App Router), React 19.2.4, TypeScript, Tailwind CSS 4
- Supabase JS (anon + service-role admin client)
- Smile ID verification callbacks under `/api/verification/smile-id/`
- SEO kit: robots, sitemap, manifest, JSON-LD, IndexNow (`npm run seo:indexnow`)

## Hosting and deploy

- Vercel, production domain www.genomatch.app
- `vercel.json` sets `Access-Control-Allow-Origin: https://www.genomatch.app`
- DNS for the domain was on Namecheap (Google site verification TXT was present as of the 1 Oct 2026 SEO PR)
- Related GenoMatch work previously hit Vercel deploy failures and a paused Supabase project; re-check both before assuming previews or auth/callback routes work

## Current state (as of 20 Nov 2026, UK time)

`main` is at `3e5351bb`, last updated 1 Oct 2026, 13:22 UK time.

Merged:

- PR #1, merged 17 Sep 2026, 14:29 UK time (`brand/unify-mirror`): recolour the public site to the trademarked mirror palette and fix the broken forest-gloss wordmark class.
- PR #2, merged 1 Oct 2026, 13:22 UK time (`cursor/world-class-seo-f336`): production-grade SEO (shared SEO kit, robots/sitemap/manifest/llms.txt, JSON-LD, IndexNow) plus Google Search Console HTML verification meta for known tokens and optional `GOOGLE_SITE_VERIFICATION`.

`/support` and `/delete-account` (store-submission blockers in September) are on `main`, recovered in `backup/landing-pre-reconcile` (`d144b49b`, 15 Sep 2026) before the brand merge. Other public routes include `/`, `/blog`, `/contact`, `/faq`, `/mission`, `/partners`, `/privacy`, `/terms`, `/reset-password`.

No open pull requests. Open issues count is 0.

## Branches

All of these already exist on GitHub:

- `main` (`3e5351bb`)
- `cursor/world-class-seo-f336` (`71c92512`, merged via PR #2, branch not deleted)
- `brand/unify-mirror` (`d82588c0`, merged via PR #1)
- `backup/landing-pre-reconcile` (`d144b49b`)

Older docs mention a rejected `brand/unify-forest-gold` branch; it is not in the current branch list.

## Key decisions

- Mirror palette only. Do not reintroduce forest (`#163522` / `#1A3D28` / `#D4A843`) or the crimson approximation (`#B82C2E` / `#8F1115` / `#BE995A`). Tokens live in `app/theme.ts` and should stay aligned with `genomatch-app` `src/theme/colors.ts` at the July mirror commit `52ad563`.
- Use `.gm-wordmark-text`. Do not add palette-named gloss classes (`.crimson-gloss`, `.forest-gloss`, `.mirror-gloss`).
- Red is for errors, destructive actions, or the sickle-cell awareness ribbon, not for a genotype risk line.
- Canonical host is `https://www.genomatch.app`.
- `docs/lost-work-2026-09-14.md` and `docs/brand-unification-2026-09-14.md` are useful history but are partly stale: they still describe forest as the decision and claim `origin/main` was stuck at `48bf3fc` with laptop-only production source. Those July commits and the support/delete-account pages were later pushed; mirror won on 17 Sep 2026.

## Known issues

- Google Search Console may still need a successful verify. DNS had `google-site-verification=OHWao…`; an older token (`tfUao…`) had failed domain verify. After PR #2 the site emits both as HTML meta so the URL-prefix property can use the HTML-tag method. Sitemap to submit: `https://www.genomatch.app/sitemap.xml`. Then `npm run seo:indexnow`.
- Next.js on this repo is still 16.2.7. The Dirty December site was patched to 16.4.6 on 20 Nov 2026 for the November 2026 Next security range. Check whether 16.2.7 needs the same upgrade before the next production deploy.
- Re-verify Vercel production and that Supabase is not paused.
- README is still the default create-next-app text.
- The landing env-setup cloud agent has no GitHub branch to inspect; Cursor transcript dump was not available from this pass.

## Env vars (names only)

Confirmed in code (no `.env.example` on `main`):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server only)
- `NEXT_PUBLIC_SITE_URL` (fallback used when Smile ID callback URL is unset)
- `GOOGLE_SITE_VERIFICATION` (optional extra HTML meta token)
- `SMILE_ID_PARTNER_ID`
- `SMILE_ID_API_KEY`
- `SMILE_ID_ENV` (defaults to `sandbox`)
- `SMILE_ID_CALLBACK_URL` (optional; otherwise `{NEXT_PUBLIC_SITE_URL or https://genomatch.app}/api/verification/smile-id/callback`)

IndexNow uses a key constant in `lib/seo/indexnow.ts` rather than an env var.

## Next steps

1. Confirm www.genomatch.app is serving `3e5351bb` and that Supabase is active.
2. Finish Google Search Console verification and submit the sitemap.
3. Evaluate a Next.js security upgrade (compare with the 16.4.6 work on december-circuit).
4. Replace the stock README with a short operator guide.
5. Keep brand changes in lockstep with `genomatch-app` and `genomatch-admin`.

## First prompt for GitHub Copilot coding agent

```
Work in https://github.com/oxbreed/genomatch-landing, the GenoMatch marketing site for https://www.genomatch.app. Do not commit secrets. Do not reintroduce the forest palette or the crimson approximation. Keep the mirror tokens in app/theme.ts (ribbon red #C8102E, gold #D4AF37, ink #0B0C0E, cream). Canonical host is https://www.genomatch.app. Legal pages /support and /delete-account must keep working.

main is 3e5351bb with PR #1 (mirror recolour) and PR #2 (world-class SEO, including Google verification meta and IndexNow) already merged. There are no open PRs.

Please: 1) upgrade Next.js and eslint-config-next from 16.2.7 to a current patched 16.x release, following official upgrade notes and keeping the existing redirects, security headers, and favicon CORS behaviour; 2) replace the stock create-next-app README with a short operator README covering local dev, env var names only (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, NEXT_PUBLIC_SITE_URL, GOOGLE_SITE_VERIFICATION, SMILE_ID_PARTNER_ID, SMILE_ID_API_KEY, SMILE_ID_ENV, SMILE_ID_CALLBACK_URL), and the GSC/sitemap/IndexNow follow-up; 3) open a PR and report what a human should verify on the Vercel preview, including that /support, /delete-account, /sitemap.xml and the verification meta still render. Do not merge or deploy.
```
