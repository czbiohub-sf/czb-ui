# czb-ui

High level components for CZ Biohub. Based on [CZI's Science Design System](https://github.com/chanzuckerberg/sci-components) and [Material UI v5](https://mui.com/).

## Installation

```
npm install @czb-ui/core czifui @emotion/css @emotion/react @emotion/styled @mui/base @mui/material @mui/icons-material @mui/lab
```

Additionally, install the needed fonts:

```
npm install @fontsource/barlow @fontsource/hanken-grotesk @fontsource/stix-two-text @fontsource/lato
```

## Usage

Wrap the `ThemeProvider` in your main `app.js` file and import the fonts at their specific weights.

```jsx
import { ThemeProvider } from "@czb-ui/core";

import "@fontsource/hanken-grotesk/400.css";
import "@fontsource/hanken-grotesk/700.css";
import "@fontsource/stix-two-text/600.css";
import "@fontsource/lato/700.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/400.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```
