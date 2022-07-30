import type { TinaTemplate } from "tinacms";
import { csvParse } from "d3-dsv";

export const Table: TinaTemplate = {
  name: "Table",
  label: "Table",
  fields: [
    {
      type: "string",
      label: "Paste CSV here (small CSVs only, less than 100KB)",
      name: "csvData",
      ui: {
        component: "textarea",
        parse: (val?: string) => val && csvParse(val),
      },
    },
  ],
};
