import React from "react";

import { ImageViewer as CZBUIImageViewer } from "@czb-ui/viz/src";

export default {
  title: "Image Viewer",
  component: CZBUIImageViewer,
};

const Template = (args: any) => <CZBUIImageViewer {...args} />;

export const ImageViewer = Template.bind({});
