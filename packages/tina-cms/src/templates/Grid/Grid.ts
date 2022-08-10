import type { TinaTemplate } from "tinacms";
import { InfoBox } from "../InfoBox/InfoBox";
import { LegacyInfoBox } from "../LegacyInfoBox/LegacyInfoBox";

export const Grid: TinaTemplate = {
  name: "Grid",
  label: "Grid",
  fields: [
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      templates: [InfoBox, LegacyInfoBox],
    },
  ],
};
