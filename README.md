# Wency Personal Website

Stage 1 follows `AGENTS.md`: a minimal entry page with **Academic** and **Elsewhere**, two working foundation pages, and navigation between the two worlds.

Built with Astro. Astro prepares ordinary static web pages; visitors do not need JavaScript to navigate this prototype. No visitor information is collected.

## Start the website

In a terminal, enter the project folder:

```sh
cd /workspace/personal-website
```

Install the exact saved dependency versions (needed on a new machine):

```sh
npm ci --cache /workspace/.cache/npm
```

Start the development server, which refreshes pages as files change:

```sh
npm run dev -- --port 3000
```

The current cloud instance has already been installed and started. Use the development server through your editor's preview or port interface if available. This is not a published website.

## Build and check

Generate the publishable files in `dist/`:

```sh
npm run build
```

Build the site and check navigation, mobile layouts, keyboard access and reduced motion in a real browser:

```sh
npm test
```

Tests use Playwright with the cloud machine's installed Chromium. On another machine without Chromium, first run `npx playwright install chromium`.

## Where to edit

- `src/pages/index.astro`: entry title, invitation and two choices.
- `src/data/worlds.ts`: the introductory text for Academic and Elsewhere.
- `src/components/WorldPage.astro`: shared structure of the two foundation pages.
- `src/styles/global.css`: colours, type and responsive layout.
- `astro.config.mjs`: static site configuration.

The English wording follows the entry experience specified in `AGENTS.md`. The worlds use the same layout and typography, with navy/ivory for Academic and warmer tones for Elsewhere. System fonts avoid external font requests.

## Next stages and owner decisions

No decision is required to run Stage 1. Before publication, review the wording and appearance. Photos, CV downloads, project stories and bilingual content belong to later stages and need your selected public materials.

GitHub Pages deployment is prepared in `.github/workflows/deploy.yml`. In the repository on GitHub, open Settings → Pages and set Source to GitHub Actions. A push to `main` builds and publishes the site. The workflow uses the `/personal-website/` base path; local development keeps `/`. The expected address after successful deployment is `https://liviam123.github.io/personal-website/`. No custom domain is needed.

To remove this temporary public site later, open Settings → Pages and use Unpublish site. If you also want to prevent future pushes from publishing it again, disable the deployment workflow under Actions.

Earlier portfolio draft work is preserved outside this repository at `/workspace/scratch/academic-draft/` for possible Stage 2 reuse. It is not part of this foundation website or a permanent GitHub backup.
