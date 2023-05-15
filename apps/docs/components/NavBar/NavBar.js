import { NavBar as CZBUINavBar } from "@czb-ui/core";
import { WithTitle } from "@czb-ui/biohub-logos";
import { NextLinkComposed } from "@czb-ui/tinacms";

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
      logo={<WithTitle />}
      useLogoWithTitleVariant={true}
      pages={pages}
      pagesComponent={NextLinkComposed}
    />
  );
}
