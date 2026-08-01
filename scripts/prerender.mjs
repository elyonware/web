// Prerenders each route to static HTML after `vite build`, so search engines
// and AI crawlers that don't execute JavaScript (GPTBot, ClaudeBot,
// PerplexityBot, etc.) see real content instead of an empty <div id="root">.
//
// This is a full-page snapshot, not true SSR/hydration: Playwright loads the
// built app in a real Chromium, waits for React + the SEO component's head
// mutations to settle, then saves the resulting DOM as static HTML. The
// client bundle still loads and re-renders on top when a browser visits.

import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

const ROUTES = ["/", "/about", "/careers", "/careers/apply", "/careers/apply-fulltime", "/contact"];

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok || res.status === 404) return resolve();
      } catch {
        // not up yet
      }
      if (Date.now() - start > timeoutMs) return reject(new Error(`Preview server did not start within ${timeoutMs}ms`));
      setTimeout(tick, 300);
    };
    tick();
  });
}

async function main() {
  if (!existsSync(distDir)) {
    throw new Error("dist/ not found — run `vite build` before prerendering.");
  }

  const preview = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], {
    cwd: root,
    stdio: "pipe",
    shell: true,
  });
  preview.stderr.on("data", (d) => process.stderr.write(d));

  try {
    await waitForServer(BASE_URL);

    const browser = await chromium.launch();
    const page = await browser.newPage();

    for (const routePath of ROUTES) {
      const url = `${BASE_URL}${routePath}`;
      await page.goto(url, { waitUntil: "networkidle" });
      // Let post-mount effects (SEO title/meta, animations) settle.
      await page.waitForTimeout(400);

      const html = await page.content();

      const outDir = routePath === "/" ? distDir : path.join(distDir, routePath.replace(/^\//, ""));
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, "index.html"), html, "utf8");
      console.log(`Prerendered ${routePath} -> ${path.relative(root, path.join(outDir, "index.html"))}`);
    }

    await browser.close();
  } finally {
    preview.kill();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
