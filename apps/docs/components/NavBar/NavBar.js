import { NavBar as CZBUINavBar } from "@czb-ui/core";
import { BiohubLogo } from "@czb-ui/biohub-logos";
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
      logo={<BiohubLogo sx={{ fonSize: "2rem" }} />}
      pages={pages}
      pagesComponent={NextLinkComposed}
    />
  );
}
