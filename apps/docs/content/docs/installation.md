---
title: Installation
---

# Installation

To install czb-ui (starting from a project without Material UI or SDS),
run the command:

```shell
npm install @czb-ui/core czifui @emotion/css @emotion/react @emotion/styled @mui/base @mui/material @mui/icons-material @mui/lab

```

Additionally, install the needed fonts using [Fontsource](https://github.com/fontsource/fontsource):

```shell
npm install @fontsource/hanken-grotesk @fontsource/stix-two-text @fontsource/barlow @fontsource/lato @fontsource/jetbrains-mono

```

Next, set up the ThemeProvider at the root of your application.
Additionally import the fonts installed.

```javascript
import { ThemeProvider } from "@czb-ui/core";

import "@fontsource/hanken-grotesk/400.css";
import "@fontsource/hanken-grotesk/700.css";
import "@fontsource/stix-two-text/600.css";
import "@fontsource/lato/700.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/400.css";
import "@fontsource/jetbrains-mono/400.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```
