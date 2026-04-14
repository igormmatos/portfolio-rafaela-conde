---
name: visual-refiner
description: Analyze and refine the visual quality of an existing interface without redesigning the brand or architecture. Use when Codex needs to audit or improve spacing, hierarchy, contrast, alignment, typography, responsive behavior, component consistency, or mobile usability in an established website, especially static marketing or institutional pages that must preserve an existing visual language.
---

# Visual Refiner

Use this skill to make incremental visual improvements with low risk and clear reasoning.

## Start Here

1. Read `AGENTS.md` if the repository has one.
2. Read the local UX guidance before editing. In this repository, prioritize:
   - `docs/plano-execucao-site.md`
   - `docs/ux-ui.md`
   - `index.html`
   - `assets/css/styles.css`
   - `assets/js/main.js`
3. Map the existing design system before changing code:
   - colors and gradients from `:root`
   - typography pairs and heading styles
   - spacing scale, radii, shadows, and transitions
   - shared section shells, cards, buttons, and breakpoints
   - theme variants such as `html.dark`

## Analysis Workflow

1. Inventory the current interface.
   - Identify the primary message above the fold.
   - List the shared components actually used by the page.
   - Separate global patterns from page-specific patterns.
2. Evaluate the interface in this order.
   - Check hierarchy: make the main message obvious before secondary content.
   - Check density: keep paragraphs, lists, and cards easy to scan.
   - Check rhythm: normalize section padding, card gaps, and heading margins.
   - Check alignment: line up icons, columns, cards, and CTA groups cleanly.
   - Check contrast: keep text, surfaces, borders, and buttons legible in light and dark themes.
   - Check emphasis: keep one clear primary CTA instead of competing actions.
   - Check touch comfort: keep buttons, nav links, FAQ summaries, and floating CTAs easy to tap.
   - Check responsiveness: keep the layout composed from narrow phones to desktop.
   - Check imagery: keep portraits, logos, and decorative elements sober and intentional.
3. Turn findings into edits.
   - Fix system-level issues first.
   - Fix component consistency next.
   - Fix page-specific spacing or balance last.
   - Prefer the smallest change that solves the problem clearly.

## Refinement Rules

- Preserve the established identity unless the user explicitly asks for a redesign.
- Prefer editing shared tokens and shared classes before adding page-specific exceptions.
- Prefer CSS adjustments over new JavaScript.
- Reuse existing layout shells such as `.hero`, `.page-hero`, `.section`, `.section-soft`, `.section-contrast`, and the shared card and button families.
- Keep motion subtle and functional.
- Avoid trend-driven visuals, oversized effects, or decorative clutter.
- Keep the interface sober when the domain is legal, institutional, or trust-sensitive.
- Recheck both themes after touching shared UI if the site already supports dark mode.

## Project-Specific Defaults For This Repo

When this skill is used in `portfolio-rafaela-conde`, assume:
- the site is static HTML, CSS, and JavaScript
- the home page is the main conversion surface
- WhatsApp is the primary contact path
- the visual language should be refined, not redesigned
- labor-law content stays primary and traffic-law content stays complementary
- compliance, trust, and scannability matter more than novelty

## Delivery Pattern

When reviewing without editing:
- report concrete visual findings first
- reference selectors or files when possible
- prioritize regressions, inconsistencies, and mobile pain points

When implementing:
- state the visual problem being solved
- keep diffs narrow and system-aware
- mention which breakpoints or surfaces were checked

## Validation Checklist

Before finishing, verify:
- the hero still communicates the main offer quickly
- the primary CTA remains the strongest action
- section spacing feels consistent from top to bottom
- card families use coherent radius, border, shadow, and padding rules
- text line lengths remain comfortable on desktop
- tap targets remain comfortable on mobile
- no edit weakens accessibility, readability, or institutional tone
