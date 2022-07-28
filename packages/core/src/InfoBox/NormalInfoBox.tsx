import { Typography, styled, useTheme, useMediaQuery } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import { Link } from "czifui";
import { InfoBoxProps } from "./InfoBox";

interface NormalInfoBoxContainerProps extends BoxProps {
  imageOnRight?: boolean;
}

const NormalInfoBoxContainer = styled(Box, {
  shouldForwardProp: (prop) => prop != "imageOnRight",
})<NormalInfoBoxContainerProps>(({ imageOnRight, theme }) => ({
  zIndex: 1,
  height: "100%",
  display: "flex",
  gap: "40px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "10px",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: imageOnRight ? "row-reverse" : "row",
  },
}));

export default function NormalInfoBox({
  title,
  subtitle,
  page,
  pagesComponent,
  image,
  imageOnRight,
}: InfoBoxProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <NormalInfoBoxContainer imageOnRight={imageOnRight}>
      <Box maxWidth="300px" border="1px solid" borderColor="divider">
        {image}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
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
          <Link sx={{ marginTop: "1rem" }} href={page?.to}>
            {page?.title}
          </Link>
        )}
      </Box>
    </NormalInfoBoxContainer>
  );
}
