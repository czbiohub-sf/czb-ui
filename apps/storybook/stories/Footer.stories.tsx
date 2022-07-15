import React from "react";

import { Footer as CZBUIFooter } from "@czb-ui/core/src";
import { BiohubLogo } from "@czb-ui/biohub-logos/src";

export default {
  title: "Footer",
  component: CZBUIFooter,
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

const FooterTemplate = (args: any) => (
  <CZBUIFooter
    logo={<BiohubLogo sx={{ fontSize: "2rem" }} />}
    title={args.title}
    pages={args.pages}
  />
);

export const Footer = FooterTemplate.bind({});
Footer.args = {
  title: "CZ BIOHUB",
  pages: pages,
};
