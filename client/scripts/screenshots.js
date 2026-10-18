// Rebuild the README screenshots from the demo build.
//
//   cd client
//   npx playwright install chromium   (first run only)
//   npm run screenshots
//
// Builds with `--mode demo`, serves it with `vite preview`, signs in with the
// demo flow, and writes WebP files to docs/screenshots/. Chromium does the
// WebP encoding through canvas, so there is no image library to install.
import { mkdir, writeFile } from "node:fs/promises";
import { build, preview } from "vite";
import { chromium } from "playwright";

const OUT = new URL("../../docs/screenshots/", import.meta.url);
const PORT = 4174;
const BASE = `http://localhost:${PORT}`;
const QUALITY = 0.82;

const shots = [
  {
    file: "alumni-desktop.webp",
    viewport: { width: 1280, height: 800 },
    path: "/alumni",
    signIn: true,
  },
  {
    file: "alumni-desktop-dark.webp",
    viewport: { width: 1280, height: 800 },
    path: "/alumni?q=bengaluru",
    signIn: true,
    dark: true,
  },
  {
    file: "login-desktop.webp",
    viewport: { width: 1280, height: 800 },
    path: "/auth?mode=login",
  },
  {
    file: "alumni-phone.webp",
    viewport: { width: 390, height: 844 },
    scale: 2,
    path: "/alumni",
    signIn: true,
  },
  {
    file: "login-phone.webp",
    viewport: { width: 390, height: 844 },
    scale: 2,
    path: "/auth?mode=login",
  },
];

const toWebp = (page, png) =>
  page.evaluate(
    async ({ base64, quality }) => {
      const img = new Image();
      img.src = `data:image/png;base64,${base64}`;
      await img.decode();
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext("2d").drawImage(img, 0, 0);
      return canvas.toDataURL("image/webp", quality).split(",")[1];
    },
    { base64: png.toString("base64"), quality: QUALITY }
  );

await build({ mode: "demo", logLevel: "warn" });
const server = await preview({ preview: { port: PORT, strictPort: true } });
const browser = await chromium.launch();
await mkdir(OUT, { recursive: true });

try {
  for (const shot of shots) {
    const page = await browser.newPage({
      viewport: shot.viewport,
      deviceScaleFactor: shot.scale ?? 1,
    });
    if (shot.signIn) {
      await page.goto(`${BASE}/auth?mode=login`);
      await page.fill("input[name=email]", "demo@example.com");
      await page.fill("input[name=password]", "mcanitw-demo");
      await page.click("button[type=submit]");
      await page.waitForURL(`${BASE}/`);
    }
    await page.goto(`${BASE}${shot.path}`);
    await page.waitForLoadState("networkidle");
    if (shot.dark) {
      await page.click("#root > div > div:first-child button");
    }
    // Let web fonts and the card hover transition settle
    await page.waitForTimeout(400);
    const webp = await toWebp(page, await page.screenshot());
    const bytes = Buffer.from(webp, "base64");
    await writeFile(new URL(shot.file, OUT), bytes);
    console.log(`${shot.file}  ${(bytes.length / 1024).toFixed(1)} KiB`);
    await page.close();
  }
} finally {
  await browser.close();
  await new Promise(resolve => server.httpServer.close(resolve));
}
