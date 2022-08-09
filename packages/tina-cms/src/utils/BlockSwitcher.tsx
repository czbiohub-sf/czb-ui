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
            switch (block.__typename) {
              case "PagesBlocksGenericBanner":
                return <GenericBannerBlock block={block} key={i} />;
              case "PagesBlocksGrandBanner":
                return <GrandBannerBlock block={block} key={i} />;
              case "PagesBlocksText":
                return <TextBlock block={block} key={i} />;
              case "PagesBlocksInfoBox":
                return (
                  <InfoBoxBlock
                    block={block}
                    disableContainerGutters={props.disableContainerGutters}
                    disableYMargins={props.disableYMargins}
                    small={props.smallVariants}
                    key={i}
                  />
                );
              case "PagesBlocksGrid":
                return <GridBlock block={block} key={i} />;
              case "PagesBlocksTable":
                return <TableBlock block={block} key={i} />;
              case "PagesBlocksLegacyInfoBox":
                return (
                  <LegacyInfoBoxBlock
                    block={block}
                    disableContainerGutters={props.disableContainerGutters}
                    disableYMargins={props.disableYMargins}
                    key={i}
                  />
                );
              case "PagesBlocksHeadingSeparator":
                return <HeadingSeparatorBlock block={block} key={i} />;
            }
          })
        : null}
    </>
  );
};
