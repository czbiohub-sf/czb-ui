import type { Template } from "tinacms";

export const InfoBox: Template = {
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
      type: "boolean",
      label: "Open link in new tab",
      name: "newTab",
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
      type: "boolean",
      label: "Image on right?",
      name: "right",
    },
  ],
  ui: {
    itemProps: (item) => {
      return { label: item?.title };
    },
  },
};
