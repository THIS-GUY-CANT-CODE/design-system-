/**
 * Token file merge utility  (COMPLETED — kept for reference)
 * ────────────────────────────────────────────────────────────
 * Consolidated 6 Figma token JSON exports → 2 canonical files:
 *
 *   Light_Mode.tokens.json  ┐
 *   Light_Mode.tokens-1.json┘ → tokens/light.json  (Semantic)
 *
 *   Mode.tokens.json        ┐
 *   Mode.tokens-1.json      │
 *   Mode_1.tokens.json      │→ tokens/dark.json  (Primitives + Component)
 *   Mode_1.tokens-1.json    ┘
 *
 * STATUS: Merge complete. The 6 original files have been deleted.
 *         tokens/light.json and tokens/dark.json are the sole source of truth.
 *
 * Original run command:  npx tsx src/imports/tokens/build-tokens.ts
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";

const ROOT = resolve(dirname(new URL(import.meta.url).pathname), "..");

function deepMerge(target: any, source: any): any {
  const out = { ...target };
  for (const key of Object.keys(source)) {
    if (
      out[key] &&
      typeof out[key] === "object" &&
      !Array.isArray(out[key]) &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
      out[key] = deepMerge(out[key], source[key]);
    } else {
      out[key] = source[key];
    }
  }
  return out;
}

function load(name: string) {
  return JSON.parse(readFileSync(resolve(ROOT, name), "utf-8"));
}

// ── Light (Semantic) ────────────────────────────────────────
const lightA = load("Light_Mode.tokens.json");
const lightB = load("Light_Mode.tokens-1.json");
const light = deepMerge(lightA, lightB);
light["$extensions"] = { "com.figma.modeName": "Light Mode (merged)" };

// ── Dark (Primitives + Component) ───────────────────────────
const modeA = load("Mode.tokens.json");
const modeB = load("Mode.tokens-1.json");
const mode1A = load("Mode_1.tokens.json");
const mode1B = load("Mode_1.tokens-1.json");

const primitives = deepMerge(modeA, modeB);
const components = deepMerge(mode1A, mode1B);
const dark = deepMerge(primitives, components);
dark["$extensions"] = {
  "com.figma.modeName": "Primitives + Component (merged)",
};

// ── Write ───────────────────────────────────────────────────
const OUT = resolve(ROOT, "tokens");
mkdirSync(OUT, { recursive: true });
writeFileSync(resolve(OUT, "light.json"), JSON.stringify(light, null, 2));
writeFileSync(resolve(OUT, "dark.json"), JSON.stringify(dark, null, 2));

console.log("✓ tokens/light.json written");
console.log("✓ tokens/dark.json written");
console.log(
  "\nYou can now delete the 6 original files:\n" +
    "  Light_Mode.tokens.json, Light_Mode.tokens-1.json\n" +
    "  Mode.tokens.json, Mode.tokens-1.json\n" +
    "  Mode_1.tokens.json, Mode_1.tokens-1.json"
);