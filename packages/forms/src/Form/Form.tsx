import RJSFForm from "@rjsf/mui";
import validator from "@rjsf/validator-ajv6";
import { MultiStepForm } from "./MultiStepForm";
import FormPageNav from "./FormPageNav/FormPageNav";
import { File } from "../CustomWidgets";

export type schemaType = React.ComponentProps<typeof RJSFForm>["schema"];
export type uiSchemaType = React.ComponentProps<typeof RJSFForm>["uiSchema"];

interface FormProps {
  schema: schemaType | Array<schemaType>;
  onCompleteSubmit: (formData: any) => void;
  uiSchema?: uiSchemaType;
}

export const widgets = {
  FileWidget: File,
};

const Form = ({ schema, uiSchema, onCompleteSubmit }: FormProps) => {
  if (Array.isArray(schema)) {
    return (
      // TODO: Add custom widgets here
      <MultiStepForm
        schema={schema}
        uiSchema={uiSchema}
        onCompleteSubmit={(formData) => onCompleteSubmit(formData)}
      />
    );
  }

  return (
    <>
      <RJSFForm
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        onSubmit={(formData: any) => onCompleteSubmit(formData.formData)}
        widgets={widgets}
      >
        <FormPageNav steps={1} remSteps={1} />
      </RJSFForm>
    </>
  );
};

export default Form;
