---
title: Installation
---

# Installation

To install czb-ui (starting from a project without Material UI or SDS),
run the command:

```shell

npm install @czb-ui/core czifui @emotion/css @emotion/react
@emotion/styled @mui/base @mui/material @mui/icons-material @mui/lab

```

Additionally, install the needed fonts using [Fontsource](https://github.com/fontsource/fontsource):

```shell

npm install @fontsource/hanken-grotesk @fontsource/stix-two-text @fontsource/barlow @fontsource/lato

```

Next, set up the ThemeProvider at the root of your application.
Additionally import the fonts installed.

```javascript
import { ThemeProvider } from "@czb-ui/core";

import "@fontsource/barlow/700.css"; // We only need bold weight
import "@fontsource/lato/700.css"; // We only need bold weight
import "@fontsource/hanken-grotesk";
import "@fontsource/stix-two-text";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```
