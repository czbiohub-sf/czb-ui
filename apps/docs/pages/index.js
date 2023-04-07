// This should be a copy of [slug].js, except that it just
// queries "home.mdx" and does not take a slug
import { useContext, useEffect } from "react";
import { client } from "../.tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import { BlockSwitcher } from "@czb-ui/tina-cms";
import Head from "next/head";
import { Box } from "@mui/material";
import TogglesContext from "../utils/TogglesContext";

export default function DynamicPage(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const { setSidebarViz } = useContext(TogglesContext);

  useEffect(() => {
    setSidebarViz(false);
    return () => {
      setSidebarViz(true);
    };
  }, []);

  const pageTitle = "czb-ui";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <BlockSwitcher {...data.page} />
    </>
  );
}

// getStaticPaths is not needed

export const getStaticProps = async () => {
  const variables = {
    relativePath: "home.mdx",
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
