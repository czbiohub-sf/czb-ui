import RJSFForm from "@rjsf/mui";
import validator from "@rjsf/validator-ajv6";
import { useState } from "react";
import { FormProps } from "../types/FormTypes";
import FormPageNav from "./FormPageNav/FormPageNav";
import { widgets } from "../CustomWidgets/widgets";
import ConfirmScreen from "./ConfirmScreen/ConfirmScreen";
import SuccessfulSubmit from "./ConfirmScreen/SuccessfulSubmit";
import LoadingSubmit from "./ConfirmScreen/LoadingSubmit";

// This will take the props from FormProps,
// but override the schema and uiSchema prop
// to only accept an array
interface MultiStepFormProps extends Omit<FormProps, "schema"> {
  // TODO: Use types from @rjsf/utils
  schema: Array<React.ComponentProps<typeof RJSFForm>["schema"]>;
  uiSchema?: Array<React.ComponentProps<typeof RJSFForm>["uiSchema"]>;
}

export const MultiStepForm = ({
  schema,
  uiSchema,
  onCompleteSubmit,
  showConfirmScreen = true,
  confirmScreenSuccessMessage,
}: MultiStepFormProps) => {
  const steps = schema.length;

  const initFormData = () => {
    return Array.from({ length: steps }, (_) => ({}));
  };

  // Remaining steps state
  const [remSteps, setRemSteps] = useState(steps);
  // Create an array with the amount of steps with empty objects
  const [formData, setFormData] = useState(initFormData());
  // TODO: Maybe rename this state variable to avoid
  // confusion with showConfirmScreen
  // 0 is no show, 1 is confirm screen, 2 is successful screen, 3 is loading screen
  const [confirmScreenShow, setConfirmScreenShow] = useState(0);

  const currentStep = schema.length - remSteps;

  const resetForm = () => {
    setFormData(initFormData());
    setRemSteps(steps);
    setConfirmScreenShow(0);
  };

  const beforeFinalSubmit = () => {
    if (showConfirmScreen) {
      setConfirmScreenShow(1);
    } else {
      onCompleteSubmit(formData);
    }
  };

  const afterFinalSubmit = async () => {
    // When the async promise is resolved (e.g. sending a request
    // to a database), the form will move on to the successful screen
    setConfirmScreenShow(3);
    await onCompleteSubmit(formData);
    setConfirmScreenShow(2);
  };

  if (confirmScreenShow == 1) {
    return (
      <ConfirmScreen
        formData={formData}
        schema={schema}
        onConfirmation={afterFinalSubmit}
        onCancel={() => setConfirmScreenShow(0)}
      />
    );
  }

  if (confirmScreenShow == 2) {
    return (
      <SuccessfulSubmit
        onSubmitAnotherResponse={resetForm}
        successMessage={confirmScreenSuccessMessage}
      />
    );
  }

  if (confirmScreenShow == 3) {
    return <LoadingSubmit />;
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
    // TODO: Fix this error
    // @ts-ignore Don't know why its complaining about not being a valid JSX component
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
        // If confirm screen is shown, set remSteps to a constant
        // so the button never shows "Submit" (since they would have
        // to go to the confirm screen anyway to submit)
        remSteps={remSteps}
        showSubmitAtLastStep={!showConfirmScreen}
        goBackOneStep={() => setRemSteps(remSteps + 1)}
      />
    </RJSFForm>
  );
};
