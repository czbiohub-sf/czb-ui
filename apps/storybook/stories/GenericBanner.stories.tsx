import React from "react";

import { GenericBanner as CZBUIGenericBanner } from "@czb-ui/core/src";
import background from "./assets/viral_background_biohub.png";

export default {
  title: "Banners",
  component: CZBUIGenericBanner,
  argTypes: {},
};

const BannerTemplate = (args: any) => (
  <CZBUIGenericBanner
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

export const GenericBanner = BannerTemplate.bind({});
GenericBanner.args = {
  title: "CZB-UI",
  subtitle: "The new UI library for CZ Biohub",
  backgroundOpacity: 0.5,
  background: background,
};
