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
  uiSchema?: uiSchemaType | Array<uiSchemaType>;
}

export const widgets = {
  FileWidget: File,
};

const Form = ({ schema, uiSchema, onCompleteSubmit }: FormProps) => {
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
      />
    );
  }

  if (uiSchema && Array.isArray(uiSchema)) {
    // uiSchema is an array but the schema is only one page
    throw new Error(
      "uiSchema needs to be a single object corresponding to the single page schema."
    );
  }

  return (
    <>
      <RJSFForm
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        onSubmit={(e: any) => onCompleteSubmit(e.formData)}
        widgets={widgets}
      >
        <FormPageNav steps={1} remSteps={1} />
      </RJSFForm>
    </>
  );
};

export default Form;
