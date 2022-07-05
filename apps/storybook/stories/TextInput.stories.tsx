import React from "react";

import { TextInput as CZBUITextInput } from "@czb-ui/core";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Inputs",
  component: CZBUITextInput,
  argTypes: {},
};

const template = (args: any) => (
  <CZBUITextInput error={args.error} errorDesc={args.errorDesc} />
);

export const TextInput = template.bind({});
TextInput.args = {
  error: false,
  errorDesc: "Wrong info",
};
