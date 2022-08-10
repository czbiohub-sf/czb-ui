import { Box, Typography } from "@mui/material";

interface HeadingSeparatorProps {
  title?: string;
}

export const HeadingSeparator = ({ title }: HeadingSeparatorProps) => {
  return (
    <Box>
      <Typography mb={2} variant="h1">
        {title}
      </Typography>
      <Box width="100%" border="1px solid" borderColor="divider" />
    </Box>
  );
};
