import type { TinaTemplate } from "tinacms";
import { csvParse, csvFormat } from "d3-dsv";

export const Table: TinaTemplate = {
  name: "Table",
  label: "Table",
  fields: [
    {
      type: "string",
      label: "Paste CSV here (small CSVs only, less than ~30KB)",
      description:
        "Please do not use this as a primary way of editing the CSV.",
      name: "csvData",
      ui: {
        component: "textarea",
        parse: (val?: string) => val && JSON.stringify(csvParse(val)),
        format: (val?: string) => val && csvFormat(JSON.parse(val)),
        validate: (val?: string) => {
          // val is the stringified JSON of csvParse()
          if (!val) {
            return;
          }

          if (val.length > 50000) {
            return "This CSV is too big. A custom Table implementation is needed.";
          }
        },
      },
    },
  ],
};
