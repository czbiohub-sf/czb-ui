// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";

export default {
  input: {
    index: "src/index.ts",
    "schema-blocks/index": "src/schemas/index.ts",
    "components/index": "src/components/index.ts",
  },
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [typescript(), del({ targets: "dist/*", runOnce: true })],
  external: [
    /^@emotion\/.*/,
    /^@mui\/.*/,
    /^react\/.*/,
    /^next\/.*/,
    /^tinacms\/.*/,
    /^@czb-ui\/.*/,
  ],
};
