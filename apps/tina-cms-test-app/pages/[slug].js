import { client } from "../.tina/__generated__/client";
import { useTina } from "tinacms/dist/edit-state";
import { BlockSwitcher } from "@czb-ui/tina-cms";
import query from "../.tina/queries/pages";

export default function DynamicPage(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  });

  return <BlockSwitcher {...data.pages} />;
}

export const getStaticPaths = async () => {
  const pagesResponse = await client.request({
    query: `{
        pagesConnection {
          edges {
            node {
              _sys {
                filename
              }
            }
          }
        }
      }`,
    variables: {},
  });
  const paths = pagesResponse.data.pagesConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const variables = {
    relativePath: ctx.params.slug + ".mdx",
  };
  let data = {};
  try {
    data = await client.request({
      query,
      variables,
    });
  } catch (error) {
    console.log(error);
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      variables,
    },
  };
};
