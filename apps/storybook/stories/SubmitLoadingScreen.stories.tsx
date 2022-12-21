import React from "react";

import { Form as CZBUIForm } from "@czb-ui/forms/src";

export default {
  title: "Form",
  component: CZBUIForm,
  argTypes: {},
};

const Template = (args: any) => <CZBUIForm {...args} />;

const fakeAsyncSubmit = (formData: any) => {
  return new Promise((resolve) => {
    console.log("submitting...");
    setTimeout(() => {
      console.log(formData);
      resolve(formData);
    }, 2000);
  });
};

export const SubmitLoadingScreen = Template.bind({});
SubmitLoadingScreen.args = {
  schema: {
    title: "Test form",
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
  onCompleteSubmit: fakeAsyncSubmit,
};
