import { GenericBanner, GrandBanner } from "@czb-ui/core";
import Image from "next/image";

interface BannerBlockProps {
  title?: string;
  subtitle?: string;
  image?: string;
  right?: boolean;
  imageAlt?: string;
}

interface BannerProps {
  block: BannerBlockProps;
}

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
      image={
        block.image ? (
          <Image
            src={block.image}
            alt={block.imageAlt}
            width={1500}
            height={500}
            objectFit="scale-down"
          />
        ) : undefined
      }
    />
  );
};
