import type { Template } from "tinacms";

// Types for component props
export type VideoProps = {
  url: string;
  hideControls: boolean;
};

export const Video: Template = {
  name: "Video",
  label: "Online Video",
  fields: [
    {
      type: "string",
      label: "URL",
      name: "url",
      description:
        "YouTube, Facebook, Twich, SoundCloud, Streamable, Vimeo, Wistia and DailyMotion supported.",
    },
    {
      type: "boolean",
      label: "Hide controls",
      name: "hideControls",
    },
  ],
};
