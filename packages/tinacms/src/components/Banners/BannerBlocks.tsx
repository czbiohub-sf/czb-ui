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
