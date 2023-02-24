import type { TinaTemplate } from "tinacms";
import { InfoBox } from "../InfoBox/InfoBox";
import { Video } from "../Video/Video";

export const Text: TinaTemplate = {
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
        {
          name: "video",
          label: "Online Video",
          fields: Video.fields,
        },
      ],
    },
  ],
};
