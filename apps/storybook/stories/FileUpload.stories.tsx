import React from "react";

import { Form as CZBUIForm } from "@czb-ui/forms/src";

export default {
  title: "Form",
  component: CZBUIForm,
  argTypes: {},
};

const Template = (args: any) => <CZBUIForm {...args} />;

export const FileUpload = Template.bind({});
FileUpload.args = {
  schema: {
    title: "Test form",
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      files: {
        type: "string",
        format: "data-url",
      },
    },
  },
};
