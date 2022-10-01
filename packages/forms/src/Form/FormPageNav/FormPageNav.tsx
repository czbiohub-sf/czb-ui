import { Box } from "@mui/material";
import { Button } from "czifui";

interface FormPageNavProps {
  steps: number; // Number of steps the form has
  remSteps: number; // Remaining steps
  goBackOneStep: () => void;
}

export default function FormPageNav({
  steps,
  remSteps,
  goBackOneStep,
}: FormPageNavProps) {
  return (
    <Box my={4}>
      {remSteps != steps && (
        // Not on the last step of the form,
        // but first step was done already,
        // show secondary "Back" button
        <Button
          sdsType="secondary"
          sdsStyle="square"
          onClick={goBackOneStep}
          sx={{ mr: 4 }}
        >
          Back
        </Button>
      )}
      {remSteps != 1 && (
        // Not on the last step of the form,
        // show secondary "Next" button
        <Button
          sdsType="secondary"
          sdsStyle="square"
          type="submit"
          sx={{ mr: 4 }}
        >
          Next
        </Button>
      )}
      {remSteps == 1 && (
        // On the last step of the form,
        // show primary "Submit" button
        <Button sdsType="primary" sdsStyle="square" type="submit">
          Submit
        </Button>
      )}
    </Box>
  );
}
