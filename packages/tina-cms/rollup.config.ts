// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
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
