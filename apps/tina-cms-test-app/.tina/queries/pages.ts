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
        }
      }
      ... on PagesBlocksTable {
        __typename
        csvData
      }
    }
  }
}
`;

export default query;
