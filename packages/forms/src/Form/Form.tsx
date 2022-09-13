import RJSFForm from "@rjsf/mui";
import validator from "@rjsf/validator-ajv6";
import { MultiStepForm } from "./MultiStepForm";

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

  return <RJSFForm schema={schema} validator={validator} />;
};

export default Form;
