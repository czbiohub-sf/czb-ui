import type { Template } from "tinacms";
import { InfoBox } from "../InfoBox/InfoBox";

export const Text: Template = {
  name: "text",
  label: "Text",
  fields: [
    {
      type: "rich-text",
      label: "Text",
      name: "text",
      templates: [
        {
          name: "infoBox",
          label: "Info Box",
          fields: InfoBox.fields,
        },
      ],
    },
  ],
};
