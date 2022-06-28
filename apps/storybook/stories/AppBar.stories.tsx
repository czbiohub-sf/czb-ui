import React from "react";

import { AppBar as CZBUIAppBar, Box, Button, Typography } from "@czb-ui/core";
import { BiohubLogo } from "@czb-ui/biohub-logos";

// TODO: Put each example in a component

export default {
  title: "App Bar (with components)",
  component: CZBUIAppBar,
  argTypes: {
    title: {
      control: { type: "text" },
    },
  },
};

const LogoAndTypographyTemplate = (args: any) => (
  <CZBUIAppBar>
    <BiohubLogo sx={{ mr: 1, fontSize: "2rem" }} />
    <Typography
      fontFamily="Barlow"
      fontWeight={700}
      fontSize="1rem"
      gutterBottom={false}
      component="span"
      variant="inherit"
    >
      {args.title}
    </Typography>
  </CZBUIAppBar>
);

export const AppBarWithLogoAndTypographyComponents =
  LogoAndTypographyTemplate.bind({});
AppBarWithLogoAndTypographyComponents.args = {
  title: "CZB UI",
};

// Nav bar example

const pages = ["About", "Data", "Images"];

const NavBarTemplate = (args: any) => (
  <CZBUIAppBar>
    <BiohubLogo sx={{ mr: 1, fontSize: "2rem" }} />
    <Typography
      fontFamily="Barlow"
      fontWeight={700}
      fontSize="1rem"
      gutterBottom={false}
      component="span"
      variant="inherit"
    >
      {args.title}
    </Typography>
    <Box sx={{ mx: 2 }}>
      {pages.map((page) => (
        <Button color="inherit">{page}</Button>
      ))}
    </Box>
  </CZBUIAppBar>
);

export const NavBar = NavBarTemplate.bind({});
NavBar.args = {
  title: "CZB UI",
};
