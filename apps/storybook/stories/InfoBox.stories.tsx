import React from "react";

import { InfoBox as CZBUIInfoBox } from "@czb-ui/core/src";
import sampleImage from "./assets/sapiens_banner.webp";

export default {
  title: "Big Buttons",
  component: CZBUIInfoBox,
  argTypes: {},
};

const Template = (args: any) => (
  <CZBUIInfoBox
    image={
      <img
        style={{ objectFit: "cover", height: "100%", width: "100%", zIndex: 0 }}
        src={args.image}
      />
    }
  />
);

export const InfoBox = Template.bind({});
InfoBox.args = {
  image: sampleImage,
};
