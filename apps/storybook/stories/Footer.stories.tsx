import React from "react";

import { Footer as CZBUIFooter } from "@czb-ui/core/src";
import { DnaMark } from "@czb-ui/biohub-logos/src";

export default {
  title: "Footer",
  component: CZBUIFooter,
};

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

const FooterTemplate = (args: any) => (
  <CZBUIFooter
    logo={<DnaMark sx={{ fontSize: "2rem" }} />}
    title={args.title}
    pages={args.pages}
  />
);

export const Footer = FooterTemplate.bind({});
Footer.args = {
  title: "CZ BIOHUB",
  pages: pageGroups,
};
