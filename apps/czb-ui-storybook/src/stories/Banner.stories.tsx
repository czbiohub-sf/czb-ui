import type { Meta, StoryObj } from "@storybook/react";

import { Banner as CZBUIBanner } from "@czb-ui/core";

const meta: Meta<typeof CZBUIBanner> = {
  title: "core/Banner",
  component: CZBUIBanner,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof CZBUIBanner>;

export const Banner: Story = {
  args: {
    headline:
      "Developing Technology to Push the Boundaries of What We Can See and Measure",
    image: (
      <img
        style={{ objectFit: "cover", height: "100%", width: "100%", zIndex: 0 }}
        src="https://source.unsplash.com/random"
      />
    ),
    type: "background",
  },
};
