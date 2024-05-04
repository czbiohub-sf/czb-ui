import type { Meta, StoryObj } from "@storybook/react";

import { Banner } from "@czb-ui/core";

const meta: Meta<typeof Banner> = {
  title: "core/Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
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
