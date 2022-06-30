import React from "react";

import { Banner as CZBUIBanner } from "@czb-ui/core";
import background from "./assets/viral_background_biohub.png";

export default {
  title: "Banner",
  component: CZBUIBanner,
};

const BannerTemplate = (args: any) => (
  <CZBUIBanner
    background={
      <img
        style={{ objectFit: "cover", height: "100%", width: "100%", zIndex: 0 }}
        src={args.background}
      />
    }
    title={args.title}
  />
);

export const Banner = BannerTemplate.bind({});
Banner.args = {
  title: "CZB-UI",
  background: background,
};
