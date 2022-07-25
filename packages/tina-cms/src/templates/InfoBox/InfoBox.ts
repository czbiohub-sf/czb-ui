import type { TinaTemplate } from "tinacms";

export const InfoBox: TinaTemplate = {
  name: "InfoBox",
  label: "Info Box",
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
      type: "boolean",
      label: "Image on right?",
      name: "right",
    },
  ],
};
