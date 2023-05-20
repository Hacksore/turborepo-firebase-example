import { resolve } from "path";
import { defineConfig } from "vite";
import generatePackageJson from "rollup-plugin-generate-package-json";
import { dependencies } from "./package.json";

const basePackage = {
  name: "api",
  version: "1.0.0",
  engines: {
    node: "18",
  },
  files: ["build"],
  main: "./index.umd.js",
  module: "./index.js",
  exports: {
    ".": {
      import: "./index.js",
      require: "./index.umd.js",
    },
  },
};

// NOTE: we are using vite for bundling but "native" support for nodejs is not yet available
// for the tracking of that there is the following issue and if that is solved this implementation may change
// https://github.com/vitejs/vite/issues/7821
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "firebase-functions-lib",
      fileName: "index",
      formats: ["es", "umd"],
    },
    outDir: "dist",
    rollupOptions: {
      external: Object.keys(dependencies),
      plugins: [
        generatePackageJson({
          baseContents: basePackage,
          additionalDependencies: {
            // NOTE: these will fall out of date quickly, probably best to just use the versions from package.json
            "firebase-functions": "^4.2.1",
            "firebase-admin": "^11.5.0",
          },
        }),
      ],
    },
  },
});
