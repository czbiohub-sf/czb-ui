import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "@czb-ui/forms";

const meta: Meta<typeof Form> = {
  title: "Forms/Form",
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const FileUploadForm: Story = {
  args: {
    schema: {
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
    uiSchema: {
      filesAccept: {
        "ui:options": {
          accept: ".pdf",
        },
      },
    },
  },
  render: (args) => <Form {...args} />,
};
