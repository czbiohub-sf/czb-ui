import type { Meta, StoryObj } from "@storybook/react";
import {
  NavBarAndFooterPlacer as CZBUINavAndFootPlacer,
  NavBar,
  Footer,
} from "@czb-ui/core/src";
import { SFColor, SFColorReverse } from "@czb-ui/biohub-logos/src";

const meta: Meta<typeof CZBUINavAndFootPlacer> = {
  title: "core/NavBarAndFooterPlacer",
  component: CZBUINavAndFootPlacer,
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

const pageGroups: PageGroup[] = [
  {
    title: "Applications",
    pages: pages, // Using the same pages for simplicity
  },
  {
    title: "Company",
    pages: pages,
  },
  {
    title: "Resources",
    pages: pages,
  },
];

export const NavBarAndFooterPlacer: StoryObj<typeof CZBUINavAndFootPlacer> = {
  args: {
    topBar: <NavBar logo={<SFColor />} title="CZB UI" pages={pages} />,
    bottomBar: <Footer logo={<SFColorReverse />} pages={pageGroups} />,
  },
  render: (args) => (
    <CZBUINavAndFootPlacer topBar={args.topBar} bottomBar={args.bottomBar}>
      <main>content</main>
    </CZBUINavAndFootPlacer>
  ),
};
