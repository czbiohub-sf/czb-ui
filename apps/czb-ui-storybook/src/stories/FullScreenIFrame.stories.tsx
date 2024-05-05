import type { Meta, StoryObj } from "@storybook/react";
import {
  FullScreenIFrame as CZBUIFullScreenIFrame,
  FullScreenIFrameProps,
} from "@czb-ui/core";

const meta: Meta<typeof CZBUIFullScreenIFrame> = {
  title: "core/FullScreenIframe",
  component: CZBUIFullScreenIFrame,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    fullScreenButtonLocation: {
      options: ["topLeft", "topRight", "bottomLeft", "bottomRight"],
      control: { type: "radio" },
    },
  },
};

export default meta;

export const FullScreenIframe: StoryObj<FullScreenIFrameProps> = {
  args: {
    src: "https://onclass-dash-development.ds.czbiohub.org/onclass",
    fullScreenButtonLocation: "topRight",
    fullScreenButtonMargin: "20px",
  },
  render: (args) => (
    <div style={{ height: "100vh" }}>
      <CZBUIFullScreenIFrame {...args} />
    </div>
  ),
};
