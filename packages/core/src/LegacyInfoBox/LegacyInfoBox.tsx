import { Box, Stack, Typography } from "@mui/material";
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
  putButtonOnBottom?: boolean;
}

// TODO: Simplify this component
// if pagesComponent is not passed, its an external link
// in this case for now
const InfoBoxLink = ({
  page,
  pagesComponent,
  withButton,
  putButtonOnBottom,
}: InfoBoxLinkProps) => {
  if (pagesComponent && !withButton) {
    return (
      <Link
        sx={{ marginTop: putButtonOnBottom ? "auto" : 5 }}
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
        sx={{ marginTop: putButtonOnBottom ? "auto" : 5, fontWeight: "bold" }}
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
        sx={{
          marginTop: { xs: 2, md: putButtonOnBottom ? "auto" : 5 },
          width: "120px",
        }}
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
      sx={{
        marginTop: { xs: 2, md: putButtonOnBottom ? "auto" : 5 },
        fontWeight: "bold",
        width: "120px",
      }}
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

/**
 * @deprecated Please use the `InfoBox` component instead.
 */
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

  const hasSubtitle =
    subtitle !== "" && subtitle !== undefined && subtitle !== null;

  return (
    <Box
      display="flex"
      gap={small ? { xs: "5px", md: "20px" } : { xs: "10px", sm: "30px" }}
      alignItems={small ? "stretch" : { xs: "flex-start", sm: "center" }}
      flexDirection={
        small
          ? { xs: "column", md: "row" }
          : { xs: "column", sm: small ? "column" : "row" }
      }
      height="100%"
    >
      <Box
        border="1px solid"
        borderColor="divider"
        width={currentDim}
        height={square ? currentDim : small ? "inherit" : 160}
      >
        {image}
      </Box>
      <Stack justifyContent={!hasSubtitle ? "center" : ""}>
        <div>
          <Typography variant="h2">{title}</Typography>
          <Typography mb={hasSubtitle ? { xs: "0px", md: 5 } : "0px"}>
            {subtitle}
          </Typography>
        </div>
        <InfoBoxLink
          page={page}
          pagesComponent={pagesComponent}
          withButton={variant == "withButton"}
          putButtonOnBottom={hasSubtitle}
        />
      </Stack>
    </Box>
  );
};
