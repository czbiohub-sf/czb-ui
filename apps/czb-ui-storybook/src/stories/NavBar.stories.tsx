import React from "react";

import { NavBar as CZBUINavBar } from "@czb-ui/core/src";
import { SFColor } from "@czb-ui/biohub-logos/src";

export default {
  title: "NavBar",
  component: CZBUINavBar,
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

const morePages = [
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
  {
    title: "Sample Text",
    to: "/sample-text",
  },
  {
    title: "Sample Text 2",
    to: "/sample-text-2",
  },
];

const NavBarTemplate = (args: any) => (
  <CZBUINavBar logo={<SFColor />} title={args.title} pages={args.pages} />
);

export const NavBar = NavBarTemplate.bind({});
NavBar.args = {
  title: "CZB UI",
  pages: pages,
};

export const MorePages = NavBarTemplate.bind({});
MorePages.args = {
  title: "CZB UI",
  pages: morePages,
};
