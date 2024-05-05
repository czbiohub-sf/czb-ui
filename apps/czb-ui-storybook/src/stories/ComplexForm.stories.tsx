import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "@czb-ui/forms";

const meta: Meta<typeof Form> = {
  title: "Forms/Form",
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const ComplexForm: Story = {
  args: {
    schema: [
      {
        title: "A registration form",
        description:
          "Here is a form that almost has every input type we might need",
        type: "object",
        required: ["firstName", "lastName"],
        properties: {
          firstName: {
            type: "string",
            title: "First name",
            default: "Chuck",
          },
          lastName: {
            type: "string",
            title: "Last name",
          },
          telephone: {
            type: "string",
            title: "Telephone",
            minLength: 10,
          },
        },
      },
      {
        title: "A list of tasks",
        type: "object",
        required: ["title"],
        properties: {
          title: {
            type: "string",
            title: "Task list title",
          },
          tasks: {
            type: "array",
            title: "Tasks",
            items: {
              type: "object",
              required: ["title"],
              properties: {
                title: {
                  type: "string",
                  title: "Title",
                  description: "A sample title",
                },
                details: {
                  type: "string",
                  title: "Task details",
                  description: "Enter the task details",
                },
                done: {
                  type: "boolean",
                  title: "Done?",
                  default: false,
                },
              },
            },
          },
        },
      },
      {
        title: "Test form",
        type: "object",
        properties: {
          file: {
            type: "string",
            format: "data-url",
            title: "Single file",
          },
          files: {
            type: "array",
            title: "Multiple files",
            items: {
              type: "string",
              format: "data-url",
            },
          },
          filesAccept: {
            type: "string",
            format: "data-url",
            title: "Single File with Accept attribute",
          },
        },
      },
    ],
    uiSchema: [
      {},
      {},
      {
        filesAccept: {
          "ui:options": {
            accept: ".pdf",
          },
        },
      },
    ],
  },
  render: (args) => <Form {...args} />,
};
