import React from "react";

import { LegacyInfoBox as CZBUILegacyInfoBox } from "@czb-ui/core/src";
import sampleImage from "./assets/sapiens_banner.webp";

export default {
  title: "Big Buttons",
  component: CZBUILegacyInfoBox,
  argTypes: {
    variant: {
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
        // Subtract 2 because of the border around the image
        // TODO: make the height and width less confusing
        style={{
          objectFit: "cover",
          height: args.square
            ? args.small
              ? 196
              : 248
            : args.small
            ? 104
            : 158,
          width: args.small ? 198 : 248,
          zIndex: 0,
        }}
        src={args.image}
      />
    }
  />
);

export const LegacyInfoBox = Template.bind({});
LegacyInfoBox.args = {
  image: sampleImage,
  title: "Tools",
  subtitle: "tools",
  page: {
    title: "Go to tools",
    to: "/tools",
  },
  variant: "withButton",
  small: false,
  square: false,
};
