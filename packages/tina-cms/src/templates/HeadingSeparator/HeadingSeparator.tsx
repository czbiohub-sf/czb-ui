import type { TinaTemplate } from "tinacms";

export const HeadingSeparator: TinaTemplate = {
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
