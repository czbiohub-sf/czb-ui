import type { Meta, StoryObj } from "@storybook/react";
import { Footer as CZBUIFooter } from "@czb-ui/core";
import { SFColorReverse } from "@czb-ui/biohub-logos";

type FooterPropsAndCustomArgs = React.ComponentProps<typeof CZBUIFooter> & {
  logoSrc?: string;
};

const meta: Meta<FooterPropsAndCustomArgs> = {
  title: "core/Footer",
  component: CZBUIFooter,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    logoSrc: {
      table: {
        disable: true,
      },
    },
    pages: {
      control: "object",
    },
    pagesComponent: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ ...args }) => (
    <CZBUIFooter
      {...args}
      logo={<SFColorReverse />}
      logoLink="https://www.czbiohub.org/sf/"
    />
  ),
};

export default meta;

type Story = StoryObj<FooterPropsAndCustomArgs>;

export const Footer: Story = {
  args: {
    pages: [
      {
        title: "Applications",
        pages: [
          { title: "About", to: "/about" },
          { title: "Data", to: "/data" },
          { title: "Images", to: "/images" },
        ],
      },
      {
        title: "Company",
        pages: [
          { title: "About", to: "/about" },
          { title: "Data", to: "/data" },
          { title: "Images", to: "/images" },
        ],
      },
      {
        title: "Resources",
        pages: [
          { title: "About", to: "/about" },
          { title: "Data", to: "/data" },
          { title: "Images", to: "/images" },
        ],
      },
    ],
  },
};
