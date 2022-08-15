import RJSFForm from "@rjsf/core";
import { useState } from "react";
import { schemaType } from "./Form";

interface MultiStepFormProps {
  schema: Array<schemaType>;
  onCompleteSubmit: (completedFormEvent: any) => void; // TODO: Find type of submit event?
}

export const MultiStepForm = ({
  schema,
  onCompleteSubmit,
}: MultiStepFormProps) => {
  const [remSteps, setRemSteps] = useState(schema.length);

  // TODO: Find type of submit event?
  const onStepSubmit = (e: any) => {
    // Since the state is changed after,
    // (so we don't go out of bounds on the
    // RJSF form component, *then* check if the
    // form is completed), check if the next state would be
    // 0 steps reamining.
    if (remSteps - 1 == 0) {
      onCompleteSubmit("form completed");
      return;
    }

    setRemSteps(remSteps - 1);
  };

  return (
    <RJSFForm
      schema={schema[schema.length - remSteps]}
      onSubmit={onStepSubmit}
    />
  );
};
