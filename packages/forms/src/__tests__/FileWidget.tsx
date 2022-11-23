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
  it("works", async () => {
    const { user, handleSubmit } = setup();
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    // Were not using regex here as there is multiple inputs
    // containing the label text "Single file"
    const input = screen.getByLabelText("Single file");

    await user.upload(input, file);

    await user.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        // the base64 at the end is just "hello" (from the array when creating the file)
        file: "data:image/png;name=hello.png;base64,aGVsbG8=",
      })
    );
  });

  it("shows a label of the file uploaded", async () => {
    const { user, handleSubmit } = setup();
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    // Were not using regex here as there is multiple inputs
    // containing the label text "Single file"
    const input = screen.getByLabelText("Single file");

    await user.upload(input, file);

    await waitFor(() => {
      // TODO: Make sure its in the right spot somehow?
      expect(screen.getByText("hello.png").textContent).toBe("hello.png");
    });
  });

  it.todo("file gets correctly deleted if it's deleted");
  it.todo("single file gets correctly replaced if user selects file again");
});

describe("multi file upload", () => {
  it("works", async () => {
    const { user, handleSubmit } = setup();
    const files = [
      new File(["hello"], "hello.png", { type: "image/png" }),
      new File(["hello2"], "hello2.png", { type: "image/png" }),
      new File(["hello3"], "hello3.png", { type: "image/png" }),
    ];
    const input = screen.getByLabelText(/multiple files/i);

    await user.upload(input, files);

    await user.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        multiFiles: [
          "data:image/png;name=hello.png;base64,aGVsbG8=",
          "data:image/png;name=hello2.png;base64,aGVsbG8y",
          "data:image/png;name=hello3.png;base64,aGVsbG8z",
        ],
      })
    );
  });

  it.todo("shows labels of the files uploaded");
  it.todo("files gets correctly deleted if it's deleted");
  it.todo("files clear and get correctly replaced if user selects files again");
});
