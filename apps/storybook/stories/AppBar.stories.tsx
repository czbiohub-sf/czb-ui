import React from "react";

import { AppBar as CZBUIAppBar } from "@czb-ui/core";
import { ButtonProps } from "@mui/material";

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

const Template = (args: ButtonProps) => <CZBUIAppBar />;

export const AppBar = Template.bind({});
AppBar.args = {
  color: "primary",
  variant: "text",
};
