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
      <Container
        maxWidth={false}
        sx={{ zIndex: 1, height: "100%", maxWidth: "2000px" }}
      >
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 1, lg: 8 }}
          sx={{ height: "100%", justifyContent: "center" }}
        >
          <Box sx={{ flex: 2, display: "flex" }}>{image}</Box>
          <Box
            sx={{
              display: "inherit",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
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
