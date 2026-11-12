/**
 * Fixes a known Next.js 14 bug in next/font/google:
 * https://github.com/vercel/next.js/issues/99114
 *
 * Google Fonts occasionally serves extensionless font URLs
 * (https://fonts.gstatic.com/l/font?kit=...&skey=...&v=v21) with HTTP 200.
 * The stock loader does `/\.(woff|woff2|eot|ttf|otf)$/.exec(url)[1]` which
 * throws `TypeError: Cannot read properties of null (reading '1')` and fails
 * the build. The response body is still a valid woff2 (the CSS declares
 * format('woff2')), so we fall back to 'woff2' — the same fix Next.js shipped
 * for 16.4.3 / 15.x LTS.
 *
 * Runs automatically via the "postinstall" script so it is re-applied after
 * every `npm install`. Safe to run multiple times.
 */
const fs = require("fs");
const path = require("path");

const target = path.join(
  __dirname,
  "..",
  "node_modules",
  "next",
  "dist",
  "compiled",
  "@next",
  "font",
  "dist",
  "google",
  "loader.js"
);

const OLD_SNIPPET = "const ext = /\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl)[1];";
const NEW_SNIPPET =
  'const ext = (/\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl) || [null, "woff2"])[1];';

try {
  const source = fs.readFileSync(target, "utf8");

  if (source.includes(NEW_SNIPPET)) {
    console.log("[patch-next-font] already patched, skipping");
    process.exit(0);
  }

  if (!source.includes(OLD_SNIPPET)) {
    console.warn(
      "[patch-next-font] WARNING: expected snippet not found — Next.js may have changed " +
        "this file. If builds fail with 'Cannot read properties of null', apply the fix manually:\n" +
        "  " + NEW_SNIPPET
    );
    process.exit(0);
  }

  fs.writeFileSync(target, source.replace(OLD_SNIPPET, NEW_SNIPPET), "utf8");
  console.log("[patch-next-font] patched next/font/google loader (extensionless font URL fix)");
} catch (err) {
  console.warn("[patch-next-font] WARNING: could not patch loader.js —", err.message);
  process.exit(0);
}
