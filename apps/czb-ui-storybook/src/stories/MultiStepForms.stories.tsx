import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "@czb-ui/forms";

const meta: Meta<typeof Form> = {
  title: "Forms/Form",
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const MultiStepForm: Story = {
  args: {
    schema: [
      {
        title: "Test form page 1",
        type: "object",
        properties: {
          name: {
            type: "string",
            title: "Name",
          },
          age: {
            type: "number",
            title: "Age",
          },
        },
      },
      {
        title: "Test form page 2",
        type: "object",
        properties: {
          secondName: {
            type: "string",
            title: "Second Name",
          },
          secondAge: {
            type: "number",
            title: "Second Age",
          },
        },
      },
      {
        title: "Test form page 3",
        type: "object",
        properties: {
          thirdName: {
            type: "string",
            title: "Third Name",
          },
          thirdAge: {
            type: "number",
            title: "Third Age",
          },
        },
      },
    ],
  },
  render: (args) => <Form {...args} />,
};
