import type { Template } from "tinacms";

export const Banner: Template = {
  name: "Banner",
  label: "Banner",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "image",
      label: "Background",
      name: "image",
    },
    {
      type: "string",
      label: "Background Image alt",
      name: "imageAlt",
    },
  ],
  ui: {
    itemProps: (item) => {
      return { label: item?.title };
    },
  },
};
