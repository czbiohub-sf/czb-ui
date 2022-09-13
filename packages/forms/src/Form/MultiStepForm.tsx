import RJSFForm from "@rjsf/mui";
import validator from "@rjsf/validator-ajv6";
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
  const steps = schema.length;
  // Remaining steps state
  const [remSteps, setRemSteps] = useState(steps);
  // Create an array with the amount of steps with empty objects
  const [formData, setFormData] = useState(
    Array.from({ length: steps }, (_) => ({}))
  );

  // TODO: Find type of submit event?
  const onStepSubmit = (e: any) => {
    // TODO: make sure there are no edge cases
    // with this setting formData thing...
    // (e.g. going back a step then going foward,
    // just dont want things to go out of bounds)
    const currentStep = schema.length - remSteps;
    setFormData((copiedFormData) => {
      copiedFormData[currentStep] = e.formData;
      return copiedFormData;
    });

    // Since the state is changed after,
    // (so we don't go out of bounds on the
    // RJSF form component, *then* check if the
    // form is completed), check if the next state would be
    // 0 steps reamining.
    if (remSteps - 1 == 0) {
      onCompleteSubmit(formData);
      return;
    }

    setRemSteps(remSteps - 1);
  };

  return (
    <RJSFForm
      schema={schema[schema.length - remSteps]}
      validator={validator}
      onSubmit={onStepSubmit}
    />
  );
};
