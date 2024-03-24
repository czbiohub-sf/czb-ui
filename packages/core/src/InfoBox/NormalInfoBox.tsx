import { Typography, styled, useTheme, Stack } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import { InfoBoxProps } from "./InfoBox";
import { Button, Icon } from "czifui";
import { PageLink } from "../UniversalTypes/links";

interface NormalInfoBoxContainerProps extends BoxProps {
  imageOnRight?: boolean;
  small?: boolean;
}

const NormalInfoBoxContainer = styled(Box, {
  shouldForwardProp: (prop) => !["small"].includes(prop.toString()),
})<NormalInfoBoxContainerProps>(({ small, theme }) => ({
  // For now the small prop will make the box take up
  // full width. Small prop is true when placed into a Grid
  // on TinaCMS
  zIndex: 1,
  width: "100%",
  maxWidth: small ? "100%" : "350px",
  height: small ? "350px" : "450px",
  padding: "10px",
  border: "1px solid",
  borderColor: theme.palette.grey[200],
  display: "flex",
  flexDirection: "column",
}));

// TODO: Make this into a component itself,
// for all the other components to use also
interface InfoBoxLinkProps {
  page?: PageLink;
  pagesComponent?: any; // TODO: Find type of mui link component prop
  withButton: boolean;
}

// TODO: Simplify this component
// if pagesComponent is not passed, its an external link
// in this case for now
const InfoBoxLink = ({
  page,
  pagesComponent,
  withButton,
}: InfoBoxLinkProps) => {
  // Page title is given, but no link. Disable button
  if (!page?.to) {
    return (
      <Button
        sx={{ marginTop: { xs: "0.5rem", md: "1rem" } }}
        sdsStyle={withButton ? "square" : "minimal"}
        sdsType="primary"
        startIcon={<Icon sdsIcon="plusCircle" sdsSize="s" sdsType="button" />}
        disabled={true}
      >
        {page?.title}
      </Button>
    );
  }

  if (pagesComponent && withButton) {
    return (
      <Button
        sx={{ marginTop: { xs: "0.5rem", md: "1rem" } }}
        to={page?.to}
        component={page?.to ? pagesComponent : undefined}
        sdsStyle={withButton ? "square" : "minimal"}
        sdsType="primary"
        startIcon={<Icon sdsIcon="plusCircle" sdsSize="s" sdsType="button" />}
      >
        {page?.title}
      </Button>
    );
  }

  // if (!pagesComponent && withButton)
  return (
    <Button
      sx={{ marginTop: { xs: "0.5rem", md: "1rem" }, fontWeight: "bold" }}
      href={page?.to}
      sdsStyle={withButton ? "square" : "minimal"}
      sdsType="primary"
      target={page?.newTab ? "_blank" : undefined}
      rel="noopener"
      startIcon={<Icon sdsIcon="plusCircle" sdsSize="s" sdsType="button" />}
    >
      {page?.title}
    </Button>
  );
};

export default function NormalInfoBox({
  title,
  subtitle,
  page,
  pagesComponent,
  image,
  small,
}: InfoBoxProps) {
  return (
    <NormalInfoBoxContainer small={small}>
      {image && (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            border: "1px solid",
            borderColor: "grey.200",
            maxWidth: "100%",
            maxHeight: "138px",
          }}
        >
          {image}
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 7,
          height: "100%",
        }}
      >
        {/* Using a box with display flex instead of Stack so I can adjust margins per element */}
        <Typography
          variant="h2"
          component="span"
          sx={{ fontFamily: "Hanken Grotesk" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "grey", my: 2 }}>
          {subtitle}
        </Typography>
        <Box marginTop="auto">
          <InfoBoxLink
            page={page}
            pagesComponent={pagesComponent}
            withButton={false}
          />
        </Box>
      </Box>
    </NormalInfoBoxContainer>
  );
}
