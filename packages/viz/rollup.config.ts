// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import preserveDirectives from "rollup-plugin-preserve-directives";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.esm.js",
      format: "esm",
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
  external: [
    /^@emotion\/.*/,
    /^@mui\/.*/,
    /^react\.*/,
    /^@deck.gl\/.*/,
    /^@loaders.gl\/.*/,
    /^@czi-sds\/.*/,
  ],
};
