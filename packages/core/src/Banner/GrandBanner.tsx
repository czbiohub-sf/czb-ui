import { Box, Container, Typography, Stack } from "@mui/material";
import { Center } from "../Center/Center";

interface GrandBannerProps {
  image?: React.ReactNode;
  title?: string;
  subtitle?: string;
  direction?: "left" | "right";
  height?: string;
}

export const GrandBanner = ({
  image,
  title,
  subtitle,
  direction = "right",
  height = "500px",
}: GrandBannerProps) => {
  // If direction is left, return right, and vice versa
  const otherDirection = direction == "left" ? "right" : "left";

  return (
    <Box sx={{ height: height, position: "relative" }}>
      <Container sx={{ zIndex: 1, height: "100%" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ height: "100%", justifyContent: "center" }}
        >
          <Box>{image}</Box>
          <Box
            sx={{
              display: "inherit",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h1"
              fontSize="2.5rem"
              component="div"
              gutterBottom={false}
            >
              {title}
            </Typography>
            <Typography
              variant="h2"
              component="div"
              gutterBottom={false}
              marginTop="0.5rem"
            >
              {subtitle}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
