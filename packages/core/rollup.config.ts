// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";

export default {
  input: "src/index.tsx",
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
  ],
  external: [
    /^@emotion\/.*/,
    /^@mui\/.*/,
    /^react\.*/,
    "uuid",
    "czifui",
    "hamburger-react",
  ],
};
