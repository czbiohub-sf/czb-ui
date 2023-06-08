import type { Template } from "tinacms";

export const ImageGallery: Template = {
  name: "ImageGallery",
  label: "Image Gallery",
  fields: [
    {
      type: "object",
      list: true,
      name: "images",
      label: "Images",
      fields: [
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
      ],
    },
  ],
};
