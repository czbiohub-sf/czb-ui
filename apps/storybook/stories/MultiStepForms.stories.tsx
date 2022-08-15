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
        native: {
          title: "Native",
          description:
            "May not work on some browsers, notably Firefox Desktop and IE.",
          type: "object",
          properties: {
            datetime: {
              type: "string",
              format: "date-time",
            },
            date: {
              type: "string",
              format: "date",
            },
          },
        },
        alternative: {
          title: "Alternative",
          description: "These work on most platforms.",
          type: "object",
          properties: {
            "alt-datetime": {
              type: "string",
              format: "date-time",
            },
            "alt-date": {
              type: "string",
              format: "date",
            },
          },
        },
      },
    },
    {
      title: "Test form page 3",
      type: "object",
      properties: {
        stringFormats: {
          type: "object",
          title: "String formats",
          properties: {
            email: {
              type: "string",
              format: "email",
            },
            uri: {
              type: "string",
              format: "uri",
            },
          },
        },
        boolean: {
          type: "object",
          title: "Boolean field",
          properties: {
            default: {
              type: "boolean",
              title: "checkbox (default)",
              description: "This is the checkbox-description",
            },
            radio: {
              type: "boolean",
              title: "radio buttons",
              description: "This is the radio-description",
            },
            select: {
              type: "boolean",
              title: "select box",
              description: "This is the select-description",
            },
          },
        },
        string: {
          type: "object",
          title: "String field",
          properties: {
            default: {
              type: "string",
              title: "text input (default)",
            },
            textarea: {
              type: "string",
              title: "textarea",
            },
            placeholder: {
              type: "string",
            },
            color: {
              type: "string",
              title: "color picker",
              default: "#151ce6",
            },
          },
        },
        secret: {
          type: "string",
          default: "I'm a hidden string.",
        },
        disabled: {
          type: "string",
          title: "A disabled field",
          default: "I am disabled.",
        },
        readonly: {
          type: "string",
          title: "A readonly field",
          default: "I am read-only.",
        },
        readonly2: {
          type: "string",
          title: "Another readonly field",
          default: "I am also read-only.",
          readOnly: true,
        },
        widgetOptions: {
          title: "Custom widget with options",
          type: "string",
          default: "I am yellow",
        },
        selectWidgetOptions: {
          title: "Custom select widget with options",
          type: "string",
          enum: ["foo", "bar"],
          enumNames: ["Foo", "Bar"],
        },
      },
    },
  ],
};
