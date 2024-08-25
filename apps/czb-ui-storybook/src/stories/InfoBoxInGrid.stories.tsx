import type { Meta, StoryObj } from "@storybook/react";
import { InfoBox as CZBUIInfoBox } from "@czb-ui/core/src";
import sampleImage from "./assets/sapiens_banner.webp";
import { Grid } from "@mui/material";

const meta: Meta<typeof CZBUIInfoBox> = {
  title: "core/InfoBox",
  component: CZBUIInfoBox,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const InGrid: StoryObj<typeof CZBUIInfoBox> = {
  args: {
    title:
      "Super Long Text To See How This Text Would Fit In This Grid View. View This Dataset.",
    subtitle:
      "This is a dataset containing some data. The data is very important. It is very important to view this data.",
    page: {
      title: "Go to Very Long Dataset Name Viewer",
      to: "/tools",
    },
    image: (
      <img
        style={{ objectFit: "cover", height: "100%", width: "100%", zIndex: 0 }}
        src={sampleImage}
      />
    ),
    inGrid: true,
    type: "normal",
  },
  render: (args) => (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <CZBUIInfoBox {...args} />
      </Grid>
      <Grid item xs={6}>
        <CZBUIInfoBox {...args} />
      </Grid>
      <Grid item xs={6}>
        <CZBUIInfoBox {...args} />
      </Grid>
      <Grid item xs={6}>
        <CZBUIInfoBox {...args} />
      </Grid>
      <Grid item xs={6}>
        <CZBUIInfoBox {...args} />
      </Grid>
    </Grid>
  ),
};
