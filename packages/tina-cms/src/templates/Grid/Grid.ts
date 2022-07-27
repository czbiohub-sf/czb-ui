import type { TinaTemplate } from "tinacms";
import { InfoBox } from "../InfoBox/InfoBox";

export const Grid: TinaTemplate = {
  name: "Grid",
  label: "Grid",
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
