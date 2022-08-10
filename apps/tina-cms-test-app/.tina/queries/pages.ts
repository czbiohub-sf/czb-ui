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
      }
      ... on PagesBlocksGrandBanner {
        __typename
        title
        subtitle
        image
        right
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
