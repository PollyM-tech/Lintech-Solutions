import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { servicePages } from "../src/data/service-pages.js";

const dist = new URL("../dist/", import.meta.url);
const html = await readFile(new URL("index.html", dist), "utf8");
assert.equal([...html.matchAll(/<h1\b/g)].length, 1, "Expected one main heading");
for (const text of ["Internet, WiFi &amp; CCTV in Nairobi &amp; Kiambu", "Kahawa Sukari", "0717 371 134"]) {
  assert.ok(html.includes(text), `Missing prerendered content: ${text}`);
}
assert.ok(html.includes('rel="canonical" href="https://lintechtelecom.com/"'));
assert.ok(html.includes('name="description" content="'));
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
  assert.ok(ids.has(anchor), `Broken section link: #${anchor}`);
}
for (const [, path] of html.matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g)) {
  await access(new URL(decodeURIComponent(path.slice(1)), dist));
}
for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
  JSON.parse(json);
}
assert.equal([...html.matchAll(/gtm\.js\?id=GTM-K2VL5XDD/g)].length, 1);
const verification = "google70f4978ad4dafef2.html";
assert.equal(await readFile(new URL(verification, dist), "utf8"),
  await readFile(new URL(`../public/${verification}`, import.meta.url), "utf8"));
for (const file of ["robots.txt", "sitemap.xml"]) {
  assert.ok((await readFile(new URL(file, dist), "utf8")).includes("https://lintechtelecom.com/"));
}
const sitemap = await readFile(new URL("sitemap.xml", dist), "utf8");
for (const page of servicePages) {
  const detail = await readFile(new URL(`.${page.path}index.html`, dist), "utf8");
  assert.equal([...detail.matchAll(/<h1\b/g)].length, 1);
  assert.ok(detail.includes(page.heading.replaceAll("&", "&amp;")), `Missing content: ${page.path}`);
  assert.ok(detail.includes(`rel="canonical" href="https://lintechtelecom.com${page.path}"`));
  assert.ok(detail.includes('name="twitter:description" content="'));
  assert.ok(sitemap.includes(`https://lintechtelecom.com${page.path}`));
  for (const [, path] of detail.matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g)) {
    await access(new URL(decodeURIComponent(path.slice(1)), dist));
  }
}
console.log("SEO checks passed: homepage and service pages, headings, metadata, links, assets, structured data, GTM, sitemap, and verification file.");
