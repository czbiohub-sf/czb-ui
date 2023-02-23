import React from "react";
import {
  GenericBannerBlock,
  GrandBannerBlock,
  TextBlock,
  InfoBoxBlock,
  GridBlock,
  TableBlock,
  LegacyInfoBoxBlock,
  HeadingSeparatorBlock,
  VideoBlock,
} from "../components";

// TODO: Fix types
interface BlockSwitcher {
  blocks: Array<any>;
  additionalBlocks?: any;
  disableContainerGutters?: boolean;
  disableYMargins?: boolean;
  smallVariants?: boolean;
}

export const BlockSwitcher = (props: BlockSwitcher) => {
  const blocks = props.blocks;

  const usableBlocks = {
    GenericBanner: GenericBannerBlock,
    GrandBanner: GrandBannerBlock,
    Text: TextBlock,
    InfoBox: InfoBoxBlock,
    Grid: GridBlock,
    Table: TableBlock,
    LegacyInfoBox: LegacyInfoBoxBlock,
    HeadingSeparator: HeadingSeparatorBlock,
    Video: VideoBlock,
    ...props.additionalBlocks,
  };

  return (
    <>
      {blocks
        ? blocks.map((block, i) => {
            // Regex to remove all the collection name prefixes and the "Blocks" suffixes
            // Example block names: "PagesBlocksGenericBanner", "PagesBlocksGridBlocksInfoBox"
            // Outputs for those examples: "GenericBanner", "InfoBox"
            const blockToLookFor = block.__typename
              .replace(/(([A-Z][a-z0-9]+)+)Blocks/g, "")
              .replace(/Blocks/g, "");

            try {
              return React.createElement(usableBlocks[blockToLookFor], {
                block,
                key: i,
                ...props,
              });
            } catch (e) {
              console.error(e);
            }
          })
        : null}
    </>
  );
};
