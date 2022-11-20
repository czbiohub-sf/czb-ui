import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../Form/Form";

const sampleSchema = {
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

it("renders", () => {
  render(
    <Form schema={sampleSchema} onCompleteSubmit={(e) => console.log(e)} />
  );
});

it("submits the correct data", async () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();

  render(<Form schema={sampleSchema} onCompleteSubmit={handleSubmit} />);

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
