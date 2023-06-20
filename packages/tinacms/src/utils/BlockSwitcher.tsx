import React from "react";
import {
  BannerBlock,
  GenericBannerBlock,
  GrandBannerBlock,
  TextBlock,
  InfoBoxBlock,
  TableBlock,
  LegacyInfoBoxBlock,
  HeadingSeparatorBlock,
  ImageGalleryBlock,
} from "../components";
import { Grid, Container } from "@mui/material";

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
    Banner: BannerBlock,
    GenericBanner: GenericBannerBlock,
    GrandBanner: GrandBannerBlock,
    Text: TextBlock,
    InfoBox: InfoBoxBlock,
    Grid: GridBlock,
    Table: TableBlock,
    LegacyInfoBox: LegacyInfoBoxBlock,
    HeadingSeparator: HeadingSeparatorBlock,
    ImageGallery: ImageGalleryBlock,
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
              if (usableBlocks[blockToLookFor] === undefined) {
                throw new Error(
                  "Block not found. Is it supplied in the additionalBlocks prop?"
                );
              }
              return React.createElement(usableBlocks[blockToLookFor], {
                block,
                key: i,
                ...props,
              });
            } catch (e: any) {
              console.error(e);
              return (
                <div>
                  Something went wrong rendering the {blockToLookFor} block:{" "}
                  {e.message}
                </div>
              );
            }
          })
        : null}
    </>
  );
};

/*
 * Sample response
 * (what will be in the "block" prop of the GridBlock component)
 * {
 *	  "__typename": "PagesBlocksGrid",
 *	  "blocks": [
 *		  {
 *			  "__typename": "PagesBlocksGridBlocksInfoBox",
 *			  "title": "why tina cms is cool",
 *			  "subtitle": null,
 *			  ...
 *		  }
 *	  ]
 *	}
 */

interface GridBlockProps {
  __typename: string;
  blocks: Array<any>;
}

interface GridProps {
  block: GridBlockProps;
}

export const GridBlock = ({ block }: GridProps) => {
  const blocks = block.blocks;

  return (
    <Container sx={{ my: 8 }}>
      <Grid
        container
        spacing={7}
        columns={{ xs: 2, sm: 8, md: blocks?.length > 2 ? 12 : 8 }}
      >
        {blocks &&
          blocks.map((nestedBlock, i) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={i}>
                <BlockSwitcher
                  blocks={[nestedBlock]}
                  disableContainerGutters
                  disableYMargins
                  smallVariants
                />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};
