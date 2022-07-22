import React from "react";

import { ImageButton as CZBUIImageButton } from "@czb-ui/core/src";
import sampleImage from "./assets/sapiens_banner.webp";

export default {
  title: "Big Buttons",
  component: CZBUIImageButton,
  argTypes: {},
};

const Template = (args: any) => (
  <CZBUIImageButton
    title={args.title}
    subtitle={args.subtitle}
    page={args.page}
    image={
      <img
        style={{ objectFit: "cover", height: "100%", width: "100%", zIndex: 0 }}
        src={args.image}
      />
    }
  />
);

export const ImageButton = Template.bind({});
ImageButton.args = {
  image: sampleImage,
  title: "Tools",
  subtitle: "tools",
  page: {
    title: "Go to tools",
    to: "/tools",
  },
};