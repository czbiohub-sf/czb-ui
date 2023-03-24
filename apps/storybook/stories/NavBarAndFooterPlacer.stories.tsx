import React from "react";

import {
  NavBarAndFooterPlacer as CZBUINavAndFootPlacer,
  NavBar,
  Footer,
} from "@czb-ui/core/src";
import { SFColor, SFColorReverse } from "@czb-ui/biohub-logos/src";

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

const samplePages = [
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

const pageGroups = [
  {
    title: "Applications",
    pages: samplePages,
  },
  {
    title: "Company",
    pages: samplePages,
  },
  {
    title: "Resources",
    pages: samplePages,
  },
];

const NvBrAFoPlTemplate = (args: any) => {
  return (
    <CZBUINavAndFootPlacer
      topBar={
        <NavBar logo={<SFColor />} title={args.title} pages={args.pages} />
      }
      bottomBar={<Footer logo={<SFColorReverse />} pages={args.footerPages} />}
    >
      <main>content</main>
    </CZBUINavAndFootPlacer>
  );
};

export const NavBarAndFooterPlacer = NvBrAFoPlTemplate.bind({});
NavBarAndFooterPlacer.args = {
  title: "CZB UI",
  pages: pages,
  footerPages: pageGroups,
};
