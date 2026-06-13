import fs from "node:fs";
import path from "node:path";

const pages = [
  "/",
  "/features",
  "/about",
  "/blog",
  "/terms",
  "/privacy",
  "/contactus",
  "/account-deletion",
];

const baseUrl = "https://www.petvitals.app";
const root = process.cwd();
const assetsDir = path.join(root, "public", "assets");
const docsDir = path.join(root, "docs");

fs.mkdirSync(assetsDir, { recursive: true });
fs.mkdirSync(docsDir, { recursive: true });

function pageFilename(pagePath) {
  if (pagePath === "/") return "source-home.html";
  return `source-${pagePath.slice(1).replace(/\//g, "-")}.html`;
}

function cleanFilename(sourceUrl, contentType) {
  const parsed = new URL(sourceUrl);
  let name = decodeURIComponent(parsed.pathname.split("/").pop() || "asset");
  name = name
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 90);

  const mimeExt =
    {
      "image/png": "png",
      "image/jpeg": "jpg",
      "image/webp": "webp",
      "image/svg+xml": "svg",
      "image/x-icon": "ico",
      "image/avif": "avif",
    }[contentType.split(";")[0]] || "";

  if (!name) name = "asset";
  if (!path.extname(name) && mimeExt) name += `.${mimeExt}`;
  return name;
}

function uniqueFilename(filename) {
  let candidate = filename;
  let index = 1;
  const ext = path.extname(filename);
  const stem = ext ? filename.slice(0, -ext.length) : filename;

  while (fs.existsSync(path.join(assetsDir, candidate))) {
    candidate = `${stem}-${index}${ext}`;
    index += 1;
  }

  return candidate;
}

function extractMeta(html, nameOrProperty) {
  const escaped = nameOrProperty.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const direct = html.match(
    new RegExp(
      `<meta[^>]+(?:name|property)=["']${escaped}["'][^>]+content=["']([^"']*)`,
      "i",
    ),
  );
  if (direct) return direct[1];

  const reversed = html.match(
    new RegExp(
      `<meta[^>]+content=["']([^"']*)["'][^>]+(?:name|property)=["']${escaped}["']`,
      "i",
    ),
  );
  return reversed?.[1] || "";
}

const pageData = [];
const assetUrls = new Set();

for (const pagePath of pages) {
  const url = `${baseUrl}${pagePath}`;
  const response = await fetch(url);
  const html = await response.text();

  fs.writeFileSync(path.join(docsDir, pageFilename(pagePath)), html);

  const title = html.match(/<title[^>]*>([^<]*)/i)?.[1] || "";
  const description = extractMeta(html, "description");
  const ogImage = extractMeta(html, "og:image");

  pageData.push({
    path: pagePath,
    url,
    status: response.status,
    title,
    description,
    ogImage,
  });

  if (ogImage) assetUrls.add(ogImage);

  for (const match of html.matchAll(/https?:\/\/[^"'<>\s)]+/g)) {
    const sourceUrl = match[0].replace(/&amp;/g, "&");
    const looksLikeWixAsset =
      sourceUrl.includes("static.wixstatic.com/media/") ||
      sourceUrl.includes("static.wixstatic.com/shapes/") ||
      sourceUrl.includes("static.parastorage.com/");
    const looksLikeImage =
      /\.(png|jpe?g|webp|svg|ico|avif)(\?|$)/i.test(sourceUrl) ||
      sourceUrl.includes("~mv2");

    if (looksLikeWixAsset && looksLikeImage) {
      assetUrls.add(sourceUrl);
    }
  }
}

const assets = [];

for (const sourceUrl of [...assetUrls]) {
  try {
    const response = await fetch(sourceUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const contentType = response.headers.get("content-type") || "";
    const buffer = Buffer.from(await response.arrayBuffer());
    const filename = uniqueFilename(cleanFilename(sourceUrl, contentType));

    fs.writeFileSync(path.join(assetsDir, filename), buffer);
    assets.push({
      source: sourceUrl,
      file: `/assets/${filename}`,
      bytes: buffer.length,
      contentType,
    });
  } catch (error) {
    assets.push({
      source: sourceUrl,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

const missing = assets.filter((asset) => asset.error);

fs.writeFileSync(
  path.join(docsDir, "crawl-report.json"),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      pages: pageData,
      assetCount: assets.filter((asset) => !asset.error).length,
      assets,
    },
    null,
    2,
  ),
);

fs.writeFileSync(
  path.join(docsDir, "missing-assets.md"),
  missing.length
    ? `# Missing Assets\n\n${missing
        .map((asset) => `- ${asset.source}: ${asset.error}`)
        .join("\n")}\n`
    : "# Missing Assets\n\nNo public asset extraction failures were detected during Phase 1 crawl.\n",
);

console.log(
  JSON.stringify(
    {
      pages: pageData.length,
      assetUrls: assetUrls.size,
      downloaded: assets.filter((asset) => !asset.error).length,
      missing: missing.length,
    },
    null,
    2,
  ),
);
