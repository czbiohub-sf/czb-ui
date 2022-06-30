import { Box, Typography } from "@mui/material";

interface BannerProps {
  background?: React.ReactNode;
  title?: string;
  subtitle?: string;
  height?: string;
}

export const Banner = ({
  background,
  title,
  subtitle,
  height = "500px",
}: BannerProps) => {
  return (
    <Box sx={{ height: height, position: "relative" }}>
      <Box>
        <Typography variant="h1">{title}</Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        {background}
      </Box>
    </Box>
  );
};
