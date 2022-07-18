import React from "react";

import { ImageButton as CZBUIImageButton } from "@czb-ui/core/src";
import sampleImage from "./assets/sapiens_banner.webp";

export default {
  title: "Image Button",
  component: CZBUIImageButton,
  argTypes: {},
};

const Template = (args: any) => (
  <CZBUIImageButton
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
};
