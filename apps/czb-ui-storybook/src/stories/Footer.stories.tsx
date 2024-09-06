import type { Meta, StoryObj } from "@storybook/react";
import { Footer as CZBUIFooter } from "@czb-ui/core";
import { SFColorReverse } from "@czb-ui/biohub-logos";

const meta: Meta<typeof CZBUIFooter> = {
  title: "core/Footer",
  component: CZBUIFooter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Page = {
  title: string;
  to: string;
};

type PageGroup = {
  title: string;
  pages: Page[];
};

type FooterProps = {
  pages: PageGroup[];
  logo: JSX.Element;
  logoLink: string;
};

export const Footer: StoryObj<FooterProps> = {
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
    logo: <SFColorReverse />,
    logoLink: "https://www.czbiohub.org/sf/",
  },
  render: (args) => <CZBUIFooter {...args} />,
};
