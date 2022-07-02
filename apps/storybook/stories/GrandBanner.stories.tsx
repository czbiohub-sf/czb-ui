import React from "react";

import { GrandBanner as CZBUIGrandBanner } from "@czb-ui/core";
import background from "./assets/viral_background_biohub.png";

export default {
  title: "Banners",
  component: CZBUIGrandBanner,
  argTypes: {},
};

const BannerTemplate = (args: any) => (
  <CZBUIGrandBanner
    image={
      <img
        style={{ objectFit: "cover", height: "100%", width: "100%", zIndex: 0 }}
        src={args.background}
      />
    }
    title={args.title}
    subtitle={args.subtitle}
  />
);

export const GrandBanner = BannerTemplate.bind({});
GrandBanner.args = {
  title: "CZB-UI",
  subtitle: "The new UI library for CZ Biohub",
  background: background,
};
