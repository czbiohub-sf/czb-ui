import RJSFForm from "@rjsf/core";
import { MultiStepForm } from "./MultiStepForm";
import { useState } from "react";

export type schemaType = React.ComponentProps<typeof RJSFForm>["schema"];

interface FormProps {
  schema: schemaType | Array<schemaType>;
}

export const Form = ({ schema }: FormProps) => {
  // Remaining steps state

  if (Array.isArray(schema)) {
    return (
      <MultiStepForm schema={schema} onCompleteSubmit={(e) => console.log(e)} />
    );
  }

  return <RJSFForm schema={schema} />;
};
