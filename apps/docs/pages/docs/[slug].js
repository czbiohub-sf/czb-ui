import { client } from "../../.tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { BlockSwitcher } from "@czb-ui/tina-cms";
import Head from "next/head";

export default function DocsPage(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <Head>
        <title>{data.docs.title} - czb-ui</title>
      </Head>
      <BlockSwitcher {...data.docs} />
    </>
  );
}

export const getStaticPaths = async () => {
  // Change ending function, e.g. pageConnection(), docsConnection()
  // depending on collection name
  const connection = await client.queries.docsConnection();

  // Change function before .edges.map
  // e.g. connection.data.pageConnection.edges.map, connection.data.docsConnection.edges.map
  // depending on collection name
  const paths = connection.data.docsConnection.edges.map((page) => {
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
    // Change function name, e.g. client.queries.page, client.queries.docs
    // depending on collection name
    pageResponse = await client.queries.docs(variables);
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
