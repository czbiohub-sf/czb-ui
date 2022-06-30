import React from "react";
import { AppBar } from "../AppBar/AppBar";
import { Typography, Box, Button } from "@mui/material";

interface PagesObject {
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
      {pages && (
        <Box sx={{ mx: 2 }}>
          {pages.map((page) => (
            <Button color="inherit" component={pagesComponent} to={page.to}>
              {page.title}
            </Button>
          ))}
        </Box>
      )}
    </AppBar>
  );
};
