export const query = `
query PagesDocument($relativePath: String!) {
  pages(relativePath: $relativePath) {
    title
    blocks {
      __typename
      ... on PagesBlocksGenericBanner {
        __typename
        title
        subtitle
        image
        imageAlt
      }
      ... on PagesBlocksGrandBanner {
        __typename
        title
        subtitle
        image
        right
        imageAlt
      }
      ... on PagesBlocksInfoBox {
        __typename
        title
        subtitle
        linkText
        linkTo
        outsideLink
        image
        right
        imageAlt
      }
      ... on PagesBlocksText {
        __typename
        text
      }
      ... on PagesBlocksGrid {
        blocks {
          __typename
          ... on PagesBlocksGridBlocksInfoBox {
            __typename
            title
            subtitle
            linkText
            linkTo
            outsideLink
            image
            imageAlt
            right
          }
          ... on PagesBlocksGridBlocksLegacyInfoBox {
            __typename
            title
            subtitle
            linkText
            linkTo
            outsideLink
            image
            imageAlt
            hoverImage
          }
        }
      }
      ... on PagesBlocksTable {
        __typename
        csvData
      }
      ... on PagesBlocksLegacyInfoBox {
        __typename
        title
        subtitle
        linkText
        linkTo
        outsideLink
        image
        imageAlt
        hoverImage
      }
      ... on PagesBlocksHeadingSeparator {
        __typename
        title
      }
    }
  }
}
`;

export default query;
