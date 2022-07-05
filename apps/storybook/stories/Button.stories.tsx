import React from "react";

import { Button as CZBUIButton } from "@czb-ui/core";
import { ButtonProps } from "@mui/material"; // TODO: Get props not from mui

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: CZBUIButton,
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

const Template = (args: ButtonProps) => (
  <CZBUIButton color={args.color} variant={args.variant}>
    Test
  </CZBUIButton>
);

export const Button = Template.bind({});
Button.args = {
  color: "primary",
  variant: "text",
};
