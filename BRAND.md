# GenoMatch brand: UNRESOLVED. Read this before touching any colour.

Two complete brand systems exist in these repos right now. Neither has been
ratified. **Do not pick one on your own, and do not "fix" a colour to match
whichever files you happen to be looking at.** Ask first.

## System A — Mirror: gunmetal, ribbon red, gold

Lives on `genomatch-app` branch `main`, commit `52ad563`, 3 July 2026,
"Apply mirror brand system and stabilize Expo Go cold start."

```
LOGO_RED   #C8102E   LOGO_RED_DEEP  #A30C24   LOGO_RED_BRIGHT #E8163A
LOGO_GOLD  #D4AF37   LOGO_GOLD_DEEP #B8922E   LOGO_GOLD_BRIGHT #E8C55A
BRAND_BLACK #0B0C0E  BRAND_CHARCOAL #2A2E35   CREAM #FAF8F5
METALLIC_GRAPHITE #1A1D22  _SLATE #22262D  _STEEL #6E737C
METALLIC_SILVER   #B8BCC4  _CHROME #D4D8E0
```

Also: the ribbon logo assets, the splash video, `SplashVideoScreen`,
`InterestedInGate`, and a full UI pass across most screens.

`genomatch-landing` `main` was rethemed to match it on 12 July (`f2d34af`,
crimson `#B82C2E` + gold `#BE995A`). That is what `www.genomatch.app` serves today.

## System B — Forest: forest green, antique gold

Lives on `genomatch-app` branch `cursor/upgrade-expo-sdk-57-b465`, which was cut
from `fd53596`, **before** the mirror work, and therefore does not contain it.

```
FOREST_DEEP #163522  FOREST #1A3D28  GOLD #D4A843
SAGE #8FAF95  LINEN #F5EFE6  MINT #EDF3EE
verified #3D7A52  error #A32D2D
```

`genomatch-landing` and `genomatch-admin` branch `brand/unify-forest-gold` move
the site and admin onto this. Unmerged, unpushed.

## Why this is confusing, and the rule that follows

Both systems reuse the other's variable names. System A defines
`FOREST_DEEP = BRAND_BLACK` and `FOREST = '#14161A'`. The landing site defined
`FOREST = '#B82C2E'` with a comment saying names were "kept for import
stability". Grepping for a colour name tells you nothing about the colour.

**Rule: never keep a token's name while changing what it means.** If the brand
changes, rename the tokens in the same commit.

## The one thing that is settled

Red means error, destructive action, or the sickle cell awareness ribbon
(`#A52A3A`, `#7A1A2E`, `#C94B5A`). Even under System A, do not use brand red for
a genotype risk line. Red beside a risk percentage reads as clinical alarm and
is an Apple 1.4.1 rejection risk on a product about a blood disorder.

## Full write-up

`genomatch-landing/docs/brand-unification-2026-09-14.md`
`genomatch-landing/docs/lost-work-2026-09-14.md`
