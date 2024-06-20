---
"@czb-ui/core": major
---

Use `href=` instead of `to=` for buttons and link components. This is related to using routers for navigation (e.g. Next.js' `Link` component). If using Next.js, you'll need to use Next.js' `Link` component for the `pagesComponent` prop:

```jsx
import NextLink from "next/link";
import { InfoBox } from "@czb-ui/core";

// ...

<InfoBox
  page={{
    title: "About page",
    to: "/about",
  }}
  pagesComponent={NextLink}
/>;
```
