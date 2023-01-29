import { Footer as CZBUIFooter } from "@czb-ui/core";
import { BiohubLogo } from "@czb-ui/biohub-logos";
import { NextLinkComposed } from "@czb-ui/tina-cms";

const pages = [
  {
    title: "czb-ui",
    pages: [
      {
        title: "Documentation",
        to: "/docs",
      },
      {
        title: "GitHub",
        to: "https://github.com/czbiohub/czb-ui",
        externalLink: true,
        newTab: true, // newTab doesn't work as of now
      },
    ],
  },
  {
    title: "Company",
    pages: [
      {
        title: "CZ Biohub",
        to: "https://www.czbiohub.org/",
        externalLink: true,
        newTab: true, // newTab doesn't work as of now
      },
    ],
  },
];

export default function Footer() {
  return (
    <CZBUIFooter
      title="CZ BIOHUB"
      logo={<BiohubLogo sx={{ fonSize: "2rem" }} />}
      pages={pages}
      pagesComponent={NextLinkComposed}
    />
  );
}
