// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import { babel } from "@rollup/plugin-babel";

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
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    del({ targets: "dist/*", runOnce: true }),
    babel({ babelHelpers: "bundled" }),
  ],
  external: [
    /^@emotion\/.*/,
    /^@mui\/.*/,
    /^react\.*/,
    /^@rjsf\/.*/,
    /^@czb-ui\/.*/,
    "czifui",
  ],
};
