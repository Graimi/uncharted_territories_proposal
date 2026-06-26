import puppeteer from 'puppeteer';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 960, height: 680 });
const filePath = 'file:///' + resolve(__dirname, 'public/concept-graph-preview.html').replace(/\\/g, '/');
console.log('loading:', filePath);
await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 15000 });
await new Promise(r => setTimeout(r, 2000));
const outPath = resolve(__dirname, 'public/uploads/concept-graph.png');
await page.screenshot({ path: outPath });
await browser.close();
console.log('saved:', outPath);
