import React from "react";

import { LegacyInfoBox as CZBUILegacyInfoBox } from "@czb-ui/core/src";
import sampleImage from "./assets/sapiens_banner.webp";

export default {
  title: "Big Buttons",
  component: CZBUILegacyInfoBox,
  argTypes: {
    type: {
      options: ["normal", "withButton"],
      control: { type: "radio" },
    },
  },
};

const Template = (args: any) => (
  <CZBUILegacyInfoBox
    {...args}
    image={
      <img
        style={{ objectFit: "cover", height: 160, width: 300, zIndex: 0 }}
        src={args.image}
      />
    }
  />
);

export const LegacyInfoBox = Template.bind({});
LegacyInfoBox.args = {
  image: sampleImage,
  type: "normal",
  title: "Tools",
  subtitle: "tools",
  page: {
    title: "Go to tools",
    to: "/tools",
  },
  variant: "withButton",
};
