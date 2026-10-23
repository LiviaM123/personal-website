import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { chromium } from 'playwright';

let server, browser;
before(async () => {
  server = spawn('python3', ['-m', 'http.server', '3100', '--bind', '127.0.0.1', '--directory', 'dist'], { stdio: 'ignore' });
  for (let i = 0; i < 40; i++) { try { if ((await fetch('http://127.0.0.1:3100')).ok) break; } catch {} await new Promise((resolve) => setTimeout(resolve, 100)); }
  browser = await chromium.launch({ headless: true, ...(existsSync('/usr/bin/chromium') ? { executablePath: '/usr/bin/chromium' } : {}) });
});
after(async () => { await browser?.close(); server?.kill(); });

test('English and Chinese routes preserve the current page', async () => {
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:3100/academic/');
  assert.equal(await page.locator('.profile-sidebar h1').innerText(), 'Wenxi Miao');
  await page.getByRole('link', { name: '中文' }).click();
  assert.equal(page.url(), 'http://127.0.0.1:3100/zh/academic/');
  assert.equal(await page.locator('.profile-sidebar h1').innerText(), '缪文希');
  await page.locator('.academic-section').first().click();
  assert.equal(page.url(), 'http://127.0.0.1:3100/zh/academic/healthcare-strategy/');
  await page.getByRole('link', { name: 'EN' }).click();
  assert.equal(page.url(), 'http://127.0.0.1:3100/academic/healthcare-strategy/');
  await page.close();
});

test('academic archive has exactly three sections and no rejected icon assets', async () => {
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:3100/academic/');
  assert.equal(await page.locator('.academic-section').count(), 3);
  assert.equal(await page.locator('svg, [src*="icon-concepts"], [class*="world-mark"]').count(), 0);
  for (const section of await page.locator('.academic-section').all()) assert.equal((await page.request.get(new URL(await section.getAttribute('href'), page.url()).href)).status(), 200);
  await page.close();
});

test('all public pages fit phone, tablet and desktop and local links resolve', async () => {
  const page = await browser.newPage();
  const routes = ['/', '/academic/', '/academic/healthcare-strategy/', '/academic/education-outreach/', '/academic/life-sciences-research/', '/elsewhere/', '/zh/', '/zh/academic/', '/zh/academic/healthcare-strategy/', '/zh/academic/education-outreach/', '/zh/academic/life-sciences-research/', '/zh/elsewhere/'];
  for (const width of [320, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      const response = await page.goto(`http://127.0.0.1:3100${route}`);
      assert.equal(response.status(), 200, route);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `${width}: ${route}`);
      const hrefs = await page.locator('a').evaluateAll((links) => links.map((link) => link.getAttribute('href')).filter((href) => href?.startsWith('/')));
      for (const href of hrefs) assert.equal((await page.request.get(`http://127.0.0.1:3100${href}`)).status(), 200, href);
    }
  }
  await page.close();
});
