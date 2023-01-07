import { client } from "../.tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { BlockSwitcher } from "@czb-ui/tina-cms";

export default function DynamicPage(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      {/* <Seo title={data.page.title} /> */}
      <BlockSwitcher {...data.page} />
    </>
  );
}

// TODO: Make these fetching variables more dynamic, reflect changes in docs/[slug].js
// Look at commit 93a768a7c43914e5ae7fb8ad7f2a63b118908488 for barebones version of docs/[slug].js
// without the additional documentation layouts and stuff
export const getStaticPaths = async () => {
  const pageListData = await client.queries.pageConnection();

  const paths = pageListData.data.pageConnection.edges.map((page) => {
    return { params: { slug: page.node._sys.filename } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const variables = {
    relativePath: ctx.params.slug + ".mdx",
  };

  let pageResponse = {};
  try {
    pageResponse = await client.queries.page(variables);
  } catch (error) {
    console.log(error);
    // swallow errors related to document creation
  }

  return {
    props: {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables,
    },
  };
};
