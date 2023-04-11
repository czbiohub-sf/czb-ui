import React from "react";

import { InfoBox as CZBUIInfoBox } from "@czb-ui/core/src";

export default {
  title: "Info Box",
  component: CZBUIInfoBox,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    imageOnRight: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args: any) => (
  <CZBUIInfoBox
    title={args.title}
    subtitle={args.subtitle}
    page={args.page}
    small={args.small}
  />
);

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  type: "normal",
  title: "Tools",
  subtitle: "tools",
  page: {
    title: "Go to tools",
    to: "/tools",
  },
  imageOnRight: false,
};
