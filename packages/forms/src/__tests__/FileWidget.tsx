import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/dom";
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

  // the base64 returned by the form library
  // will just "hello" (from the array passed in when creating the File)
  const file = new File(["hello"], "hello.png", { type: "image/png" });
  const multipleFiles = [
    new File(["hello"], "hello.png", { type: "image/png" }),
    new File(["hello2"], "hello2.png", { type: "image/png" }),
    new File(["hello3"], "hello3.png", { type: "image/png" }),
  ];
  // TODO: Add base64 truth value(s) here (what needs to be expected from handleSubmit func)

  render(<Form schema={testSchema} onCompleteSubmit={handleSubmit} />);

  // Were not using regex here as there is multiple input labels
  // containing the label text "Single file"
  const input = screen.getByLabelText("Single file");

  return {
    user,
    handleSubmit,
    input,
    file,
    multipleFiles,
  };
};

describe("single file upload", () => {
  it("works", async () => {
    const { user, handleSubmit, input, file } = setup();

    await user.upload(input, file);

    await user.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        file: "data:image/png;name=hello.png;base64,aGVsbG8=",
      })
    );
  });

  it("shows a label of the file uploaded", async () => {
    const { user, handleSubmit, input, file } = setup();

    await user.upload(input, file);

    await waitFor(() => {
      // TODO: Make sure its in the right spot somehow?
      expect(screen.getByText("hello.png").textContent).toBe("hello.png");
    });
  });

  it("file gets correctly deleted if it's deleted", async () => {
    // Along with checking that the label was deleted, also check
    // the handleSubmit function's output
    const { user, handleSubmit, input, file } = setup();

    await user.upload(input, file);

    // Using findByText is like the same as using waitFor()
    // https://testing-library.com/docs/guide-disappearance
    const chipText = await screen.findByText("hello.png");
    const chip = await chipText.parentElement!;

    // TODO: Using getByTestId isn't recommended, is X button accessible?
    const xButtonInChip = within(chip).getByTestId("ClearIcon");

    await user.click(xButtonInChip);

    await waitFor(() => {
      expect(screen.queryByText("hello.png")).toBeNull();
    });

    await user.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith({}));
  });

  it("single file gets correctly replaced if user selects file again", async () => {
    const { user, handleSubmit, input, multipleFiles } = setup();

    await user.upload(input, multipleFiles[0]);

    await user.upload(input, multipleFiles[1]);

    await user.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        file: "data:image/png;name=hello2.png;base64,aGVsbG8y",
      })
    );
  });
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
