import type { TinaTemplate } from "tinacms";

export const LegacyInfoBox: TinaTemplate = {
  name: "LegacyInfoBox",
  label: "Legacy Info Box",
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
      type: "string",
      label: "Link Text",
      name: "linkText",
    },
    {
      type: "string",
      label: "Link To",
      name: "linkTo",
    },
    {
      type: "boolean",
      label: "Outside Link",
      name: "outsideLink",
    },
    {
      type: "image",
      label: "Image",
      name: "image",
    },
    {
      type: "string",
      label: "Image alt",
      name: "imageAlt",
    },
    {
      type: "image",
      label: "Hover Image",
      name: "hoverImage",
    },
  ],
};
