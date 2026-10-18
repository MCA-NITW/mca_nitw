// Render the 1200x630 Open Graph card to public/og.png from the logo in
// public/logo.svg, so the image link previews show stays in sync with it.
//
//   cd client
//   npm run og-image
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { chromium } from "playwright";

const logo = await readFile(
  join(import.meta.dirname, "../public/logo.svg"),
  "utf8"
);

const html = `<!doctype html>
<html>
  <head>
    <style>
      * { margin: 0; box-sizing: border-box; }
      body {
        width: 1200px;
        height: 630px;
        display: flex;
        align-items: center;
        gap: 64px;
        padding: 0 96px;
        background: #0b1f3a;
        color: #ffffff;
        font-family: Roboto, Arial, Helvetica, sans-serif;
      }
      .logo svg { width: 300px; height: 240px; }
      .logo rect:first-child { stroke: #2a4468; stroke-width: 2; }
      h1 { font-size: 64px; line-height: 1.1; }
      p { margin-top: 20px; font-size: 30px; line-height: 1.35; color: #c9d6ea; }
      .bar { width: 120px; height: 8px; margin-top: 28px; border-radius: 4px; background: #f2a900; }
      .url { margin-top: 28px; font-size: 26px; color: #f2a900; }
    </style>
  </head>
  <body>
    <div class="logo">${logo}</div>
    <div>
      <h1>MCA NIT Warangal</h1>
      <p>Alumni directory, student portal and department resources</p>
      <div class="bar"></div>
      <div class="url">mca-nitw.github.io/mca_nitw</div>
    </div>
  </body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
const png = await page.screenshot({
  path: join(import.meta.dirname, "../public/og.png"),
});
console.log(`public/og.png  ${(png.length / 1024).toFixed(1)} KiB`);
await browser.close();
