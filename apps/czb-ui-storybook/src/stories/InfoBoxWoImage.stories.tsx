import type { Meta, StoryObj } from "@storybook/react";
import { InfoBox as CZBUIInfoBox } from "@czb-ui/core/src";

const meta: Meta<typeof CZBUIInfoBox> = {
  title: "core/InfoBox",
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

export default meta;

export const WithoutImage: StoryObj<typeof CZBUIInfoBox> = {
  args: {
    title: "Tools",
    subtitle: "tools",
    page: {
      title: "Go to tools",
      to: "/tools",
    },
    type: "normal",
    imageOnRight: false,
    small: false,
  },
  render: (args) => <CZBUIInfoBox {...args} />,
};
