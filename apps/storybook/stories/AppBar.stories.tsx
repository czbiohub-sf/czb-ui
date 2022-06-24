import React from "react";

import { AppBar as CZBUIAppBar, Typography } from "@czb-ui/core";
import { BiohubLogo } from "@czb-ui/biohub-logos";

export default {
  title: "App Bar",
  component: CZBUIAppBar,
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    variant: {
      options: ["text", "contained", "outlined"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => (
  <CZBUIAppBar>
    <BiohubLogo sx={{ mr: 1 }} />
    <Typography fontFamily="Barlow" fontWeight={800}>
      DATAHUB
    </Typography>
  </CZBUIAppBar>
);

export const AppBar = Template.bind({});
AppBar.args = {
  color: "primary",
  variant: "text",
};
