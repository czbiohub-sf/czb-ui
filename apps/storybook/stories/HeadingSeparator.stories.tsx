import React from "react";

import { HeadingSeparator as CZBUIHeadingSeparator } from "@czb-ui/core/src";

export default {
  title: "HeadingSeparator",
  component: CZBUIHeadingSeparator,
  argTypes: {},
};

const Template = (args: any) => <CZBUIHeadingSeparator {...args} />;

export const HeadingSeparator = Template.bind({});
HeadingSeparator.args = {
  title: "TABULA SAPIENS",
};
