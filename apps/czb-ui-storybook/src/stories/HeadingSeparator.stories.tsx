import type { Meta, StoryObj } from "@storybook/react";
import { HeadingSeparator as CZBUIHeadingSeparator } from "@czb-ui/core/src";

type HeadingSeparatorPropsAndCustomArgs = React.ComponentProps<
  typeof CZBUIHeadingSeparator
>;

const meta: Meta<HeadingSeparatorPropsAndCustomArgs> = {
  title: "core/HeadingSeparator",
  component: CZBUIHeadingSeparator,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    dividerOpacity: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<HeadingSeparatorPropsAndCustomArgs>;

export const HeadingSeparator: Story = {
  args: {
    title: "Tabula Sapiens",
  },
  render: (args) => <CZBUIHeadingSeparator {...args} />,
};
