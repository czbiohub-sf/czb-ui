import type { Meta, StoryObj } from "@storybook/react";
import { InfoBox as CZBUIInfoBox } from "@czb-ui/core/src";
import sampleImage from "./assets/sapiens_banner.webp";

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

export const RegularInfoBox: StoryObj<typeof CZBUIInfoBox> = {
  args: {
    title: "Tools",
    subtitle: "tools",
    page: {
      title: "Go to tools",
      to: "/tools",
    },
    image: (
      <img
        style={{ objectFit: "cover", height: "100%", width: "100%", zIndex: 0 }}
        src={sampleImage}
      />
    ),
    inGrid: false,
    imageOnRight: false,
    type: "normal",
  },
  render: (args) => <CZBUIInfoBox {...args} />,
};
