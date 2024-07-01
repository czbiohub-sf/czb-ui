import type { Meta, StoryObj } from "@storybook/react";

import { Banner as CZBUIBanner } from "@czb-ui/core";

const ImageComponent = ({ src }: { src: string }) => (
  <img
    style={{ objectFit: "cover", height: "100%", width: "100%", zIndex: 0 }}
    src={src}
  />
);

type BannerPropsAndCustomArgs = React.ComponentProps<typeof CZBUIBanner> & {
  imageSrc?: string;
};

const meta: Meta<BannerPropsAndCustomArgs> = {
  component: CZBUIBanner,
  title: "core/Banner",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    imageSrc: {
      control: "text",
      description: "Source URL of the image",
    },
    type: {
      control: "radio",
      options: ["background", "nobackground"],
    },
  },
  render: ({ imageSrc, ...args }) => (
    <CZBUIBanner {...args} image={<ImageComponent src={imageSrc || ""} />} />
  ),
};

export default meta;

type Story = StoryObj<BannerPropsAndCustomArgs>;

export const Banner: Story = {
  args: {
    headline:
      "Developing Technology to Push the Boundaries of What We Can See and Measure",
    imageSrc:
      "https://www.czbiohub.org/sf/wp-content/uploads/sites/18/2023/02/home-sf-hero-desk.jpg",
    type: "background",
  },
};
