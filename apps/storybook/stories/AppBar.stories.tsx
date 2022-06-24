import React from "react";

import { AppBar as CZBUIAppBar, Typography } from "@czb-ui/core";
import { BiohubLogo } from "@czb-ui/biohub-logos";

export default {
  title: "App Bar",
  component: CZBUIAppBar,
  argTypes: {
    title: {
      control: { type: "text" },
    },
  },
};

const Template = (args: any) => (
  <CZBUIAppBar>
    <BiohubLogo sx={{ mr: 1, fontSize: "2rem" }} />
    <Typography fontFamily="Barlow" fontWeight={800} fontSize="1rem">
      {args.title}
    </Typography>
  </CZBUIAppBar>
);

export const AppBar = Template.bind({});
AppBar.args = {
  title: "CZB UI",
};
