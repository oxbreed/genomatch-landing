# GenoMatch brand: System A (Mirror) on this site

The public site uses the mirror palette. Do not reintroduce the crimson
approximation (`#B82C2E` / `#8F1115` / `#BE995A`) or the forest palette
(`#163522` / `#1A3D28` / `#D4A843`). Local branch `brand/unify-forest-gold`
is the rejected forest pass; do not merge it.

## Tokens

```
LOGO_RED   #C8102E   LOGO_RED_DEEP  #A30C24   LOGO_RED_BRIGHT #E8163A
LOGO_GOLD  #D4AF37   LOGO_GOLD_DEEP #B8922E   LOGO_GOLD_BRIGHT #E8C55A
BRAND_BLACK #0B0C0E  BRAND_CHARCOAL #2A2E35   CREAM #FAF8F5
METALLIC_GRAPHITE #1A1D22  _SLATE #22262D  _STEEL #6E737C
METALLIC_SILVER   #B8BCC4  _CHROME #D4D8E0
```

Source of truth for values: `app/theme.ts`, matching `genomatch-app`
`src/theme/colors.ts` at `52ad563`.

**Rule: never keep a token's name while changing what it means.** If the brand
changes, rename the tokens in the same commit. Grepping for `FOREST` or `GOLD`
tells you nothing about the colour.

## The one thing that was already settled

Red means error, destructive action, or the sickle cell awareness ribbon
(`#A52A3A`, `#7A1A2E`, `#C94B5A`). Do not use brand red for a genotype risk
line. Red beside a risk percentage reads as clinical alarm and is an Apple
1.4.1 rejection risk on a product about a blood disorder.

## Wordmark gloss

Use `.gm-wordmark-text`. Do not add palette-named gloss classes
(`.crimson-gloss`, `.forest-gloss`, `.mirror-gloss`).
