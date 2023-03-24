import { ThemeProvider } from "@czb-ui/core/src";

import "@fontsource/barlow/700.css"; // We only need bold weight
import "@fontsource/lato/700.css"; // We only need bold weight
import "@fontsource/hanken-grotesk";
import "@fontsource/stix-two-text";

// Import Butler font
import "../stories/assets/fonts/Butler.css";

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
