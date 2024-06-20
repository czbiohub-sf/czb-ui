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
  onwarn(warning, warn) {
    if (
      warning.code === "MODULE_LEVEL_DIRECTIVE" &&
      warning.message.includes(`'use client'`)
    ) {
      return;
    }
    warn(warning);
  },
  external: [
    /^@emotion\/.*/,
    /^@mui\/.*/,
    /^react\.*/,
    "uuid",
    /^@czi-sds\/.*/,
    /^@fontsource\/.*/,
    "hamburger-react",
    "tslib", // tslib for some reason needs to be in FullScreenIFrame
  ],
};
