// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [typescript(), del({ targets: "dist/*", runOnce: true })],
  external: [
    /^@emotion\/.*/,
    /^@mui\/.*/,
    /^react\/.*/,
    "uuid",
    "czifui",
    "hamburger-react",
  ],
};
