// TODO: this does not work:
// https://github.com/rjsf-team/react-jsonschema-form/tree/master/packages/material-ui#typescript-configuration-adjustments-1
// @ts-ignore
import RJSFForm from "@rjsf/material-ui/v5";
import { MultiStepForm } from "./MultiStepForm";

export type schemaType = React.ComponentProps<typeof RJSFForm>["schema"];

interface FormProps {
  schema: schemaType | Array<schemaType>;
}

const Form = ({ schema }: FormProps) => {
  if (Array.isArray(schema)) {
    return (
      <MultiStepForm schema={schema} onCompleteSubmit={(e) => console.log(e)} />
    );
  }

  return <RJSFForm schema={schema} />;
};

export default Form;
