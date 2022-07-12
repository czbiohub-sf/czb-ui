import React from "react";

import { Button as CZIFUIButton } from "czifui";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Demos of CZI components",
  component: CZIFUIButton,
  argTypes: {
    sdsStyle: {
      options: ["rounded", "square", "minimal"],
      control: { type: "radio" },
    },
    sdsType: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

const Template = (args: any) => <CZIFUIButton {...args}>Test</CZIFUIButton>;

export const Button = Template.bind({});
Button.args = {
  sdsStyle: "rounded",
  sdsType: "primary",
  disabled: false,
};
