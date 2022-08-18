// TODO: Update TinaCMS and query to use .gql
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
        alternateFont
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
            newTab
            image
            imageAlt
            hoverImage
          }
        }
      }
      ... on PagesBlocksTable {
        __typename
        csvData
        inContainer
      }
      ... on PagesBlocksLegacyInfoBox {
        __typename
        title
        subtitle
        linkText
        linkTo
        outsideLink
        newTab
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
