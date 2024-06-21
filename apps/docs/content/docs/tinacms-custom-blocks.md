---
title: 'TinaCMS: Custom Blocks'
---

# TinaCMS: Custom Blocks

Alongside the blocks and templates supplied in @czb-ui/tinacms, it is possible to add your own custom blocks and templates for your project.

In this guide, we will create a wrapper around the library "react-player". Check out an example commits of [adding custom blocks to a web portal (internal use only)](https://github.com/czbiohub-sf/zebrahub/pull/125/files/581a282a221df80419226e54205483f5beed324a..0d10972d2b1a437e1582d250310429f59e147b89).

First, create a template for TinaCMS:

```javascript
// https://tina.io/docs/editing/blocks/

export const Vimeo = {
  name: "LoopingVimeo",
  label: "Looping Vimeo",
  fields: [
    {
      type: "string",
      name: "url",
      label: "URL",
    },
  ],
};
```

Add this template to your Tina config. For the [internal portal template](https://github.com/czbiohub-sf/portal-template), this can be done by adding your template to the "templates" array in /tina/config.js

```javascript
import {
  Banner,
  Text,
  // ...
} from "@czb-ui/tinacms";
import { Vimeo } from "./customTemplates";

const templates = [
  Banner,
  Text,
  InfoBox,
  Grid,
  Table,
  LegacyInfoBox,
  HeadingSeparator,
  BannerLanding,
  Vimeo, // Here is our custom template
];
```

Next, create a component ready to be used by TinaCMS. The component will require a prop called "block", which will have the data supplied by TinaCMS/your template:

```javascript
export default function ReactPlayerBlock({
  block,
}) {
  const url = block?.url;

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#000000",
        height: "600px",
        my: 8,
      }}
    >
      <ReactPlayerWrapper url={url} />
    </Container>
  );
}
```

Next, the default @czb-ui/tinacms BlockSwitcher will need to be wrapped in a component. This allows for custom block components to be merged with the czb-ui ones. Make sure the key name in additionalTemplates pointing to your custom component is the same as the TinaCMS template name.

```javascript
import React from "react";
import { BlockSwitcher } from "@czb-ui/tinacms";

import ReactPlayerBlock from "../ReactPlayerBlock/ReactPlayerBlock";

const additionalTemplates = {
  LoopingVimeo: ReactPlayerBlock, // Make sure the key is the same as the TinaCMS template "name"
};

export default function CustomBlockSwitcher(props) {
  return <BlockSwitcher additionalBlocks={additionalTemplates} {...props} />;
}
```

Lastly, make sure to use that custom block switcher in all the pages.

```javascript
import { useTina } from "tinacms/dist/react";
import CustomBlockSwitcher from "../components/CustomBlockSwitcher/CustomBlockSwitcher";

export default function DynamicPage(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <CustomBlockSwitcher {...data.pages} />
    </>
  );
}

```

That's it! There should be a template called "Looping Vimeo" when using the block-based editing.
