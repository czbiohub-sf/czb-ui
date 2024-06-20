import { Footer as CZBUIFooter } from "@czb-ui/core";
import { SFColorReverse } from "@czb-ui/biohub-logos";
import NextLink from "next/link";

const pages = [
  {
    title: "czb-ui",
    pages: [
      {
        title: "Storybook",
        to: "https://czb-ui.vercel.app/",
        externalLink: true,
        newTab: true, // newTab doesn't work as of now
      },
      {
        title: "GitHub",
        to: "https://github.com/czbiohub/czb-ui",
        externalLink: true,
        newTab: true, // newTab doesn't work as of now
      },
      {
        title: "Portal Template (Internal)",
        to: "https://github.com/czbiohub-sf/portal-template",
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
      pagesComponent={NextLink}
    />
  );
}
