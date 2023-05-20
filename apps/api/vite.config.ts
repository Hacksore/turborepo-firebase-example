import { resolve } from "path";
import { defineConfig } from "vite";
import generatePackageJson from "rollup-plugin-generate-package-json";
import packageJson from "./package.json";

// NOTE: the @acme/shared package cannot be included into the deps casue it will attempt to be installed in 
// the firebase function build step and fail, so as a work around we are using a bundler to move the code into the final bundle that we ship to firebase

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
      external: Object.keys(packageJson.dependencies),
      // NOTE: Firebase requires a package.json to be present in the functions folder
      // this is a workaround to generate that file so firebase stays happy
      plugins: [
        generatePackageJson({
          baseContents: packageJson,
        }),
      ],
    },
  },
});
