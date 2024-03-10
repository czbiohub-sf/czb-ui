import type { Template } from "tinacms";

export const HeadingSeparator: Template = {
  name: "HeadingSeparator",
  label: "Heading Separator",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
  ],
  ui: {
    itemProps: (item) => {
      return { label: item?.title };
    },
  },
};
