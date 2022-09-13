// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [typescript(), del({ targets: "dist/*" })],
  external: [/^@emotion\/.*/, /^@mui\/.*/, /^react\.*/, /^@rjsf\/.*/],
};
