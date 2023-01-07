import React from "react";
import { Stack, Box } from "@mui/material";

export default function DocsPageLayout({ sidebar, children }) {
  return (
    <Stack>
      <Box>{sidebar}</Box>
      <Box>{children}</Box>
    </Stack>
  );
}
