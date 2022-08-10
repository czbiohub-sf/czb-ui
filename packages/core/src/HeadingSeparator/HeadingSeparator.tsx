import { Box, Typography } from "@mui/material";

interface HeadingSeparatorProps {
  title?: string;
  id?: string;
}

export const HeadingSeparator = ({ title, id }: HeadingSeparatorProps) => {
  return (
    <Box id={id}>
      <Typography mb={2} variant="h1">
        {title}
      </Typography>
      <Box width="100%" border="1px solid" borderColor="divider" />
    </Box>
  );
};
