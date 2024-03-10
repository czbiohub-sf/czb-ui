import type { Template } from "tinacms";
import { InfoBox } from "../InfoBox/InfoBox";
import { LegacyInfoBox } from "../LegacyInfoBox/LegacyInfoBox";

export const Grid: Template = {
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
