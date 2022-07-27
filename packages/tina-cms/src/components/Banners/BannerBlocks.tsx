import { GenericBanner, GrandBanner } from "@czb-ui/core";
import Image from "next/image";

interface BannerBlockProps {
  title?: string;
  subtitle?: string;
  image?: string;
  right?: boolean;
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
          <Image src={block.image} layout="fill" objectFit="cover" />
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
            width={1000}
            height={500}
            objectFit="scale-down"
          />
        ) : undefined
      }
    />
  );
};
