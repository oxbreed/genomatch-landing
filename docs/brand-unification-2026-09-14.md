# Brand unification, 14 September 2026

## What happened before this

From 12 July 2026 the site ran crimson `#B82C2E` and gold `#BE995A`. The commit
that did it, `f2d34af`, is titled "Retheme site to app crimson + gold" and the
app had never had crimson. Searching the whole history of `genomatch-app` for
`B82C2E`, `820B0F`, `C43232`, `BE9857`, `BE995A`, `8F1115` and `C0392B` returns
zero commits. `genomatch-app/src/theme/colors.ts` has read forest `#163522` /
gold `#D4A843` since 12 June, and the app icon has been dark green since
`50a4a2a` on 7 June.

The red 3D heart arrived from outside version control and was dropped straight
into `public/`. From then until now the app, the site and the admin were three
different brands.

It was hard to find because nothing was renamed. `theme.ts` carried the comment
"Export names (FOREST / SAGE) kept for import stability" and then assigned
crimson to `FOREST`. `HomeContent.tsx` did the same and also set `MINT_SOFT`,
`MINT_DEEP` and `MINT_WHISPER` to `#FFFFFF`. Grepping for green found a
green-named site rendering red.

## The decision

Forest and antique gold is the single system. The 3D interlocking-heart mark
from 12 July is kept and recoloured rather than replaced: the form is the brand
equity, the colour was the weak half.

Red is reserved for errors, destructive actions and the sickle cell awareness
ribbon. This is a product about a blood disorder, and red beside a genotype risk
line reads as clinical alarm, which is also an Apple 1.4.1 exposure.

## Branches

| repo | branch | commit |
|---|---|---|
| genomatch-landing | `brand/unify-forest-gold` | `31fbf64` |
| genomatch-admin | `brand/unify-forest-gold` | `bbbed40` |
| genomatch-app | none needed, already forest | |

`main` in both repos is untouched and still carries the pending work exactly as
it was found: `/support`, `/delete-account`, `layout.tsx`, `sitemap.ts`,
`next.config.ts`, the favicon changes, and admin's `Sidebar.tsx` and
`/moderation`.

Adopt: `git checkout main && git merge brand/unify-forest-gold`
Reject: `git branch -D brand/unify-forest-gold` in both repos. `main` is already
crimson, nothing else to undo.

## Scripts

### `scripts/recolour-brand-mark.py`

Re-maps only pixels whose hue sits in the red band (328 to 20 degrees) through a
luminance ramp anchored on the app tokens, so the glossy 3D material survives
instead of being flattened by a hue rotation. Gold, specular highlights and
alpha are untouched. It always reads the pristine crimson original from
`brand-archive/crimson-2026-07/`, so it is safely re-runnable.

Ramp: `#091610` to `#163522` to `#1A3D28` to `#2C603E` to `#689873` to `#AFCDB5`

Regenerates `genomatch-mark-3d.png`, `genomatch-logo-forest-gold.png`,
`genomatch-logo-forest-gold-dark.png`, `genomatch-logo-icon.png`,
`genomatch-icon.png`, `genomatch-og.png`, `favicon.png`, `favicon.ico`,
`apple-touch-icon.png`.

Revert: `cp brand-archive/crimson-2026-07/* public/`

### `scripts/retheme-forest-gold.py`

318 colour references across 25 files. Pure colour substitution. Layout,
typography, spacing and the white ground introduced by `fc5068b` are unchanged,
because that polish was good work and only its hues were wrong.

`--check` reports without writing. Revert:
`git checkout -- app lib public/genomatch-instagram.svg`

| was | now | role |
|---|---|---|
| `#B82C2E` (75 uses) | `#1A3D28` | brand primary |
| `#8F1115` | `#0D2818` | brand deep |
| `#BE995A` | `#D4A843` | gold |
| `#8A7A72` | `#8FAF95` | secondary |
| `#3A1E1E` | `#163522` | body text |
| `#6B5856` | `#3D5A47` | soft text |
| `rgba(184,44,46,...)` | `rgba(26,61,40,...)` | tints |
| `rgba(143,17,21,...)` | `rgba(13,40,24,...)` | shadows |
| `rgba(190,153,90,...)` | `rgba(212,168,67,...)` | gold tints |

Left alone on purpose, because semantic rather than brand:
`#A52A3A` `#C94B5A` `#7A1A2E` `#8A3A45` `rgba(165,42,58,...)` for the sickle cell
ribbon; `#C0392B` `#A32D2D` `#9E5A5A` `#FDECEA` for form errors and risk states;
`#2A6A35` `#F5EDED` for safe-state pills.

### `scripts/write-brand-docs.py`

Writes `BRAND.md` and `.cursor/rules/brand.mdc` into all three repos and appends
a pointer block to `AGENTS.md` and `CLAUDE.md`, so Cursor, Claude Code and any
other agent load the colour contract without being told.

## Naming fixed

`CRIMSON` to `FOREST_ACCENT`, `CRIMSON_LIGHT` to `FOREST_ACCENT_LIGHT`, CSS class
`.crimson-gloss` to `.forest-gloss`, keyframe `crimsonSheen` to `forestSheen`
across 9 files. Both theme files now name `genomatch-app/src/theme/colors.ts` as
the source of truth.

Still dishonest and deliberately left: `MINT_SOFT`, `MINT_DEEP`, `MINT_WHISPER`
and `SURFACE_MINT` in `HomeContent.tsx` are all `#FFFFFF`. Repointing them is a
design change, not a recolour. Decide it separately.

## Admin

`app/globals.css` ran a third green that matched nothing:

```
--color-forest: #074d2e  ->  #163522
--color-gold:   #ffe082  ->  #d4a843
--color-sage:   #a8d5ba  ->  #8faf95
--color-cream:  #fafaf7  ->  #f5efe6
```

plus new `--color-forest-mid`, `--color-mint` and `--color-danger`.

The six `#B82C2E` values in `app/moderation/` were repointed to `#A32D2D`. That
edit sits in the still-uncommitted `/moderation` work on `main`, not on the
branch, because the folder is untracked. It is correct under either palette.

## Verified

- `next build` passes on genomatch-landing, all 20 routes including `/support`
  and `/delete-account`.
- `next build` passes on genomatch-admin including `/moderation`.
- Hero rendered and inspected at `localhost:3311`.
- Zero residual `#B82C2E`, `#8F1115`, `rgba(184,44,46`, `rgba(143,17,21` in
  `app/` or `lib/`.

## Two open risks found on the way

**The crimson work was never pushed.** `origin/main` for genomatch-landing is
still at `48bf3fc` from 28 June. All five July commits are local-only, yet
`www.genomatch.app` serves `#B82C2E`. Production is running code that exists on
one laptop and nowhere else. Push it, whichever palette wins.

**The app icon regeneration is not in the repo.** The launch notes record that
`scripts/build-app-icons.py` regenerated square icons after they were found to
be JPEGs renamed to `.png` at 1024x768. That script is not in `scripts/`, and
`assets/icon.png` is byte-identical to `50a4a2a` of 7 June. Separately,
`genomatch-logo-red-gold-dark.png` is 1024x768, the exact non-square dimension
from that report. Confirm the icons before store submission.

## If crimson wins instead

Delete the branches. Then the app has to move, and it is a far larger job:
`src/theme/colors.ts`, `GLASS`, `genoVisualTokens.ts`, every `src/brand/`
component, `icon.png`, `adaptive-icon.png`, `splash-icon.png`, `favicon.png`,
and every store screenshot. Budget a day, not an hour. Update `BRAND.md` in all
three repos in the same pull request.
