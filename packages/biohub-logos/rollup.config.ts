// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import preserveDirectives from "rollup-plugin-preserve-directives";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "cjs",
      preserveModules: true,
      entryFileNames: "[name].cjs.js",
    },
    {
      dir: "dist",
      format: "esm",
      preserveModules: true,
      entryFileNames: "[name].esm.js",
    },
  ],
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
  external: [/^@emotion\/.*/, /^@mui\/.*/, /^react\.*/],
};
