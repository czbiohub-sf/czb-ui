import { GenericBanner, GrandBanner } from "@czb-ui/core";
import Image from "next/image";

interface BannerBlockProps {
  title?: string;
  subtitle?: string;
  image?: string;
  right?: boolean;
  imageAlt?: string;
  alternateFont?: boolean;
  smaller?: boolean;
}

interface BannerProps {
  block: BannerBlockProps;
}

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
            alt={block.imageAlt}
            layout="fill"
            objectFit="cover"
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
      height={block.smaller ? "400px" : undefined}
      image={
        block.image ? (
          <Image
            src={block.image}
            alt={block.imageAlt}
            width={1500}
            height={1000}
            objectFit="scale-down"
          />
        ) : undefined
      }
    />
  );
};
