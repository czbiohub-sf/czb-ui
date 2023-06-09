import React from "react";
import { ThemeProvider } from "@czb-ui/core/src";

import "@fontsource/hanken-grotesk/400.css";
import "@fontsource/hanken-grotesk/700.css";
import "@fontsource/stix-two-text/600.css";
import "@fontsource/lato/700.css";
import "@fontsource/barlow/600.css";

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
