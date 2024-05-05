import type { Meta, StoryObj } from "@storybook/react";
import { HeadingSeparator as CZBUIHeadingSeparator } from "@czb-ui/core/src";

const meta: Meta<typeof CZBUIHeadingSeparator> = {
  title: "core/HeadingSeparator",
  component: CZBUIHeadingSeparator,
};

export default meta;

export const HeadingSeparator: StoryObj<typeof CZBUIHeadingSeparator> = {
  args: {
    title: "Tabula Sapiens",
  },
  render: (args) => <CZBUIHeadingSeparator {...args} />,
};
