import { Typography } from "@mui/material";
import { HeadingSeparator } from "@czb-ui/core";
import { Box } from "@mui/material";
import { RJSFSchema } from "@rjsf/utils";
import { Button } from "czifui";
import PrettyJson from "./PrettyJson/PrettyJson";

interface ConfirmScreenProps {
  formData: any;
  schema: RJSFSchema[];
  onConfirmation: () => void;
  onCancel: () => void;
  // TODO: onEditStep: (step: number) => void;
}

export default function ConfirmScreen({
  formData,
  schema,
  onConfirmation,
  onCancel,
}: ConfirmScreenProps) {
  return (
    <div>
      <HeadingSeparator title="Please confirm the data filled" />
      <PrettyJson formData={formData} schema={schema} />
      <Box my={8}>
        <Button
          sdsStyle="square"
          sdsType="secondary"
          sx={{ mr: 4 }}
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          sdsStyle="square"
          sdsType="primary"
          sx={{ mr: 4 }}
          onClick={onConfirmation}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}
