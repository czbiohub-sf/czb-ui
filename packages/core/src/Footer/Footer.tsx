import React from "react";
import { FooterBar } from "../FooterBar/FooterBar";
import { Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { PagesObject } from "../NavBar/NavBar";
import { FooterPagesGroup } from "./FooterPagesGroup";

// Exported for the page menu components,
// e.g. <DesktopPagesMenu />
// export interface PagesObject {
//   title: string;
//   to: string;
// }

interface FooterProps {
  logo?: React.ReactNode;
  title?: string;
  pages?: Array<any>; // TODO: Fix prop type
  pagesComponent?: any; // TODO: Find type of mui button component prop
}

export const Footer = ({ logo, title, pages, pagesComponent }: FooterProps) => {
  const theme = useTheme();
  const onDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  // TODO: add component=footer
  return (
    <FooterBar position="relative" sx={{ top: "auto", bottom: 0 }}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box sx={{ mr: 5, display: "inherit" }}>{logo}</Box>
        <Typography
          fontFamily="Barlow"
          fontWeight={700}
          fontSize="1rem"
          gutterBottom={false}
          component="span"
          variant="inherit"
          flexGrow={onDesktop ? 0 : 1} // So it pushes the hamburger menu to the right
        >
          {title}
        </Typography>
      </Box>
      {pages && <FooterPagesGroup pages={pages} />}
    </FooterBar>
  );
};
