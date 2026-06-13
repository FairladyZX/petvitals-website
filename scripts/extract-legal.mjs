import fs from "node:fs";

const footerText = new Set([
  "Product",
  "F.A.Q.",
  "The Pet's Wingman",
  "Company",
  "Terms",
  "Privacy",
  "Contact Us",
  "Account Deletion",
  "Follow Us!",
]);

function decodeHtml(value) {
  return value
    .replace(/<br class="wixui-rich-text__text">/g, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&rsquo;/g, "’")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&zwj;/g, "")
    .replace(/\u200b/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extract(file, title) {
  const html = fs.readFileSync(file, "utf8");
  const spans = [...html.matchAll(/<span[^>]*class="wixui-rich-text__text"[^>]*>([\s\S]*?)<\/span>/g)]
    .map((match) => decodeHtml(match[1]))
    .filter((text) => text && !footerText.has(text));

  const unique = [];
  for (const text of spans) {
    if (unique[unique.length - 1] !== text) unique.push(text);
  }

  const content = unique.filter((text) => text !== title);
  return [{ id: "content", title, paragraphs: content }];
}

const data = {
  privacy: extract("docs/source-privacy.html", "Privacy Policy"),
  terms: extract("docs/source-terms.html", "Terms and Conditions"),
  accountDeletion: extract(
    "docs/source-account-deletion.html",
    "PetVitals – Account Deletion Request",
  ),
};

fs.writeFileSync("data/legal-content.json", `${JSON.stringify(data, null, 2)}\n`);
