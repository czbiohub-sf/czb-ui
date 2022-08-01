import type { TinaTemplate } from "tinacms";
import { csvParse, csvFormat } from "d3-dsv";

export const Table: TinaTemplate = {
  name: "Table",
  label: "Table",
  fields: [
    {
      type: "string",
      label: "Paste CSV here (small CSVs only, less than 100KB)",
      description:
        "Please do not use this as a primary way of editing the CSV.",
      name: "csvData",
      ui: {
        component: "textarea",
        parse: (val?: string) => val && JSON.stringify(csvParse(val)),
        format: (val?: string) => val && csvFormat(JSON.parse(val)),
      },
    },
  ],
};
