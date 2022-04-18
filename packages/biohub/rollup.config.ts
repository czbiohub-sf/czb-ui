// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    typescript(),
    nodeResolve({ browser: true, resolveOnly: ["@cz-ui/core"] }),
  ],
};
