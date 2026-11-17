import { readFile, writeFile, mkdir } from "node:fs/promises";
import { render } from "../dist-ssr/entry-server.js";
import { servicePages } from "../src/data/service-pages.js";

const dist = new URL("../dist/", import.meta.url);
const template = await readFile(new URL("index.html", dist), "utf8");
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) throw new Error("Root placeholder missing; cannot prerender safely.");
const escape = (text) => text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
const pages = [{ path: "/" }, ...servicePages];
for (const page of pages) {
  let html = template;
  if (page.title) {
    html = html.replace(/<title>[^<]*<\/title>/, () => `<title>${escape(page.title)}</title>`);
    for (const key of ["description", "og:description", "twitter:description"]) {
      html = html.replace(new RegExp(`((?:name|property)="${key}" content=")[^"]*"`), (match, prefix) => `${prefix}${escape(page.description)}"`);
    }
    for (const key of ["og:title", "twitter:title"]) {
      html = html.replace(new RegExp(`((?:name|property)="${key}" content=")[^"]*"`), (match, prefix) => `${prefix}${escape(page.title)}"`);
    }
    html = html.replace('rel="canonical" href="https://lintechtelecom.com/"', `rel="canonical" href="https://lintechtelecom.com${page.path}"`);
    html = html.replace('property="og:url" content="https://lintechtelecom.com/"', `property="og:url" content="https://lintechtelecom.com${page.path}"`);
  }
  const directory = new URL(`.${page.path}`, dist);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), html.replace(placeholder, () => `<div id="root">${render(page.path)}</div>`));
  console.log(`Prerendered ${page.path}`);
}
await writeFile(new URL("sitemap.xml", dist), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((page) => `  <url><loc>https://lintechtelecom.com${page.path}</loc></url>`).join("\n")}\n</urlset>\n`);
