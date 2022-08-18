import { Box, Typography } from "@mui/material";
import { PageLink } from "../UniversalTypes/links";
import { Link, Button } from "czifui";

export interface LegacyInfoBoxProps {
  title?: string;
  subtitle?: string;
  page?: PageLink;
  pagesComponent?: any; // TODO: Find type of mui link component prop
  image?: React.ReactNode;
  small?: boolean;
  square?: boolean;
  variant?: "normal" | "withButton";
}

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
  if (pagesComponent && !withButton) {
    return (
      <Link
        sx={{ marginTop: "1rem" }}
        to={page?.to}
        component={page?.to ? pagesComponent : undefined}
      >
        {page?.title}
      </Link>
    );
  }
  if (!pagesComponent && !withButton) {
    return (
      <Link
        sx={{ marginTop: "1rem", fontWeight: "bold" }}
        href={page?.to}
        target={page?.newTab ? "_blank" : undefined}
        rel="noopener"
      >
        {page?.title}
      </Link>
    );
  }
  if (pagesComponent && withButton) {
    return (
      <Button
        sx={{ marginTop: { xs: "0.5rem", md: "1rem" } }}
        to={page?.to}
        component={page?.to ? pagesComponent : undefined}
        sdsStyle="square"
        sdsType="primary"
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
      sdsStyle="square"
      sdsType="primary"
      target={page?.newTab ? "_blank" : undefined}
      rel="noopener"
    >
      {page?.title}
    </Button>
  );
};

export const LegacyInfoBox = ({
  title,
  subtitle,
  page,
  pagesComponent,
  image,
  small,
  square,
  variant = "withButton",
}: LegacyInfoBoxProps) => {
  const defaultDim = 250;
  const smallerDim = 200;

  const currentDim = small ? smallerDim : defaultDim;

  return (
    <Box
      display="flex"
      gap={small ? { xs: "5px", md: "20px" } : { xs: "10px", sm: "30px" }}
      alignItems={
        small
          ? { xs: "flex-start", md: "center" }
          : { xs: "flex-start", sm: "center" }
      }
      flexDirection={
        small
          ? { xs: "column", md: "row" }
          : { xs: "column", sm: small ? "column" : "row" }
      }
    >
      <Box
        border="1px solid"
        borderColor="divider"
        width={currentDim}
        height={square ? currentDim : small ? 106 : 160}
      >
        {image}
      </Box>
      <Box>
        <Typography variant="h2" mb={2}>
          {title}
        </Typography>
        <Typography mb={variant != "withButton" ? 5 : 1}>{subtitle}</Typography>
        <InfoBoxLink
          page={page}
          pagesComponent={pagesComponent}
          withButton={variant == "withButton"}
        />
      </Box>
    </Box>
  );
};
