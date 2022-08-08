const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config) {
    // customize the Vite config here
    return {
      ...config,
      define: {
        "process.env": {},
      },
      resolve: {
        alias: [
          {
            find: "@czb-ui/core",
            replacement: path.resolve(__dirname, "../../../packages/core/"),
          },
          {
            find: "@czb-ui/biohub-logos",
            replacement: path.resolve(
              __dirname,
              "../../../packages/biohub-logos/"
            ),
          },
        ],
      },
    };
  },
};
