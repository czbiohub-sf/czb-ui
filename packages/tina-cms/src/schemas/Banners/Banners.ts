import type { TinaTemplate } from "tinacms";

export const GenericBanner: TinaTemplate = {
  name: "GenericBanner",
  label: "Generic Banner",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle",
    },
    {
      type: "image",
      label: "Background",
      name: "background",
    },
  ],
};

export const GrandBanner: TinaTemplate = {
  name: "GrandBanner",
  label: "Grand Banner",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle",
    },
    {
      type: "image",
      label: "Image",
      name: "image",
    },
    {
      type: "boolean",
      label: "Right side?",
      name: "right",
    },
  ],
};
