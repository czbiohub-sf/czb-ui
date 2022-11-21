import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../Form/Form";

// Similar to FileUpload.stories.tsx
const testSchema = {
  title: "Test form",
  type: "object",
  properties: {
    file: {
      type: "string",
      format: "data-url",
      title: "Single file",
    },
    multiFiles: {
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
};

const setup = () => {
  const user = userEvent.setup();
  const handleSubmit = jest.fn();

  render(<Form schema={testSchema} onCompleteSubmit={handleSubmit} />);

  return {
    user,
    handleSubmit,
  };
};

describe("single file upload", () => {
  it("single file upload works", async () => {
    const { user, handleSubmit } = setup();
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    // Were not using regex here as there is multiple inputs
    // containing the label text "Single file"
    const input = screen.getByLabelText("Single file");

    await user.upload(input, file);

    await user.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        file: "data:image/png;name=hello.png;base64,aGVsbG8=",
      })
    );
  });

  it.todo("shows a label of the file uploaded");
  it.todo("file gets correctly deleted if it's deleted");
  it.todo("single file gets correctly replaced if user selects file again");
});
