import React from "react";
import { HeadingSeparator } from "@czb-ui/core";
import { Button } from "czifui";
import { Box, Typography } from "@mui/material";

interface SuccessfulSubmitProps {
  onSubmitAnotherResponse: () => void;
}

export default function SuccessfulSubmit({
  onSubmitAnotherResponse,
}: SuccessfulSubmitProps) {
  // TODO: Add prop to customize text?
  return (
    <div>
      <HeadingSeparator title="Sample submitted successfully!" />
      <Typography my={4}>Text here...</Typography>
      <Box my={4}>
        <Button
          sdsType="primary"
          sdsStyle="minimal"
          onClick={onSubmitAnotherResponse}
        >
          Submit another sample
        </Button>
      </Box>
    </div>
  );
}
