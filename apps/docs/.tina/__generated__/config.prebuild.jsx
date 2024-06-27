// .tina/config.js
import { defineConfig, defineSchema } from "tinacms";
import {
  Banner,
  Text,
  InfoBox,
  Grid,
  Table,
  LegacyInfoBox,
  HeadingSeparator,
  ImageGallery
} from "@czb-ui/tinacms";
var templates = [
  Banner,
  Text,
  InfoBox,
  Grid,
  Table,
  LegacyInfoBox,
  HeadingSeparator,
  ImageGallery
];
var blockCollection = (name, label, path, routePath) => ({
  label,
  name,
  path,
  format: "mdx",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string"
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      templates
    }
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename == "home" && !routePath) {
        return "/";
      }
      return `/${routePath}${document._sys.filename}`;
    }
  }
});
var markdownCollection = (name, label, path, routePath) => ({
  label,
  name,
  path,
  format: "md",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string"
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true
    }
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename == "home" && !routePath) {
        return "/";
      }
      return `/${routePath}${document._sys.filename}`;
    }
  }
});
var schema = defineSchema({
  collections: [
    blockCollection("page", "Page Content", "content/page"),
    // Use md for docs so it can also be easily viewed elsewhere (GitHub, etc.)
    markdownCollection("docs", "Documentation", "content/docs", "docs/")
  ]
});
var config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
  process.env.HEAD,
  // Netlify branch env
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
      mediaRoot: "uploads"
    }
  },
  build: {
    publicFolder: "public",
    // The public asset folder for your framework
    outputFolder: "admin"
    // within the public folder
  },
  schema
});
var config_default = config;
export {
  config,
  config_default as default
};
