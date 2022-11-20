import { render } from "@testing-library/react";
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
    <Form schema={{ sampleSchema }} onCompleteSubmit={(e) => console.log(e)} />
  );
});
