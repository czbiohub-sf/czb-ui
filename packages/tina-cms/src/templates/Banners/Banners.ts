import type { Template, TinaTemplate } from "tinacms";

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
};

/**
 * @deprecated Please use the `Banner` template instead.
 */
export const GenericBanner: TinaTemplate = {
  name: "GenericBanner",
  label: "Generic Banner (deprecated)",
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
      name: "image",
    },
    {
      type: "string",
      label: "Background Image alt",
      name: "imageAlt",
    },
  ],
};

/**
 * @deprecated Please use the `Banner` template instead.
 */
export const GrandBanner: TinaTemplate = {
  name: "GrandBanner",
  label: "Grand Banner (deprecated)",
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
      type: "boolean",
      label: "Smaller",
      name: "smaller",
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
      label: "Right side?",
      name: "right",
    },
    {
      type: "boolean",
      label: "Alternate title font",
      name: "alternateFont",
    },
  ],
};
