import type { Meta, StoryObj } from "@storybook/react";
import { Form as CZBUIForm } from "@czb-ui/forms/src";

const meta: Meta<typeof CZBUIForm> = {
  title: "Forms/Form",
  component: CZBUIForm,
  argTypes: {},
};

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fakeAsyncSubmit = async (formData: any) => {
  console.log("Submitting...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("FormData:", formData);
      resolve(formData);
    }, 2000);
  });
};

export const SubmitLoadingScreen: StoryObj<typeof CZBUIForm> = {
  args: {
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
  },
  render: (args) => <CZBUIForm {...args} />,
};
