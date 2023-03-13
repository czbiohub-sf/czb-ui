import { MultiStepForm } from "./MultiStepForm";
import type { FormProps } from "../types/FormTypes";

const Form = ({
  schema,
  uiSchema,
  onCompleteSubmit,
  showConfirmScreen,
  confirmScreenSuccessMessage,
}: FormProps) => {
  if (Array.isArray(schema)) {
    // uiSchema checks
    if (uiSchema) {
      if (!Array.isArray(uiSchema)) {
        // uiSchema is only a single object but the schema is multiple pages
        throw new Error(
          "uiSchema needs to be an array corresponding to each page in the schema."
        );
      }

      if (uiSchema.length != schema.length) {
        throw new Error(
          "uiSchema does not match the number of pages the schema has"
        );
      }
    }

    return (
      <MultiStepForm
        schema={schema}
        uiSchema={uiSchema}
        onCompleteSubmit={(formData) => onCompleteSubmit(formData)}
        showConfirmScreen={showConfirmScreen}
        confirmScreenSuccessMessage={confirmScreenSuccessMessage}
        // "key" is here to force a re-render of the
        // whole component when the schema or uiSchema changes.
        // This is to avoid any stale state in MultiStepForm.
        key={new Date().getTime()}
      />
    );
  }

  if (uiSchema && Array.isArray(uiSchema)) {
    // uiSchema is an array but the schema is only one page
    throw new Error(
      "uiSchema needs to be a single object corresponding to the single page schema."
    );
  }

  // Use multi step form to simplify code between single and multi page forms
  // Since we're just using one step here, we can also just run the onCompleteSubmit
  // function with the first element of the formData array
  return (
    <MultiStepForm
      schema={[schema]}
      uiSchema={[uiSchema]}
      onCompleteSubmit={(formData) => onCompleteSubmit(formData[0])}
      showConfirmScreen={showConfirmScreen}
      confirmScreenSuccessMessage={confirmScreenSuccessMessage}
      key={new Date().getTime()}
    />
  );
};

export default Form;
