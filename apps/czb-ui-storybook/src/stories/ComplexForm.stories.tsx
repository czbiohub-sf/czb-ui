import React from "react";

import { Form as CZBUIForm } from "@czb-ui/forms/src";

export default {
  title: "Form",
  component: CZBUIForm,
  argTypes: {},
};

const Template = (args: any) => <CZBUIForm {...args} />;

export const ComplexForm = Template.bind({});
ComplexForm.args = {
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
};
