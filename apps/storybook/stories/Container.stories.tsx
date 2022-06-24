import React from "react";

import { Container as CZBUIContainer, Typography } from "@czb-ui/core";

export default {
  title: "Container",
  component: CZBUIContainer,
};

const Template = () => (
  <CZBUIContainer>
    <Typography variant="h1">Who we are</Typography>
    <Typography variant="h2">We don't believe in impossible</Typography>
    <Typography>
      CZ Biohub is an independent, non-profit medical research organization
      working in collaboration with UC San Francisco, Stanford University and UC
      Berkeley.
    </Typography>
    <Typography variant="h2">
      So what does this container component do?
    </Typography>
    <Typography>
      The container centers your content horizontally. It's the most basic
      layout element.
    </Typography>
  </CZBUIContainer>
);

export const Container = Template.bind({});
