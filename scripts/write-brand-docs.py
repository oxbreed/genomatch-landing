#!/usr/bin/env python3
"""Write the brand contract into the landing repo so agents load it.

    python3 scripts/write-brand-docs.py
"""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

BODY = """# GenoMatch brand: System A (Mirror) on this site

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
"""

RULE = """---
description: GenoMatch landing brand is System A (Mirror). Do not apply forest or the crimson approximation.
alwaysApply: true
---

This site uses System A, Mirror: gunmetal `#0B0C0E`, ribbon red `#C8102E`,
gold `#D4AF37`, chrome `#D4D8E0`, cream `#FAF8F5`. Tokens live in `app/theme.ts`.

Do not reintroduce crimson `#B82C2E` / `#BE995A` or forest `#163522` / `#1A3D28`.
Do not merge `brand/unify-forest-gold`. Never keep a token's name while changing
what it means.

Red is reserved for errors, destructive actions and the sickle cell ribbon
(`#A52A3A`), never for a genotype risk line.

Wordmark gloss class is `.gm-wordmark-text`.

Read `BRAND.md` at the repo root before any styling work.
"""

POINTER = """
<!-- BEGIN:genomatch-brand -->
# Brand colour is System A (Mirror)

Landing uses gunmetal, ribbon red, gold, chrome and cream. Read `BRAND.md`
before touching any colour, theme token, gradient, icon or brand asset.
Do not apply forest or the crimson approximation.
<!-- END:genomatch-brand -->
"""


def main() -> None:
    (ROOT / "BRAND.md").write_text(BODY, encoding="utf-8")
    rules = ROOT / ".cursor" / "rules"
    rules.mkdir(parents=True, exist_ok=True)
    (rules / "brand.mdc").write_text(RULE, encoding="utf-8")

    agents = ROOT / "AGENTS.md"
    if agents.exists():
        text = agents.read_text(encoding="utf-8")
        start = text.find("<!-- BEGIN:genomatch-brand -->")
        if start != -1:
            end = text.find("<!-- END:genomatch-brand -->")
            text = text[:start].rstrip() + text[end + len("<!-- END:genomatch-brand -->"):]
        agents.write_text(text.rstrip() + "\n" + POINTER, encoding="utf-8")

    print("updated BRAND.md, .cursor/rules/brand.mdc, AGENTS.md pointer")


if __name__ == "__main__":
    main()
