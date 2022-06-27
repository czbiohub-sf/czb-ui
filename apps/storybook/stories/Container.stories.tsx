import React from "react";

import { Container as CZBUIContainer, Typography } from "@czb-ui/core";

export default {
  title: "Container",
  component: CZBUIContainer,
};

const Template = () => (
  <CZBUIContainer>
    <Typography variant="h1">Who we are</Typography>
    <Typography variant="h2">We don't believe in impossible</Typography>
    <Typography>
      CZ Biohub is an independent, non-profit medical research organization
      working in collaboration with UC San Francisco, Stanford University and UC
      Berkeley.
    </Typography>
    <Typography variant="h2">
      So what does this container component do?
    </Typography>
    <Typography>
      The container centers your content horizontally. It's the most basic
      layout element.
    </Typography>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis
      aliquet finibus. Proin aliquet et magna et mollis. Duis eros velit, dictum
      eu porttitor non, tristique vitae ex. Nam consectetur interdum nisi, a
      sollicitudin ipsum sollicitudin et. Curabitur a vestibulum orci. Curabitur
      scelerisque tellus vitae odio euismod, non bibendum neque maximus. Vivamus
      neque lorem, facilisis vitae vulputate in, viverra vitae nibh. Sed magna
      mi, lobortis eget suscipit at, posuere quis turpis. Sed faucibus non dolor
      ut rhoncus. In placerat feugiat lacus vitae porttitor. Proin feugiat non
      mi a lacinia. Aenean porta massa felis, ut fringilla sapien tincidunt at.
      Vivamus porttitor vulputate ante, in tincidunt eros suscipit eu. Mauris
      lacus est, scelerisque eu odio sed, tempor egestas sapien. Quisque cursus
      velit et iaculis scelerisque. Donec dictum vulputate sodales.
    </Typography>
    <Typography variant="h3">Why this component?</Typography>
    <Typography>
      Because if the text is too wide it is too hard to read. I need more sample
      text so this looks like a real article or something.
    </Typography>
    <Typography variant="h3">Test</Typography>
    <Typography>
      This is another h3 above me. Lato Light ABCDEFGHIJKLMNOPQRSTUVWXYZ
      abcdefghijklmnopqrstuvwxyz
    </Typography>
    <Typography variant="h2">Another heading</Typography>
    <Typography>
      Sed quis dui et ipsum fringilla sodales. Integer auctor, justo ac aliquam
      sollicitudin, massa metus vehicula metus, ac vulputate purus nisl vel
      nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque sed feugiat neque, a mattis eros. Ut faucibus nibh quis
      accumsan facilisis. Maecenas malesuada ex a diam malesuada, non tincidunt
      ex condimentum. Ut vitae lectus porttitor, gravida lorem ut, porttitor
      ipsum. Nam laoreet hendrerit libero, eget porttitor dolor fermentum
      fringilla. Nulla eget lorem nec neque lobortis aliquet et at justo. Ut ac
      posuere diam, sed consequat est. Integer ut leo tortor. Fusce condimentum
      non nunc a suscipit. Cras vulputate arcu et rutrum auctor. Cras ac orci
      sem. Fusce placerat sagittis sapien, sed lacinia ex tempus eget. Nulla in
      ullamcorper dolor.
    </Typography>
    <ul>
      <li>List</li>
      <li>items</li>
      <li>do</li>
      <li>
        not need the <code>Typography</code> component.
      </li>
    </ul>
    <Typography>
      Nullam sollicitudin eu nulla et efficitur. Aenean volutpat nunc nec tortor
      euismod rhoncus. Quisque libero leo, mattis porttitor gravida at, placerat
      vel massa. Vestibulum ante ipsum primis in faucibus orci luctus et
      ultrices posuere cubilia curae; Sed vulputate tellus sed magna
      scelerisque, ut congue nisi pellentesque. Sed vestibulum sapien eu massa
      varius, eget condimentum nisi commodo. Interdum et malesuada fames ac ante
      ipsum primis in faucibus. Mauris varius nunc elit, sit amet ultricies
      magna interdum ac. Mauris suscipit nec leo quis scelerisque. Nulla congue
      purus eu magna aliquam, at vehicula dolor maximus.
    </Typography>
  </CZBUIContainer>
);

export const Container = Template.bind({});
