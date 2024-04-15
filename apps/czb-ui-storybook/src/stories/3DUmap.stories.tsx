import { Viewer as CZBUIViewer } from "@czb-ui/viz";

export default {
  title: "3D UMAP",
  component: CZBUIViewer,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <div style={{ height: "100vh" }}>
    <CZBUIViewer {...args} />
  </div>
);

export const ThreeDUmap = Template.bind({});
ThreeDUmap.args = {};
