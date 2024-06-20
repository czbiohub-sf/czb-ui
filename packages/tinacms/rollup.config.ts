// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import resolve from "@rollup/plugin-node-resolve";
import preserveDirectives from "rollup-plugin-preserve-directives";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
  },
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    del({ targets: "dist/*", runOnce: true }),
    resolve({ resolveOnly: ["d3-dsv"] }), // d3-dsv is built weirdly (cjs only or something?). building it w/o this breaks
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
    /^react\/.*/,
    /^next\/.*/,
    /^tinacms\/.*/,
    /^@czb-ui\/.*/,
    "react",
  ],
};
