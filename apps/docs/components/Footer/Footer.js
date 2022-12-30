import { Footer as CZBUIFooter } from "@czb-ui/core";
import { BiohubLogo } from "@czb-ui/biohub-logos";

export default function Footer() {
  return (
    <CZBUIFooter
      title="CZ BIOHUB"
      logo={<BiohubLogo sx={{ fonSize: "2rem" }} />}
    />
  );
}
