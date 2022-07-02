import React from "react";

import { GrandBanner as CZBUIGrandBanner } from "@czb-ui/core";
import background from "./assets/sapiens_banner.webp";

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
  title: "TABULA SAPIENS",
  subtitle: "Human transcriptome reference at single cell resolution.",
  background: background,
};
