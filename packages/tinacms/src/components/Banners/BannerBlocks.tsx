import { GenericBanner, GrandBanner } from "@czb-ui/core";
import { Banner as CZBUIBanner } from "@czb-ui/core";
import Image from "next/image";

interface BannerBlockProps {
  title?: string;
  subtitle?: string;
  image?: string;
  right?: boolean;
  imageAlt?: string;
  alternateFont?: boolean;
  smallVariants?: boolean;
}

interface BannerProps {
  block: BannerBlockProps;
}

export const BannerBlock = ({ block }: BannerProps) => {
  return (
    <CZBUIBanner
      headline={block.title}
      type={block.image ? "background" : "nobackground"}
      image={
        block.image ? (
          <Image
            src={block.image}
            alt={block.imageAlt ?? ""}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : undefined
      }
    />
  );
};

// Note the Generic Banner block does not
// have an alternate font
export const GenericBannerBlock = ({ block }: BannerProps) => {
  return (
    <GenericBanner
      title={block.title}
      subtitle={block.subtitle}
      background={
        block.image ? (
          <Image
            src={block.image}
            alt={block.imageAlt ?? ""}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : undefined
      }
    />
  );
};

export const GrandBannerBlock = ({ block }: BannerProps) => {
  return (
    <GrandBanner
      title={block.title}
      subtitle={block.subtitle}
      direction={block.right ? "right" : "left"}
      titleFont={block.alternateFont ? "Lato" : "Butler"}
      height={block.smallVariants ? "400px" : undefined}
      image={
        block.image ? (
          <Image
            src={block.image}
            alt={block.imageAlt ?? ""}
            width={1500}
            height={1000}
            style={{ objectFit: "scale-down" }}
          />
        ) : undefined
      }
    />
  );
};
