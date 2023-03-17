import { Box, Typography } from "@mui/material";

export default function Custom500() {
  return (
    <Box
      display="flex"
      height="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h1">500</Typography>
      <Typography>Server-side error occurred</Typography>
    </Box>
  );
}
