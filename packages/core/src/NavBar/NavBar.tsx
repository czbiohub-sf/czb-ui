import React from "react";
import { AppBar } from "../AppBar/AppBar";
import { Typography, Box, Link, Divider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { DesktopPagesMenu } from "./DesktopPagesMenu";
import { MobilePagesMenu } from "./MobilePagesMenu";
import { PageLink } from "../UniversalTypes/links";

interface NavBarProps {
  logo?: React.ReactNode;
  title?: string;
  pages?: Array<PageLink>;
  pagesComponent?: any; // TODO: Find type of mui button component prop
  legacyLook?: boolean;
  useLogoWithTitleVariant?: boolean;
}

// TODO: Make props for home logo link
export const NavBar = ({
  logo,
  title,
  pages,
  pagesComponent,
  legacyLook,
  useLogoWithTitleVariant,
}: NavBarProps) => {
  const theme = useTheme();

  const numberOfPages = pages?.length ?? 0;
  // If there's more than 7 pages, switch to mobile menu
  // at md breakpoint instead of sm breakpoint
  const onDesktop = useMediaQuery(
    theme.breakpoints.up(numberOfPages > 7 ? "md" : "sm")
  );

  return (
    <AppBar position="relative">
      {/* flexGrow so it menu to the right */}
      {/* With legacyLook, only hamburger menu is to the right */}
      <Box flexGrow={legacyLook ? (onDesktop ? 0 : 1) : 1} display="flex">
        <Link
          sx={{ display: "flex", alignItems: "center", color: "inherit" }}
          component={pagesComponent}
          to="/"
        >
          <Box sx={{ mr: 6, display: "inherit" }}>{logo}</Box>
          {useLogoWithTitleVariant && (
            <Typography
              sx={{
                position: "absolute",
                fontWeight: "bold",
                left: { xs: "75px", sm: "100px" },
                top: "15px",
                fontSize: "20px",
              }}
            >
              {title}
            </Typography>
          )}
          {!legacyLook && !useLogoWithTitleVariant && (
            <>
              <Divider orientation="vertical" flexItem sx={{ mr: 6 }} />
              <Typography
                fontWeight={700}
                fontSize="1.2rem"
                gutterBottom={false}
                component="span"
              >
                {title}
              </Typography>
            </>
          )}
          {legacyLook && !useLogoWithTitleVariant && (
            <Typography
              fontWeight={700}
              fontSize="1rem"
              gutterBottom={false}
              component="span"
              variant="h1"
            >
              {title}
            </Typography>
          )}
        </Link>
      </Box>
      {pages && onDesktop && (
        <DesktopPagesMenu pages={pages} pagesComponent={pagesComponent} />
      )}
      {pages && !onDesktop && (
        <MobilePagesMenu pages={pages} pagesComponent={pagesComponent} />
      )}
    </AppBar>
  );
};
