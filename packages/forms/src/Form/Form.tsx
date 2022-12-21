import RJSFForm from "@rjsf/mui";
import { MultiStepForm } from "./MultiStepForm";
import { File } from "../CustomWidgets";

// TODO: Use types from @rjsf/utils
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

  // Use multi step form to simplify code between single and multi page forms
  return (
    <MultiStepForm
      schema={[schema]}
      uiSchema={[uiSchema]}
      onCompleteSubmit={(formData) => onCompleteSubmit(formData)}
    />
  );
};

export default Form;
