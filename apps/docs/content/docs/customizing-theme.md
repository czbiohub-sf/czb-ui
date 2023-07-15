---
title: Customizing Theme
---

# Customizing Theme

It is possible to customize the default Biohub theme. For example, some of the header fonts can be changed:

```jsx
import { createCustomAppTheme } from "@czb-ui/core";

const customTheme = createCustomAppTheme({
  typography: {
    styles: {
      header: {
        xl: {
          fontFamily: "Hanken Grotesk",
        },
        xxl: {
          fontFamily: "Hanken Grotesk",
        },
      },
    },
  },
});
```

Please see [theme.ts](https://github.com/czbiohub-sf/czb-ui/blob/main/packages/core/src/theme.ts) for customization options.

When the theme is customized this way, the Material UI `ThemeProvider` needs to be used instead of the czb-ui one. `CssBaseline` also needs to be added to supply default CSS according to the theme.

```jsx
import { createCustomAppTheme } from "@czb-ui/core";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const customTheme = createCustomAppTheme({
  // ...
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```
