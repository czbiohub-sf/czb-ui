import React from "react";
import { ThemeProvider } from "@czb-ui/core/src";

import "@fontsource/barlow";
import "@fontsource/lato";
import "@fontsource/hanken-grotesk";
import "@fontsource/stix-two-text";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
