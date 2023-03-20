import { NavBar as CZBUINavBar } from "@czb-ui/core";
import { SFColor } from "@czb-ui/biohub-logos";
import { NextLinkComposed } from "@czb-ui/tina-cms";

const pages = [
  {
    title: "Docs",
    to: "/docs/introduction",
  },
];

export default function NavBar() {
  return (
    <CZBUINavBar
      title="czb-ui"
      logo={<SFColor />}
      pages={pages}
      pagesComponent={NextLinkComposed}
    />
  );
}
