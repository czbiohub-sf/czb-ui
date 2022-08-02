import React from "react";
import { FooterBar } from "../FooterBar/FooterBar";
import { Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { PageGroup } from "../UniversalTypes/links";
import { FooterPagesGroup } from "./FooterPagesGroup";

interface FooterProps {
  logo?: React.ReactNode;
  title?: string;
  pages?: Array<PageGroup>;
  pagesComponent?: any; // TODO: Find type of mui button component prop
}

export const Footer = ({ logo, title, pages, pagesComponent }: FooterProps) => {
  const theme = useTheme();
  const onDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <FooterBar position="relative" sx={{ top: "auto", bottom: 0 }}>
      <Box display="flex" alignItems="center">
        <Box sx={{ mr: 5, display: "inherit" }}>{logo}</Box>
        <Typography
          fontWeight={700}
          fontSize="1rem"
          gutterBottom={false}
          component="span"
          variant="h1"
          flexGrow={onDesktop ? 0 : 1} // So it pushes the hamburger menu to the right
        >
          {title}
        </Typography>
      </Box>
      {pages && (
        <FooterPagesGroup pages={pages} pagesComponent={pagesComponent} />
      )}
    </FooterBar>
  );
};
