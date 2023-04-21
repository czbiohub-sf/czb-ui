import React from "react";

import { Form as CZBUIForm } from "@czb-ui/forms/src";

export default {
  title: "Form",
  component: CZBUIForm,
  argTypes: {},
};

const Template = (args: any) => <CZBUIForm {...args} />;

export const MultiStepForms = Template.bind({});
MultiStepForms.args = {
  schema: [
    {
      title: "Test form page 1",
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        age: {
          type: "number",
        },
      },
    },
    {
      title: "Test form page 2",
      type: "object",
      properties: {
        "second name": {
          type: "string",
        },
        "second age": {
          type: "number",
        },
      },
    },
    {
      title: "Test form page 3",
      type: "object",
      properties: {
        "Third name": {
          type: "string",
        },
        "Third age": {
          type: "number",
        },
      },
    },
  ],
};
