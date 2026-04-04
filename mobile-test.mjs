import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const dir = '/tmp/mobile-test';
mkdirSync(dir, { recursive: true });

const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
const page = await ctx.newPage();

const pages = [
  ['home', '/cz'],
  ['shop', '/cz/shop'],
  ['product', '/cz/product/cutie'],
  ['cart', '/cz/cart'],
  ['about', '/cz/about'],
  ['contact', '/cz/contact'],
  ['checkout', '/cz/checkout'],
];

for (const [name, path] of pages) {
  await page.goto(`http://localhost:3100${path}`, { waitUntil: 'load', timeout: 15000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${dir}/${name}.png`, fullPage: true });
  console.log(`${name}: done`);
}

await browser.close();
console.log('All screenshots saved to', dir);
