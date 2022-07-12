# czb-ui

High level components for CZ Biohub. Based on [CZI's Science Design System](https://github.com/chanzuckerberg/sci-components) and [Material UI v5](https://mui.com/).

## Installation

```
npm install @czb-ui/core @mui/material @emotion/react @emotion/styled
```

Additionally, install the needed fonts:

```
npm install @fontsource/barlow @fontsource/lato
```

## Usage

Wrap the `ThemeProvider` in your main `app.js` file and import the fonts at their specific weights.

```jsx
import { ThemeProvider } from "@czb-ui/core";

// Import fonts at their various weights
// 400 is normal, 700 is bold
import "@fontsource/barlow/700.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```
