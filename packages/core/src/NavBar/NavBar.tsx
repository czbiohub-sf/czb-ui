import React from "react";
import { AppBar } from "../AppBar/AppBar";
import { Typography, Box, Link } from "@mui/material";
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
}

// TODO: Make props for home logo link
export const NavBar = ({ logo, title, pages, pagesComponent }: NavBarProps) => {
  const theme = useTheme();
  const onDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <AppBar position="relative">
      {/* flexGrow so it pushes the hamburger menu to the right */}
      <Box flexGrow={onDesktop ? 0 : 1} display="flex">
        <Link
          sx={{ display: "flex", alignItems: "center", color: "inherit" }}
          component={pagesComponent}
          to="/"
        >
          <Box sx={{ mr: 5, display: "inherit" }}>{logo}</Box>
          <Typography
            fontFamily="Barlow"
            fontWeight={700}
            fontSize="1rem"
            gutterBottom={false}
            component="span"
            variant="inherit"
          >
            {title}
          </Typography>
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
