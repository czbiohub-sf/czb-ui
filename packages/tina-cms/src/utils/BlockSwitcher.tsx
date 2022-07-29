import {
  GenericBannerBlock,
  GrandBannerBlock,
  TextBlock,
  InfoBoxBlock,
  GridBlock,
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
            }
          })
        : null}
    </>
  );
};
