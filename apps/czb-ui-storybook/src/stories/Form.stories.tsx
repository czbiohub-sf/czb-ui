import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "@czb-ui/forms";

const meta: Meta<typeof Form> = {
  title: "Forms/Form",
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const SimpleForm: Story = {
  args: {
    schema: {
      title: "Test form",
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
  },
  render: (args) => <Form {...args} />,
};
