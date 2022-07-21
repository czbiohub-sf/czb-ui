import React from "react";
import { GenericBanner, GrandBanner } from "@czb-ui/core";
import Image from "next/image";

export const GenericBannerBlock = ({ block }) => {
  return (
    <GenericBanner
      title={block.title}
      subtitle={block.subtitle}
      background={
        block.background ? (
          <Image src={block.background} layout="fill" objectFit="cover" />
        ) : undefined
      }
    />
  );
};

export const GrandBannerBlock = ({ block }) => {
  return (
    <GrandBanner
      title={block.title}
      subtitle={block.subtitle}
      direction={block.right ? "right" : "left"}
    />
  );
};
