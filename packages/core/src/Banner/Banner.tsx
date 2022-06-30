import { Box, Typography } from "@mui/material";
import { Center } from "../Center/Center";

interface BannerProps {
  background?: React.ReactNode;
  backgroundOpacity?: number;
  title?: string;
  subtitle?: string;
  height?: string;
}

export const Banner = ({
  background,
  backgroundOpacity = 0.5,
  title,
  subtitle,
  height = "500px",
}: BannerProps) => {
  return (
    <Box
      sx={{ height: height, position: "relative", backgroundColor: "black" }}
    >
      <Center justifyContent="left">
        <Box margin={10} color="white" zIndex={1}>
          <Typography variant="h1" gutterBottom={false}>
            {title}
          </Typography>
          <Typography variant="h2" gutterBottom={false} marginTop="0.5rem">
            {subtitle}
          </Typography>
        </Box>
      </Center>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          opacity: backgroundOpacity,
        }}
      >
        {background}
      </Box>
    </Box>
  );
};
