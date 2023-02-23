import { defineConfig, defineSchema } from "tinacms";

import {
  GenericBanner,
  GrandBanner,
  Text,
  InfoBox,
  Grid,
  Table,
  LegacyInfoBox,
  HeadingSeparator,
  Video,
} from "@czb-ui/tina-cms";

const templates = [
  GenericBanner,
  GrandBanner,
  Text,
  InfoBox,
  Grid,
  Table,
  LegacyInfoBox,
  HeadingSeparator,
  Video,
];

// routePath has to end in "/"
const blockCollection = (name, label, path, routePath) => ({
  label: label,
  name: name,
  path: path,
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
  ui: {
    router: ({ document }) => {
      if (document._sys.filename == "home" && !routePath) {
        // Only for non-nested routes, this will be the index page
        return "/";
      }
      return `/${routePath}${document._sys.filename}`;
    },
  },
});

const schema = defineSchema({
  collections: [
    blockCollection("page", "Page Content", "content/page"),
    blockCollection("docs", "Documentation", "content/docs", "docs/"),
  ],
});

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema,
});

export default config;
