import React from "react";

import { Input as CZBUIInput } from "@czb-ui/core";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Input",
  component: CZBUIInput,
  argTypes: {},
};

const template = (args: any) => <CZBUIInput />;

export const Input = template.bind({});
Input.args = {};
