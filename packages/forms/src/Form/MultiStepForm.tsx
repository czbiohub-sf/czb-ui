import RJSFForm from "@rjsf/mui";
import validator from "@rjsf/validator-ajv6";
import { useState } from "react";
import { schemaType, uiSchemaType } from "./Form";
import FormPageNav from "./FormPageNav/FormPageNav";
import { widgets } from "./Form";
import ConfirmScreen from "./ConfirmScreen/ConfirmScreen";

interface MultiStepFormProps {
  schema: Array<schemaType>;
  onCompleteSubmit: (completedFormEvent: any) => void; // TODO: Find type of submit event?
  uiSchema?: Array<uiSchemaType>;
  showConfirmScreen?: boolean;
}

export const MultiStepForm = ({
  schema,
  uiSchema,
  onCompleteSubmit,
  showConfirmScreen = true,
}: MultiStepFormProps) => {
  const steps = schema.length;
  // Remaining steps state
  const [remSteps, setRemSteps] = useState(steps);
  // Create an array with the amount of steps with empty objects
  const [formData, setFormData] = useState(
    Array.from({ length: steps }, (_) => ({}))
  );
  // TODO: Maybe rename this state variable to avoid
  // confusion with showConfirmScreen
  const [confirmScreenShow, setConfirmScreenShow] = useState(false);

  const currentStep = schema.length - remSteps;

  const beforeFinalSubmit = () => {
    if (showConfirmScreen) {
      setConfirmScreenShow(true);
    } else {
      onCompleteSubmit(formData);
    }
  };

  if (confirmScreenShow) {
    return (
      <ConfirmScreen
        formData={formData}
        onConfirmation={() => onCompleteSubmit(formData)}
        onCancel={() => setConfirmScreenShow(false)}
      />
    );
  }

  // Since we want to keep the form data at each step,
  // it's better to just handle the form's state manually
  // so we can retrieve the form data anytime without onSubmit
  const onFormChange = (e: any) => {
    // TODO: make sure there are no edge cases
    // with this setting formData thing...
    // (e.g. going back a step then going foward,
    // just dont want things to go out of bounds)
    setFormData((copiedFormData) => {
      copiedFormData[currentStep] = e.formData;
      return copiedFormData;
    });
  };

  // TODO: Find type of submit event?
  const onStepSubmit = (e: any) => {
    // Since the state is changed after,
    // (so we don't go out of bounds on the
    // RJSF form component, *then* check if the
    // form is completed), check if the next state would be
    // 0 steps reamining.
    if (remSteps - 1 == 0) {
      beforeFinalSubmit();
      return;
    }

    setRemSteps(remSteps - 1);
  };

  return (
    <RJSFForm
      schema={schema[currentStep]}
      uiSchema={uiSchema && uiSchema[currentStep]}
      validator={validator}
      onSubmit={onStepSubmit}
      formData={formData[currentStep]}
      widgets={widgets}
      onChange={onFormChange}
    >
      <FormPageNav
        steps={steps}
        remSteps={remSteps}
        goBackOneStep={() => setRemSteps(remSteps + 1)}
      />
    </RJSFForm>
  );
};
