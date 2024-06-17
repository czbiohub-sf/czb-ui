import { Box } from "@mui/material";
import { Button } from "@czi-sds/components";

interface FormPageNavProps {
  steps: number; // Number of steps the form has
  remSteps: number; // Remaining steps
  goBackOneStep?: () => void;
  showSubmitAtLastStep?: boolean;
}

export default function FormPageNav({
  steps,
  remSteps,
  goBackOneStep,
  showSubmitAtLastStep,
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
      {remSteps == 1 && !showSubmitAtLastStep && (
        // On the last step of the form,
        // and the confirm screen is enabled.
        // We don't want to show the submit button because
        // the confirm screen has yet to show.
        // Show "Next" button
        <Button sdsType="secondary" sdsStyle="square" type="submit">
          Next
        </Button>
      )}
      {remSteps == 1 && showSubmitAtLastStep && (
        // On the last step of the form,
        // and the confirm screen is disabled.
        // The confirm screen is disabled,
        // so this is the last page of the form.
        // show primary "Submit" button
        <Button sdsType="primary" sdsStyle="square" type="submit">
          Submit
        </Button>
      )}
    </Box>
  );
}
