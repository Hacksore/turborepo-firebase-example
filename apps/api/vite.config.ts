import { defineConfig } from "vite";
import generatePackageJson from "rollup-plugin-generate-package-json";
import packageJson from "./package.json" assert { type: "json" }; 
import { builtinModules } from "node:module";

// NOTE: the @acme/shared package cannot be included into the deps casue it will attempt to be installed in
// the firebase function build step and fail, so as a work around we are using a bundler to move the code into the final bundle that we ship to firebase

// NOTE: we are using vite for bundling but "native" support for nodejs is not yet available
// for the tracking of that there is the following issue and if that is solved this implementation may change
// https://github.com/vitejs/vite/issues/7821

const external = [...builtinModules, ...builtinModules.map((m) => `node:${m}`)];

export default defineConfig({
  build: {
    ssr: "./src/index.ts",
    outDir: "dist",
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
      preserveSymlinks: true,
      external,
      plugins: [
        generatePackageJson({
          // @ts-ignore
          baseContents: packageJson,
        }),
      ],
    },
  },
  ssr: {
    external,
  },
});
