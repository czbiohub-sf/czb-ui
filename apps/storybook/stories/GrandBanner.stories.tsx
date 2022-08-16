import React from "react";

import { GrandBanner as CZBUIGrandBanner } from "@czb-ui/core/src";
import background from "./assets/sapiens_banner.webp";

export default {
  title: "Banners",
  component: CZBUIGrandBanner,
  argTypes: {
    titleFont: {
      options: ["Butler", "Lato"],
      control: { type: "radio" },
    },
  },
};

const BannerTemplate = (args: any) => (
  <CZBUIGrandBanner
    image={
      <img
        style={{
          objectFit: "scale-down",
          height: "100%",
          width: "100%",
          zIndex: 0,
        }}
        src={args.background}
      />
    }
    title={args.title}
    subtitle={args.subtitle}
    titleFont={args.titleFont}
  />
);

export const GrandBanner = BannerTemplate.bind({});
GrandBanner.args = {
  title: "Tabula Sapiens",
  subtitle: "Human transcriptome reference at single cell resolution.",
  background: background,
  titleFont: "Butler",
};
