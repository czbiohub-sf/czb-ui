import React from "react";

import {
  NavBarAndFooterPlacer as CZBUINavAndFootPlacer,
  NavBar,
  Footer,
} from "@czb-ui/core";
import { BiohubLogo } from "@czb-ui/biohub-logos";

export default {
  title: "NavBarAndFooterPlacer",
  component: CZBUINavAndFootPlacer,
  parameters: {
    layout: "fullscreen",
  },
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

const logo = <BiohubLogo sx={{ fontSize: "2rem" }} />;

const NvBrAFoPlTemplate = (args: any) => {
  return (
    <CZBUINavAndFootPlacer
      topBar={<NavBar logo={logo} title={args.title} pages={args.pages} />}
      bottomBar={<Footer logo={logo} title={args.title} pages={args.pages} />}
    >
      content
    </CZBUINavAndFootPlacer>
  );
};

export const NavBarAndFooterPlacer = NvBrAFoPlTemplate.bind({});
NavBarAndFooterPlacer.args = {
  title: "CZB UI",
  pages: pages,
};
