import RJSFForm from "@rjsf/mui";

// TODO: Use types from @rjsf/utils
type schemaType = React.ComponentProps<typeof RJSFForm>["schema"];
type uiSchemaType = React.ComponentProps<typeof RJSFForm>["uiSchema"];

export interface FormProps {
  schema: schemaType | Array<schemaType>;
  onCompleteSubmit: (formData: any) => void;
  uiSchema?: uiSchemaType | Array<uiSchemaType>;
  showConfirmScreen?: boolean;
  confirmScreenSuccessMessage?: string;
}
