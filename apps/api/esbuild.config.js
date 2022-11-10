import esbuild from "esbuild";

// HACK: to stub some things
const jsBanner = `
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
`;

console.log("node env", process.env.NODE_ENV);

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    outfile: "dist/index.js",
    bundle: true,
    format: "esm",
    target: "node16",
    banner: {
      js: jsBanner,
    },
    watch: process.env.NODE_ENV !== "production",
    platform: "node",
    sourcemap: "inline",
  })
  .catch(() => process.exit(1));
