import RJSFForm from "@rjsf/mui";
import validator from "@rjsf/validator-ajv6";
import { MultiStepForm } from "./MultiStepForm";
import FormPageNav from "./FormPageNav/FormPageNav";

export type schemaType = React.ComponentProps<typeof RJSFForm>["schema"];

interface FormProps {
  schema: schemaType | Array<schemaType>;
  onCompleteSubmit: (formData: any) => void;
}

const Form = ({ schema, onCompleteSubmit }: FormProps) => {
  if (Array.isArray(schema)) {
    return (
      <MultiStepForm
        schema={schema}
        onCompleteSubmit={(formData) => onCompleteSubmit(formData)}
      />
    );
  }

  return (
    <>
      <RJSFForm
        schema={schema}
        validator={validator}
        onSubmit={(formData: any) => onCompleteSubmit(formData.formData)}
      >
        <FormPageNav
          steps={1}
          remSteps={1}
          goBackOneStep={() =>
            console.error("Single page form should not have more than one page")
          }
        />
      </RJSFForm>
    </>
  );
};

export default Form;
