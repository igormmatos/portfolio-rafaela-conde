# Project Context

This repository contains the static institutional website for Dra. Rafaela Condé. The site uses a hybrid information architecture: the home page is the main conversion surface, and dedicated internal pages cover `direito-trabalhista/`, `direito-de-transito/`, `sobre/`, and the legal pages.

Primary goals:
- Make the labor-law focus clear quickly, especially on mobile.
- Route visitors to WhatsApp or the contact form with low friction.
- Preserve a sober, informative tone aligned with legal advertising, LGPD, and institutional trust.

Core references:
- `docs/plano-execucao-site.md`: execution constraints, structure, validation criteria, and copy rules.
- `docs/ux-ui.md`: UX/UI audit and incremental refinement guidance.
- `docs/deep-research-report.md`: strategic background.

## Technologies

- Static HTML per route:
  - `index.html`
  - `direito-trabalhista/index.html`
  - `direito-de-transito/index.html`
  - `sobre/index.html`
  - `politica-de-privacidade/index.html`
  - `termos-de-uso/index.html`
- Shared CSS in `assets/css/styles.css`, using CSS custom properties for color, spacing, shadow, radius, transitions, and dark theme overrides.
- Shared JavaScript in `assets/js/main.js`, written in vanilla JS inside an IIFE.
- External UI assets:
  - Google Fonts: `Inter` and `Playfair Display`
  - Material Icons Outlined
- SEO/support files:
  - `robots.txt`
  - `sitemap.xml`
  - `.htaccess`
  - JSON-LD embedded in the HTML

## Architecture And Content Model

- `index.html` is the main conversion page.
- Internal service pages deepen search intent and answer objections with FAQ content.
- Header, footer, CTA conventions, and global scripts are shared across pages.
- Images, logos, and brand assets live in `assets/src/`.
- There is no build step, bundler, framework, or component compiler in this repo.

## UI Patterns

Design system foundations:
- Typography: `Inter` for UI/body and `Playfair Display` for display headings.
- Palette: deep blue primary, light blue secondary, gold accent, white/light gray surfaces.
- Theme support: light theme by default, dark mode via `html.dark`.
- Layout shell: `.container` uses `min(1280px, calc(100% - 2rem))`.

Recurring sections and components:
- `.hero` for the home hero, with gradient background, portrait media, trust pills, and dual CTA.
- `.page-hero` and `.page-hero-about` for internal page intros.
- `.section`, `.section-soft`, and `.section-contrast` for section rhythm and contrast.
- `.btn`, `.btn-primary`, `.btn-sm`, `.btn-lg`, and `.hero-secondary-cta` for CTA patterns.
- Shared card families such as `.topic-card`, `.step-card`, `.detail-card`, `.legal-card`, and `.testimonial-card`.
- FAQ content built with semantic `<details>` and `<summary>` inside `.faq-grid`.
- Mobile conversion helpers such as `.mobile-nav` and `.mobile-whatsapp-cta`.
- Home-only interactive elements such as the testimonial carousel.
- Contact form assembly, floating WhatsApp CTA visibility, theme toggle, and mobile nav behavior handled in `assets/js/main.js`.

## Editing Guidelines

When changing UI:
- Preserve the current visual language. This repo is in refinement mode, not redesign mode.
- Prefer shared token and shared component updates before page-specific overrides.
- Keep the hierarchy clear on mobile first, then tune desktop spacing and grids.
- Maintain sober legal/institutional presentation. Avoid flashy motion, novelty patterns, or decorative clutter.
- Keep WhatsApp as the main CTA path.
- Preserve dark theme behavior if touching shared UI.

When changing copy or content:
- Keep the tone objective, clear, and non-promotional.
- Do not introduce `gratuito`, promises of result, sensationalism, or mercantilist legal copy.
- Minimize requests for sensitive information and preserve LGPD-aware contact flows.
- Keep labor-law content primary on the home page and treat traffic-law content as complementary.

When changing structure or SEO:
- Keep page metadata (`title`, `description`, `canonical`, `H1`) coherent with each route's intent.
- If routes change, update navigation, footer links, `sitemap.xml`, and any relevant structured data.
- Only use `FAQPage` schema where the FAQ is visibly rendered in the HTML.

## Validation Expectations

Check changes at the main viewport sizes already used by the project:
- `360x800`
- `390x844`
- `412x915`
- `1280x800`
- `1440x900`

Before finishing:
- Keep WhatsApp and the primary CTA easy to find within the first seconds on mobile.
- Keep focus states, target sizes, and readability comfortable.
- Keep shared header/footer behavior and theme toggle intact.
- Do not break the static multi-page structure or the institutional tone.
