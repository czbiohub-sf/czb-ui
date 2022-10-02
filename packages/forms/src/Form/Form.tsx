import RJSFForm from "@rjsf/mui";
import validator from "@rjsf/validator-ajv6";
import { MultiStepForm } from "./MultiStepForm";
import { File } from "../CustomWidgets";

export type schemaType = React.ComponentProps<typeof RJSFForm>["schema"];

interface FormProps {
  schema: schemaType | Array<schemaType>;
  onCompleteSubmit: (formData: any) => void;
}

const widgets = {
  FileWidget: File,
};

const Form = ({ schema, onCompleteSubmit }: FormProps) => {
  if (Array.isArray(schema)) {
    return (
      // TODO: Add custom widgets here
      <MultiStepForm
        schema={schema}
        onCompleteSubmit={(formData) => onCompleteSubmit(formData)}
      />
    );
  }

  return <RJSFForm schema={schema} validator={validator} widgets={widgets} />;
};

export default Form;
