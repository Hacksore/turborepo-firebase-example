import { resolve } from "path";
import { defineConfig } from "vite";
import generatePackageJson from "rollup-plugin-generate-package-json";
import { dependencies } from "./package.json";

const basePackage = {
  name: "api",
  version: "1.0.0",
  engines: {
    node: "16",
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
            "firebase-functions": "^4.2.1",
            "firebase-admin": "^11.5.0",
          },
        }),
      ],
    },
  },
});
