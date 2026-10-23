# Livia Personal Website

An Astro static website for Wenxi Miao (Livia), organised as two spaces: Academic and Elsewhere.

The current redesign branch contains a bilingual academic archive with a vintage editorial and natural-history visual direction. English is served from the existing routes and Simplified Chinese from equivalent `/zh/` routes.

## Local development

```sh
cd /workspace/personal-website
npm ci --cache /workspace/.cache/npm
npm run dev -- --port 3000
```

Build and run the browser checks with:

```sh
npm test
```

## Content

Shared English and Chinese text is maintained in `src/data/site.ts`. The Academic archive has three editable collections:

- Healthcare & Strategy
- Education & Outreach
- Life Sciences & Research

The CV, contact information, profile photograph, and experience dates remain explicit placeholders until verified material is supplied. No fictional portrait, contact address, publication, qualification, or date is included.

## Routes

- `/` and `/zh/`: entrance
- `/academic/` and `/zh/academic/`: Academic archive
- `/academic/[section]/` and `/zh/academic/[section]/`: collection details
- `/elsewhere/` and `/zh/elsewhere/`: Elsewhere

All links use Astro's configured base path and are compatible with GitHub Pages deployment under `/personal-website/`.

## Artwork

`public/art/lily-of-the-valley.webp` was generated specifically for this website as decorative botanical artwork. It is not historical source material or research data. No external image URL is required.

## Deployment status

This redesign is prepared on a local review branch. It must not be pushed to `main` or deployed until the site owner approves the design.
