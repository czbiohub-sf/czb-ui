import React from "react";

import { Input as CZBUIInput } from "@czb-ui/core";

export default {
  title: "Input",
  component: CZBUIInput,
  argTypes: {},
};

const Template = () => <CZBUIInput />;

export const TextInput = Template.bind({});
TextInput.args = {};
