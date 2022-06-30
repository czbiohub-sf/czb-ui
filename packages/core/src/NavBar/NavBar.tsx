import React from "react";
import { AppBar } from "../AppBar/AppBar";
import { Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { DesktopPagesMenu } from "./DesktopPagesMenu";

// Exported for the page menu components,
// e.g. <DesktopPagesMenu />
export interface PagesObject {
  title: string;
  to: string;
}

interface NavBarProps {
  logo?: React.ReactNode;
  title?: string;
  pages?: Array<PagesObject>;
  pagesComponent?: any; // TODO: Find type of mui button component prop
}

export const NavBar = ({ logo, title, pages, pagesComponent }: NavBarProps) => {
  const theme = useTheme();
  const onDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <AppBar>
      <Box sx={{ mr: 1, display: "inherit" }}>{logo}</Box>
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
      {pages && onDesktop && (
        <DesktopPagesMenu pages={pages} pagesComponent={pagesComponent} />
      )}
    </AppBar>
  );
};
