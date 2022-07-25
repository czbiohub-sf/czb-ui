import { defineSchema, defineConfig } from "tinacms";
import {
  GenericBanner,
  GrandBanner,
  Text,
  InfoBox,
} from "@czb-ui/tina-cms/templates";

const templates = [GenericBanner, GrandBanner, Text, InfoBox];

const schema = defineSchema({
  config: {
    media: {
      tina: {
        mediaRoot: "tina_uploads",
        publicFolder: "public",
      },
    },
  },
  collections: [
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      format: "mdx",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          type: "object",
          list: true,
          name: "blocks",
          label: "Sections",
          templates: templates,
        },
      ],
    },
  ],
});

export default schema;

// Your tina config
// ==============
const branch = "main";
// When working locally, hit our local filesystem.
// On a Vercel deployment, hit the Tina Cloud API
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
  apiURL,
  schema,
  cmsCallback: (cms) => {
    //  add your CMS callback code here (if you want)

    // The Route Mapper
    /**
     * 1. Import `tinacms` and `RouteMappingPlugin`
     **/
    import("tinacms").then(({ RouteMappingPlugin }) => {
      /**
       * 2. Define the `RouteMappingPlugin` see https://tina.io/docs/tinacms-context/#the-routemappingplugin for more details
       **/
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["pages"].includes(collection.name)) {
          if (document._sys.filename == "home") {
            return "/";
          }

          return `/${document._sys.filename}`;
        }

        return undefined;
      });
      /**
       * 3. Add the `RouteMappingPlugin` to the `cms`.
       **/
      cms.plugins.add(RouteMapping);
    });

    return cms;
  },
});
