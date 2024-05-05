import type { Meta, StoryObj } from "@storybook/react";
import { NavBar as CZBUINavBar } from "@czb-ui/core/src";
import { SFColor } from "@czb-ui/biohub-logos/src";

type Page = {
  title: string;
  to: string;
};

const meta: Meta<typeof CZBUINavBar> = {
  title: "core/NavBar",
  component: CZBUINavBar,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const pages: Page[] = [
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Data",
    to: "/data",
  },
  {
    title: "Images",
    to: "/images",
  },
];

const morePages: Page[] = [
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Data",
    to: "/data",
  },
  {
    title: "Images",
    to: "/images",
  },
  {
    title: "Sample Text",
    to: "/sample-text",
  },
  {
    title: "Sample Text 2",
    to: "/sample-text-2",
  },
];

export const NavBar: StoryObj<typeof CZBUINavBar> = {
  args: {
    title: "CZB UI",
    pages: pages,
    logo: <SFColor />,
  },
  render: (args) => <CZBUINavBar {...args} />,
};

export const MorePages: StoryObj<typeof CZBUINavBar> = {
  args: {
    title: "CZB UI",
    pages: morePages,
    logo: <SFColor />,
  },
  render: (args) => <CZBUINavBar {...args} />,
};
