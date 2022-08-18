import { Box, Container, Typography, Stack } from "@mui/material";

interface GrandBannerProps {
  image?: React.ReactNode;
  title?: string;
  subtitle?: string;
  direction?: "left" | "right";
  height?: string;
  titleFont?: "Butler" | "Lato";
}

export const GrandBanner = ({
  image,
  title,
  subtitle,
  direction = "right",
  height = "500px",
  titleFont = "Butler",
}: GrandBannerProps) => {
  // If direction is left, return right, and vice versa
  const otherDirection = direction == "left" ? "right" : "left";

  const titleHeadingVarMap = {
    Butler: "ultimateHeading",
    Lato: "latoHeading",
  };

  return (
    <Box sx={{ height: height, position: "relative" }}>
      <Container sx={{ zIndex: 1, height: "100%" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 8 }}
          sx={{ height: "100%", justifyContent: "center" }}
          mt={{ xs: "40px", sm: "0px" }}
        >
          <Box sx={{ flex: 1.5, display: "flex", alignItems: "center" }}>
            {image}
          </Box>
          <Box
            sx={{
              display: "inherit",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Typography
              // TODO: Find out how to do map types or something
              // @ts-ignore
              variant={titleHeadingVarMap[titleFont]}
              fontSize="2.5rem"
              component="div"
              gutterBottom={false}
            >
              {title}
            </Typography>
            <Typography
              variant="h3"
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
