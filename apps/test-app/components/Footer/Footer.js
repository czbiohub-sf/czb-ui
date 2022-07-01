import { Footer as CZBUIFooter } from "@czb-ui/core";
import { BiohubLogo } from "@czb-ui/biohub-logos";

const pages = [
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

export default function Footer() {
  return (
    <CZBUIFooter
      title="CZ BIOHUB"
      logo={<BiohubLogo sx={{ fonSize: "2rem" }} />}
      pages={pages}
    />
  );
}
