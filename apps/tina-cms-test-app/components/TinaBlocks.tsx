import React from "react";
import type { Pages } from "../.tina/__generated__/types";
import {
  GenericBannerBlock,
  GrandBannerBlock,
  TextBlock,
  InfoBoxBlock,
} from "@czb-ui/tina-cms/dist/components";

export default function TinaBlocks(props: Pages) {
  const blocks = props.blocks;

  return (
    <>
      {blocks
        ? blocks.map((block, i) => {
            switch (block.__typename) {
              case "PagesBlocksGenericBanner":
                return <GenericBannerBlock block={block} key={i} />;
              case "PagesBlocksGrandBanner":
                return <GrandBannerBlock block={block} key={i} />;
              case "PagesBlocksText":
                return <TextBlock block={block} key={i} />;
              case "PagesBlocksInfoBox":
                return <InfoBoxBlock block={block} key={i} />;
            }
          })
        : null}
    </>
  );
}
