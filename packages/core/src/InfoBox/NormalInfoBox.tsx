import { Typography, styled, useTheme } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import { Link } from "czifui";
import { InfoBoxProps } from "./InfoBox";

interface NormalInfoBoxContainerProps extends BoxProps {
  imageOnRight?: boolean;
  small?: boolean;
}

const NormalInfoBoxContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    !["imageOnRight", "small"].includes(prop.toString()),
})<NormalInfoBoxContainerProps>(({ imageOnRight, small, theme }) => ({
  zIndex: 1,
  height: "100%",
  display: "flex",
  gap: "40px",
  margin: "20px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "10px",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: small ? "column" : imageOnRight ? "row-reverse" : "row",
  },
}));

export default function NormalInfoBox({
  title,
  subtitle,
  page,
  pagesComponent,
  image,
  imageOnRight,
  small,
}: InfoBoxProps) {
  return (
    <NormalInfoBoxContainer imageOnRight={imageOnRight} small={small}>
      <Box maxWidth="300px" flex={3}>
        {image}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        flex={2}
      >
        <Typography variant="h2" component="div">
          {title}
        </Typography>
        <Typography>{subtitle}</Typography>
        {pagesComponent && (
          <Link
            sx={{ marginTop: "1rem" }}
            to={page?.to}
            component={page?.to ? pagesComponent : undefined}
          >
            {page?.title}
          </Link>
        )}
        {/* If target="_blank" needs to be added also add rel="noopener" */}
        {!pagesComponent && (
          <Link sx={{ marginTop: "1rem", fontWeight: "bold" }} href={page?.to}>
            {page?.title}
          </Link>
        )}
      </Box>
    </NormalInfoBoxContainer>
  );
}
