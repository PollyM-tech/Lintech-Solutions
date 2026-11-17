import { readFile, writeFile } from "node:fs/promises";
import { render } from "../dist-ssr/entry-server.js";

const output = new URL("../dist/index.html", import.meta.url);
const template = await readFile(output, "utf8");
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error("Homepage root placeholder missing; cannot prerender safely.");
}

// Use a callback so dollar signs in rendered content remain literal.
await writeFile(output, template.replace(placeholder, () => `<div id="root">${render()}</div>`));
console.log("Prerendered homepage into dist/index.html");
