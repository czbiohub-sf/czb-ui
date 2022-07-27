import type { TinaTemplate } from "tinacms";
import { InfoBox } from "../InfoBox/InfoBox";

export const Stack: TinaTemplate = {
  name: "Stack",
  label: "Stack",
  fields: [
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      templates: [InfoBox],
    },
  ],
};
