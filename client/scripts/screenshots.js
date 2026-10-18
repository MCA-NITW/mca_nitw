// Rebuild the README screenshots from the demo build.
//
//   cd client
//   npx playwright install chromium   (first run only)
//   npm run screenshots
//
// Builds with `--mode demo`, serves it with `vite preview`, signs in with the
// demo flow, and writes WebP files to docs/screenshots/. Chromium does the
// WebP encoding through canvas, so there is no image library to install.
import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { build, preview } from "vite";
import { chromium } from "playwright";

const OUT = join(import.meta.dirname, "../../docs/screenshots");
const PORT = 4174;
const BASE = `http://localhost:${PORT}`;
const QUALITY = 0.82;

const DESKTOP = { viewport: { width: 1280, height: 800 } };
const PHONE = { viewport: { width: 390, height: 844 }, scale: 2 };

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

// Each shot gets its own page, and so its own demo session
const capture = async shot => {
  const page = await browser.newPage({
    viewport: shot.viewport,
    deviceScaleFactor: shot.scale ?? 1,
  });
  if (shot.signIn) {
    // Demo mode accepts any email with an 8+ character password
    await page.goto(`${BASE}/auth?mode=login`);
    await page.fill("input[name=email]", "demo@example.com");
    await page.fill("input[name=password]", randomUUID());
    await page.click("button[type=submit]");
    await page.waitForURL(`${BASE}/`);
  }
  await page.goto(`${BASE}${shot.path}`);
  await page.waitForLoadState("networkidle");
  if (shot.dark) {
    await page.click("#root > div > div:first-child button");
  }
  // Let web fonts load and the theme and hover transitions finish
  await page.waitForFunction(
    () =>
      document.fonts.status === "loaded" &&
      document
        .getAnimations()
        .every(
          a =>
            a.playState !== "running" ||
            a.effect?.getComputedTiming().iterations === Infinity
        )
  );
  const webp = await toWebp(page, await page.screenshot());
  await page.close();
  const bytes = Buffer.from(webp, "base64");
  console.log(
    `${shot.viewport.width}px ${shot.path}  ${(bytes.length / 1024).toFixed(1)} KiB`
  );
  return bytes;
};

try {
  await writeFile(
    join(OUT, "alumni-desktop.webp"),
    await capture({ ...DESKTOP, path: "/alumni", signIn: true })
  );
  await writeFile(
    join(OUT, "alumni-desktop-dark.webp"),
    await capture({
      ...DESKTOP,
      path: "/alumni?q=bengaluru",
      signIn: true,
      dark: true,
    })
  );
  await writeFile(
    join(OUT, "login-desktop.webp"),
    await capture({ ...DESKTOP, path: "/auth?mode=login" })
  );
  await writeFile(
    join(OUT, "alumni-phone.webp"),
    await capture({ ...PHONE, path: "/alumni", signIn: true })
  );
  await writeFile(
    join(OUT, "login-phone.webp"),
    await capture({ ...PHONE, path: "/auth?mode=login" })
  );
} finally {
  await browser.close();
  await server.close();
}
