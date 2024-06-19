// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import preserveDirectives from "rollup-plugin-preserve-directives";

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
  },
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    del({ targets: "dist/*", runOnce: true }),
    preserveDirectives(),
  ],
  external: [
    /^@emotion\/.*/,
    /^@mui\/.*/,
    /^react\.*/,
    "uuid",
    /^@czi-sds\/.*/,
    /^@fontsource\/.*/,
    "hamburger-react",
  ],
};
