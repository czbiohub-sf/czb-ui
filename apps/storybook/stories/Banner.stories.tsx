import React from "react";

import { Banner as CZBUIBanner } from "@czb-ui/core/src";

export default {
  title: "Banner",
  component: CZBUIBanner,
  argTypes: {},
};

const Template = (args: any) => (
  <CZBUIBanner
    headline={args.headline}
    image={
      <img
        style={{ objectFit: "cover", height: "100%", width: "100%", zIndex: 0 }}
        src={args.image}
      />
    }
  />
);

export const HeadingSeparator = Template.bind({});
HeadingSeparator.args = {
  headline:
    "Developing Technology to Push the Boundaries of What We Can See and Measure",
  image: "https://source.unsplash.com/random",
};
