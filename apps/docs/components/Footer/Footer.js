import { Footer as CZBUIFooter } from "@czb-ui/core";
import { SFColorReverse } from "@czb-ui/biohub-logos";
import { NextLinkComposed } from "@czb-ui/tinacms";

const pages = [
  {
    title: "czb-ui",
    pages: [
      {
        title: "Documentation",
        to: "/docs/introduction",
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
      logo={<SFColorReverse />}
      pages={pages}
      pagesComponent={NextLinkComposed}
    />
  );
}
