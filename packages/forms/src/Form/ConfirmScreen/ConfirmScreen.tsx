import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "czifui";

interface ConfirmScreenProps {
  formData: any;
  onConfirmation: () => void;
  onCancel: () => void;
  // TODO: onEditStep: (step: number) => void;
}

export default function ConfirmScreen({
  formData,
  onConfirmation,
  onCancel,
}: ConfirmScreenProps) {
  return (
    <div>
      <Typography variant="h1">Please confirm the data filled</Typography>
      <Typography>{JSON.stringify(formData)}</Typography>
      <Box my={4}>
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
