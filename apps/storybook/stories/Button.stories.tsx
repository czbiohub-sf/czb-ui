import React from "react";

import { Button } from "@cz-ui/core";
import { ButtonProps } from "@mui/material";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

const Template = (args: ButtonProps) => (
  <Button color={args.color}>Test</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};
