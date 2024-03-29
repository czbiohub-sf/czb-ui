import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../Form/Form";
import { RJSFSchema, UiSchema } from "@rjsf/utils";

// Shares the same example as in Form.stories.tsx
const singlePageSampleSchema: RJSFSchema = {
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
};

// Shares the same example as in MultiStepForms.stories.tsx
const multiPageSampleSchema: RJSFSchema[] = [
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
      "second name": {
        type: "string",
      },
      "second age": {
        type: "number",
      },
    },
  },
  {
    title: "Test form page 3",
    type: "object",
    properties: {
      "Third name": {
        type: "string",
      },
      "Third age": {
        type: "number",
      },
    },
  },
];

const numbersSchema: RJSFSchema = {
  type: "object",
  title: "Numbers",
  properties: {
    numberEnumRadio: {
      type: "number",
      title: "Number enum",
      enum: [1, 2, 3],
    },
    integerRange: {
      title: "Integer range",
      type: "integer",
      minimum: 42,
      maximum: 100,
    },
  },
};

const numbersUiSchema: UiSchema = {
  integer: {
    "ui:widget": "updown",
  },
  numberEnumRadio: {
    "ui:widget": "radio",
    "ui:options": {
      inline: true,
    },
  },
  integerRange: {
    "ui:widget": "range",
  },
};

// TODO: Move actionsOnEachPage up here and rename it to "multiPageFormActionsOnEachPage" or something

it("renders", () => {
  render(
    <Form
      schema={singlePageSampleSchema}
      onCompleteSubmit={
        () => 1 + 1 /* not needed here, maybe make this prop optional later */
      }
    />
  );
});

it("single page forms submit the correct data", async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();

  render(
    <Form
      schema={singlePageSampleSchema}
      onCompleteSubmit={handleSubmit}
      showConfirmScreen={false}
    />
  );

  await user.type(screen.getByLabelText(/name/i), "abcdef");
  await user.type(screen.getByLabelText(/age/i), "324829034");

  await user.click(screen.getByRole("button", { name: /submit/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      name: "abcdef",
      age: 324829034,
    })
  );
});

it("form with confirm screen submits data correctly", async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();

  render(
    <Form
      schema={singlePageSampleSchema}
      onCompleteSubmit={handleSubmit}
      showConfirmScreen={true}
    />
  );

  await user.type(screen.getByLabelText(/name/i), "abcdef");
  await user.type(screen.getByLabelText(/age/i), "324829034");

  await user.click(screen.getByRole("button", { name: /next/i }));

  // Confirm screen submit
  await user.click(screen.getByRole("button", { name: /submit/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      name: "abcdef",
      age: 324829034,
    })
  );
});

it("multi page forms submit the correct data", async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();

  render(
    <Form
      schema={multiPageSampleSchema}
      onCompleteSubmit={handleSubmit}
      showConfirmScreen={false}
    />
  );

  const actionsOnEachPage = [
    // Each array is the actions for one page.
    [
      {
        label: /name/i,
        toType: "abcdef",
      },
      {
        label: /age/i,
        toType: "2414",
      },
    ],
    [
      {
        label: /second name/i,
        toType: "ghijklmn",
      },
      {
        label: /second age/i,
        toType: "99999",
      },
    ],
    [
      {
        label: /Third name/i,
        toType: "opqrstuvwxyz",
      },
      {
        label: /Third age/i,
        toType: "2352390",
      },
    ],
  ];

  for (let i = 0; i < actionsOnEachPage.length; i++) {
    const actions = actionsOnEachPage[i];

    for (let j = 0; j < actions.length; j++) {
      await user.type(
        screen.getByLabelText(actions[j].label),
        actions[j].toType
      );
    }

    // If were on the last page
    if (i == actionsOnEachPage.length - 1) {
      // Hit the "Submit" button
      await user.click(screen.getByRole("button", { name: /submit/i }));
    } else {
      // Hit the "Next" button
      // Go to the next page, then run the next array of actions
      await user.click(screen.getByRole("button", { name: /next/i }));
    }
  }

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith([
      {
        name: "abcdef",
        age: 2414,
      },
      {
        "second name": "ghijklmn",
        "second age": 99999,
      },
      {
        "Third name": "opqrstuvwxyz",
        "Third age": 2352390,
      },
    ])
  );
});

it("multi page forms submit the correct data, but user goes backwards and changes some existing data", async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();

  render(
    <Form
      schema={multiPageSampleSchema}
      onCompleteSubmit={handleSubmit}
      showConfirmScreen={false}
    />
  );

  const actionsOnEachPage = [
    // Each array is the actions for one page.
    [
      {
        label: /name/i,
        toType: "abcdef", // Note this one will be changed later as part of the test
      },
      {
        label: /age/i,
        toType: "2414",
      },
    ],
    [
      {
        label: /second name/i,
        toType: "ghijklmn",
      },
      {
        label: /second age/i,
        toType: "99999",
      },
    ],
    [
      {
        label: /Third name/i,
        toType: "opqrstuvwxyz",
      },
      {
        label: /Third age/i,
        toType: "2352390",
      },
    ],
  ];

  for (let i = 0; i < actionsOnEachPage.length; i++) {
    const actions = actionsOnEachPage[i];

    for (let j = 0; j < actions.length; j++) {
      await user.type(
        screen.getByLabelText(actions[j].label),
        actions[j].toType
      );
    }

    // On the "stepToTestBackwards" step, go back one step then edit some data
    // Also checking if the data is still there is also done
    const stepToTestBackwards = 1;
    if (i == stepToTestBackwards) {
      // Check if what the user typed in the previous step was the same
      await user.click(screen.getByRole("button", { name: /back/i }));

      const previousStep = stepToTestBackwards - 1;
      const previousActions = actionsOnEachPage[previousStep];
      const textFieldToLookAt = screen.getByLabelText(
        previousActions[0].label
      ) as HTMLInputElement;

      expect(textFieldToLookAt.value).toBe(previousActions[0].toType);

      // Now change some of the data
      await user.clear(textFieldToLookAt);
      await user.type(textFieldToLookAt, "abcdefghijk");

      // Finally lets go back to the step we were at before
      await user.click(screen.getByRole("button", { name: /next/i }));
    }

    // If were on the last page
    if (i == actionsOnEachPage.length - 1) {
      // Hit the "Submit" button
      await user.click(screen.getByRole("button", { name: /submit/i }));
    } else {
      // Hit the "Next" button
      // Go to the next page, then run the next array of actions
      await user.click(screen.getByRole("button", { name: /next/i }));
    }
  }

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith([
      {
        name: "abcdefghijk", // Note this one is different than the initial as part of the test
        age: 2414,
      },
      {
        "second name": "ghijklmn",
        "second age": 99999,
      },
      {
        "Third name": "opqrstuvwxyz",
        "Third age": 2352390,
      },
    ])
  );
});

describe("uiSchema", () => {
  // This doesn't work as of now because the RJSF MUI label
  // for the range widget does not have the for attribute
  // TODO: Remove .skip and this comment when it is fixed
  it.skip("works on single page form", async () => {
    // Usually the numbersSchema would just be regular
    // input text boxes. With numbersUiSchema, we can change
    // them into sliders, radios, etc.

    // So let's create a form using numbersSchema, and see
    // if numbersUiSchema works by testing if the UI elements
    // reflect whats in the uiSchema.
    render(
      <Form
        schema={numbersSchema}
        uiSchema={numbersUiSchema}
        onCompleteSubmit={
          () => 1 + 1 /* not needed here, maybe make this prop optional later */
        }
      />
    );

    const input = screen.getByLabelText(/integer range/i) as HTMLInputElement;
    expect(input.type).toBe("range");
  });
});
