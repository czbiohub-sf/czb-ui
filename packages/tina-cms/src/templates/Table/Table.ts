import type { TinaTemplate } from "tinacms";

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
        validate: (val?: string) => {
          if (!val) {
            return;
          }

          // TODO: Test this limit
          if (val.length > 30000) {
            return "This CSV is too big. A custom Table implementation is needed.";
          }
        },
      },
    },
    {
      type: "boolean",
      label: "Use container",
      name: "inContainer",
    },
  ],
};
