import { NavBar as CZBUINavBar } from "@czb-ui/core";
import { BiohubLogo } from "@czb-ui/biohub-logos";
import { NextLinkComposed } from "../NextLinkComposed/NextLinkComposed";

const pages = [
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Data",
    to: "/data",
  },
];

export default function NavBar() {
  return (
    <CZBUINavBar
      title="CZBUI"
      logo={<BiohubLogo sx={{ fonSize: "2rem" }} />}
      pages={pages}
      pagesComponent={NextLinkComposed}
    />
  );
}
