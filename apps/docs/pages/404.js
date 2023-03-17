import { Box, Typography } from "@mui/material";

export default function Custom404() {
  return (
    <Box
      display="flex"
      height="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h1">404</Typography>
      <Typography>Page not found</Typography>
    </Box>
  );
}
