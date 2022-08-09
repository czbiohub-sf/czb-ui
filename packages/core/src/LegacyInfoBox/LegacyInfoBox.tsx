import { Box, Typography } from "@mui/material";
import { PageLink } from "../UniversalTypes/links";
import { Link, Button } from "czifui";

export interface LegacyInfoBoxProps {
  title?: string;
  subtitle?: string;
  page?: PageLink;
  pagesComponent?: any; // TODO: Find type of mui link component prop
  image?: React.ReactNode;
  variant?: "normal" | "withButton";
}

// TODO: Make this into a component itself,
// for all the other components to use also
interface InfoBoxLinkProps {
  page?: PageLink;
  pagesComponent?: any; // TODO: Find type of mui link component prop
  withButton: boolean;
}

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
      <Link sx={{ marginTop: "1rem", fontWeight: "bold" }} href={page?.to}>
        {page?.title}
      </Link>
    );
  }
  if (pagesComponent && withButton) {
    return (
      <Button
        sx={{ marginTop: "1rem" }}
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
      sx={{ marginTop: "1rem", fontWeight: "bold" }}
      href={page?.to}
      sdsStyle="square"
      sdsType="primary"
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
  variant = "withButton",
}: LegacyInfoBoxProps) => {
  return (
    <Box
      display="flex"
      gap={{ xs: "10px", sm: "30px" }}
      alignItems={{ xs: "flex-start", sm: "center" }}
      flexDirection={{ xs: "column", sm: "row" }}
      height={160}
    >
      <Box border="1px solid" borderColor="divider" width={300} height={160}>
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
