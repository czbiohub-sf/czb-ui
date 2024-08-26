"use client";
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
  minHeight?: string;
}

// TODO: Make props for home logo link
export const NavBar = ({
  logo,
  title,
  pages,
  pagesComponent,
  legacyLook,
  useLogoWithTitleVariant,
  minHeight = "80px",
}: NavBarProps) => {
  const theme = useTheme();

  const numberOfPages = pages?.length ?? 0;
  // If there's 4 or more pages, switch to mobile menu
  // at md breakpoint instead of sm breakpoint
  const showHamburger = useMediaQuery(
    theme.breakpoints.up(numberOfPages >= 4 ? "lg" : "sm")
  );

  return (
    <AppBar appBarProps={{ position: "relative" }} minHeight={minHeight}>
      {/* flexGrow so it menu to the right */}
      {/* With legacyLook, only hamburger menu is to the right */}
      <Box flexGrow={legacyLook ? (showHamburger ? 0 : 1) : 1} display="flex">
        <Link
          sx={{ display: "flex", alignItems: "center", color: "inherit" }}
          component={pagesComponent}
          href="/"
        >
          <Box sx={{ mr: 6, display: "inherit" }}>{logo}</Box>
          {useLogoWithTitleVariant && (
            <Box
              sx={{
                position: "absolute",
                fontWeight: "bold",
                left: { xs: "78px", sm: "102px" },
                top: "17px",
                fontSize: "20px",
              }}
            >
              {title}
            </Box>
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
      {pages && numberOfPages > 0 && showHamburger && (
        <DesktopPagesMenu pages={pages} pagesComponent={pagesComponent} />
      )}
      {pages && numberOfPages > 0 && !showHamburger && (
        <MobilePagesMenu
          pages={pages}
          pagesComponent={pagesComponent}
          offsetHeight={minHeight}
        />
      )}
    </AppBar>
  );
};
