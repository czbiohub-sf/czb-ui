import {
  GenericBannerBlock,
  GrandBannerBlock,
  TextBlock,
  InfoBoxBlock,
  StackBlock,
} from "../components";

interface BlockSwitcher {
  blocks: Array<any>;
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
                return <InfoBoxBlock block={block} key={i} />;
              case "PagesBlocksStack":
                return <StackBlock block={block} key={i} />;
            }
          })
        : null}
    </>
  );
};
