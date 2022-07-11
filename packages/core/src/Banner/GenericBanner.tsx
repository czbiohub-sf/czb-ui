import { Box, Container, Typography } from "@mui/material";
import { Center } from "../Center/Center";

interface GenericBannerProps {
  background?: React.ReactNode;
  backgroundOpacity?: number;
  title?: string;
  subtitle?: string;
  height?: string;
}

export const GenericBanner = ({
  background,
  backgroundOpacity = 0.5,
  title,
  subtitle,
  height = "500px",
}: GenericBannerProps) => {
  return (
    <Box
      sx={{ height: height, position: "relative", backgroundColor: "black" }}
    >
      <Center justifyContent="left">
        <Container maxWidth="lg" sx={{ color: "white", zIndex: 1 }}>
          <Typography
            fontSize="2.5rem"
            variant="h1"
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
        </Container>
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
