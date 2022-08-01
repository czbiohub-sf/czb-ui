// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: {
    index: "src/index.ts",
    "templates/index": "src/templates/index.ts",
    "components/index": "src/components/index.ts",
    "utils/index": "src/utils/index.ts",
  },
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [typescript(), del({ targets: "dist/*", runOnce: true }), resolve()],
  external: [
    /^@emotion\/.*/,
    /^@mui\/.*/,
    /^react\/.*/,
    /^next\/.*/,
    /^tinacms\/.*/,
    /^@czb-ui\/.*/,
    "react",
  ],
};
