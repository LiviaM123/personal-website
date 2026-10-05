import { defineConfig } from 'astro/config';

// GitHub Pages hosts this repository under /personal-website/.
// Local development keeps the shorter root path.
const pages = process.env.GITHUB_PAGES === 'true';
export default defineConfig({
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  ...(pages ? {
    site: 'https://liviam123.github.io',
    base: '/personal-website',
  } : {}),
});
