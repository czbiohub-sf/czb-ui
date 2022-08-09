import { defineSchema, defineConfig } from "tinacms";
import {
  GenericBanner,
  GrandBanner,
  Text,
  InfoBox,
  Grid,
  Table,
  LegacyInfoBox,
} from "@czb-ui/tina-cms";
import { client } from "./__generated__/client";

const templates = [
  GenericBanner,
  GrandBanner,
  Text,
  InfoBox,
  Grid,
  Table,
  LegacyInfoBox,
];

const schema = defineSchema({
  config: {
    // This test app will be only local only,
    // so the clientId and token are irrelevant
    branch: "main",
    clientId: "foo",
    token: "bar",
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

export const tinaConfig = defineConfig({
  client,
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
