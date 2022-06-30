import React from "react";

import { NavBar as CZBUINavBar } from "@czb-ui/core";
import { BiohubLogo } from "@czb-ui/biohub-logos";

// TODO: Put each example in a component

export default {
  title: "NavBar",
  component: CZBUINavBar,
  argTypes: {
    title: {
      control: { type: "text" },
    },
  },
};

const NavBarTemplate = (args: any) => (
  <CZBUINavBar title={args.title} pages={args.pages} />
);

export const NavBar = NavBarTemplate.bind({});
NavBar.args = {
  title: "CZB UI",
};
