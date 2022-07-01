import React from "react";

import { Banner as CZBUIBanner } from "@czb-ui/core";
import background from "./assets/viral_background_biohub.png";

export default {
  title: "Banner",
  component: CZBUIBanner,
  argTypes: {},
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
    subtitle={args.subtitle}
    backgroundOpacity={args.backgroundOpacity}
  />
);

export const Banner = BannerTemplate.bind({});
Banner.args = {
  title: "CZB-UI",
  subtitle: "The new UI library for CZ Biohub",
  backgroundOpacity: 0.5,
  background: background,
};
