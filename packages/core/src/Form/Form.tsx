import RJSFForm from "@rjsf/core";

type schemaType = React.ComponentProps<typeof RJSFForm>["schema"];

interface FormProps {
  schema: schemaType | Array<schemaType>;
}

export const Form = ({ schema }: FormProps) => {
  if (Array.isArray(schema)) {
    return <div>The form will have multiple steps.</div>;
  }

  return <RJSFForm schema={schema} />;
};
