import React from "react";

import { AppBar as CZBUIAppBar, Typography } from "@czb-ui/core";
import { BiohubLogo } from "@czb-ui/biohub-logos";

export default {
  title: "App Bar (with components)",
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
    <Typography
      fontFamily="Barlow"
      fontWeight={800}
      fontSize="1rem"
      gutterBottom={false}
      component="span"
      variant="inherit"
    >
      {args.title}
    </Typography>
  </CZBUIAppBar>
);

export const AppBarWithLogoAndTypographyComponents = Template.bind({});
AppBarWithLogoAndTypographyComponents.args = {
  title: "CZB UI",
};
