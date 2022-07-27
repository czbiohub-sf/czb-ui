import type { TinaTemplate } from "tinacms";

export const Text: TinaTemplate = {
  name: "text",
  label: "Text",
  fields: [
    {
      type: "rich-text",
      label: "Text",
      name: "text",
    },
  ],
};
