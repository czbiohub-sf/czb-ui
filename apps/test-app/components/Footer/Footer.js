import { Footer as CZBUIFooter } from "@czb-ui/core";
import { DnaMark } from "@czb-ui/biohub-logos";

export default function Footer() {
  return (
    <CZBUIFooter
      title="CZ BIOHUB"
      logo={<DnaMark sx={{ fonSize: "2rem" }} />}
    />
  );
}
