import React from "react";

import { Banner as CZUIBanner } from "@czb-ui/core";
import { ButtonProps } from "@mui/material";

export default {
  title: "Banner",
  component: CZUIBanner,
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

const Template = (args: ButtonProps) => <CZUIBanner />;

export const Banner = Template.bind({});
Banner.args = {
  color: "primary",
  variant: "text",
};
