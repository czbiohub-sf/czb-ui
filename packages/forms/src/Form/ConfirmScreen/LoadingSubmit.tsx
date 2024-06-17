import React from "react";
import { HeadingSeparator } from "@czb-ui/core";
import { LoadingIndicator } from "@czi-sds/components";
import { Box } from "@mui/material";

export default function LoadingSubmit() {
  return (
    <div>
      <HeadingSeparator title="Submitting Sample..." />
      <Box my={4}>
        <LoadingIndicator sdsStyle="tag" />
      </Box>
    </div>
  );
}
