import {
  GenericBannerBlock,
  GrandBannerBlock,
  TextBlock,
  InfoBoxBlock,
  GridBlock,
  TableBlock,
  LegacyInfoBoxBlock,
  HeadingSeparatorBlock,
} from "../components";

interface BlockSwitcher {
  blocks: Array<any>;
  disableContainerGutters?: boolean;
  disableYMargins?: boolean;
  smallVariants?: boolean;
}

export const BlockSwitcher = (props: BlockSwitcher) => {
  const blocks = props.blocks;

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

            switch (blockToLookFor) {
              case "GenericBanner":
                return <GenericBannerBlock block={block} key={i} {...props} />;
              case "GrandBanner":
                return <GrandBannerBlock block={block} key={i} {...props} />;
              case "Text":
                return <TextBlock block={block} key={i} {...props} />;
              case "InfoBox":
                return <InfoBoxBlock block={block} key={i} {...props} />;
              case "Grid":
                return <GridBlock block={block} key={i} {...props} />;
              case "Table":
                return <TableBlock block={block} key={i} {...props} />;
              case "LegacyInfoBox":
                return <LegacyInfoBoxBlock block={block} key={i} {...props} />;
              case "HeadingSeparator":
                return (
                  <HeadingSeparatorBlock block={block} key={i} {...props} />
                );
              default:
                console.warn(
                  `@czb-ui/tina-cms: No component found for block ${block.__typename}. Calcuated block name: ${blockToLookFor}`
                );
            }
          })
        : null}
    </>
  );
};
