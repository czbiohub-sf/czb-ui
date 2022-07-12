// rollup.config.js
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [typescript()],
  external: [
    /^@emotion\/.*/,
    /^@mui\/.*/,
    /^react\/.*/,
    "uuid",
    "czifui",
    "hamburger-react",
  ],
};
