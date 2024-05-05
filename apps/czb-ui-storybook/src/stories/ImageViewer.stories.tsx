import type { Meta, StoryObj } from "@storybook/react";
import { ImageViewer as CZBUIImageViewer } from "@czb-ui/viz/src";

const SampleHUDComponent = () => (
  <div>
    <h2>Sample HUD Component</h2>
    <p>Some text</p>
  </div>
);

const meta: Meta<typeof CZBUIImageViewer> = {
  title: "viz/ImageViewer",
  component: CZBUIImageViewer,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const ImageViewer: StoryObj<typeof CZBUIImageViewer> = {
  args: {
    imageUrl:
      "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-districts.png",
    width: 100,
    height: 100,
    hudComponent: <SampleHUDComponent />,
  },
  render: (args) => <CZBUIImageViewer {...args} />,
};
