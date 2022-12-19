import renderer from "react-test-renderer";
import ConfirmScreen from "../Form/ConfirmScreen/ConfirmScreen";
import React from "react";
import { RJSFSchema } from "@rjsf/utils";

const completedFormProps = {
  formData: [
    {
      firstName: "Test",
      lastName: "Name",
      telephone: "1234567890",
    },
    {
      tasks: [
        {
          done: false,
          title: "Task 0",
          details: "I am task 0.",
        },
        {
          done: true,
          title: "Task 1",
          details: "I am task 1.",
        },
        {
          done: false,
          title: "Task 2",
          details: "I am task 2.",
        },
      ],
      title: "Task Title",
    },
    {
      files: [
        "data:text/plain;name=1Untitled.txt;base64,SSdtIGEgc21hbGwgdGV4dCBmaWxlLg==",
        "data:text/plain;name=2Untitled_copy%20-%20weird%20file%20name.txt;base64,SSdtIGFub3RoZXIgc21hbGwgdGV4dCBmaWxlLg==",
      ],
      file: "data:text/plain;name=1Untitled.txt;base64,SSdtIGEgc21hbGwgdGV4dCBmaWxlLg==",
    },
  ],
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
  ] as RJSFSchema[],
};

it("renders form data correctly", () => {
  const component = renderer.create(
    <ConfirmScreen
      {...completedFormProps}
      onConfirmation={() => {
        1 + 1;
      }}
      onCancel={() => {
        1 + 1;
      }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
