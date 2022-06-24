import React from "react";

import { Container as CZBUIContainer, Typography } from "@czb-ui/core";

export default {
  title: "Container",
  component: CZBUIContainer,
};

const Template = () => (
  <CZBUIContainer>
    <Typography variant="h1">CZB-UI is the next big new thing.</Typography>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla
      faucibus augue, vitae pharetra tellus semper eget. Vivamus elit nulla,
      pellentesque sit amet sagittis id, placerat at tellus. Etiam molestie est
      pulvinar neque mollis scelerisque. Donec sit amet molestie purus, non
      imperdiet turpis. Interdum et malesuada fames ac ante ipsum primis in
      faucibus. Fusce sagittis eleifend enim quis pulvinar. Nullam in neque ut
      justo fringilla commodo ac tempus lectus. Sed a tempor enim. Curabitur
      lobortis justo elementum ante tincidunt, facilisis posuere risus
      convallis. Morbi eget sapien vestibulum, ultrices orci in, vulputate orci.
      Phasellus vitae justo dignissim, rhoncus risus at, ultrices nunc. Integer
      venenatis facilisis mi, eget volutpat magna mattis sit amet. Duis mi
      neque, feugiat eu lectus et, accumsan tempus arcu. Nam cursus rhoncus
      nulla, mollis egestas neque cursus vitae. Duis hendrerit dignissim urna.
    </Typography>
  </CZBUIContainer>
);

export const Container = Template.bind({});
