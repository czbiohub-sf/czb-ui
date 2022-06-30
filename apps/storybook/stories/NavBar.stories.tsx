import React from "react";

import { NavBar as CZBUINavBar } from "@czb-ui/core";
import { BiohubLogo } from "@czb-ui/biohub-logos";

// TODO: Put each example in a component

export default {
  title: "NavBar",
  component: CZBUINavBar,
};

const pages = [
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Data",
    to: "/data",
  },
  {
    title: "Images",
    to: "/images",
  },
];

const NavBarTemplate = (args: any) => (
  <CZBUINavBar
    logo={<BiohubLogo sx={{ fontSize: "2rem" }} />}
    title={args.title}
    pages={args.pages}
  />
);

export const NavBar = NavBarTemplate.bind({});
NavBar.args = {
  title: "CZB UI",
  pages: pages,
};
