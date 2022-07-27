// This should be a copy of [slug].js, except that it just
// queries "home.mdx" and does not take a slug
import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import { BlockSwitcher } from "@czb-ui/tina-cms/dist/utils";
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

// getStaticPaths is not needed

export const getStaticProps = async () => {
  const variables = {
    relativePath: "home.mdx",
  };
  let data = {};
  try {
    data = await staticRequest({
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
