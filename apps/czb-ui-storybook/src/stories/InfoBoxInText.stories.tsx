import type { Meta, StoryObj } from "@storybook/react";
import { InfoBox as CZBUIInfoBox } from "@czb-ui/core/src";
import sampleImage from "./assets/sapiens_banner.webp";
import { Container, Grid, Typography } from "@mui/material";

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

const MARGIN_Y_BETWEEN_PARAGRAPHS = 8;
const CONTAINER_MAX_WIDTH = "md";

interface TypographyWithContainerAndMarginProps {
  variant: React.ComponentProps<typeof Typography>["variant"];
  children: React.ReactNode;
}

const TypographyWithContainerAndMargin = ({
  variant,
  children,
}: TypographyWithContainerAndMarginProps) => (
  <Container maxWidth={CONTAINER_MAX_WIDTH}>
    <Typography variant={variant} my={MARGIN_Y_BETWEEN_PARAGRAPHS}>
      {children}
    </Typography>
  </Container>
);

export const InText: StoryObj<typeof CZBUIInfoBox> = {
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
    type: "normal",
  },
  render: (args) => (
    <Container maxWidth="md">
      <TypographyWithContainerAndMargin variant="h1">
        Info Box example with text
      </TypographyWithContainerAndMargin>
      <TypographyWithContainerAndMargin variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie
        orci non tortor feugiat, ac malesuada eros tempus. Nulla venenatis leo
        eu odio gravida semper. In at ex ac est tristique dignissim. Donec quis
        ultricies velit. Quisque pellentesque id metus ac feugiat. Nam ex elit,
        bibendum sed libero eu, vehicula venenatis diam. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.
      </TypographyWithContainerAndMargin>
      <TypographyWithContainerAndMargin variant="body1">
        In ac risus a odio suscipit malesuada. Proin interdum quam quis ex
        pharetra facilisis. Duis feugiat mi a sem rhoncus, eget volutpat lorem
        convallis. Sed ex nisl, ultrices a ante vel, consectetur gravida nibh.
        Phasellus in nulla ullamcorper, mollis leo in, tempor mauris. Duis ipsum
        eros, ornare nec mauris non, sagittis feugiat nulla. Mauris at malesuada
        justo. Curabitur maximus metus dolor, scelerisque porttitor velit
        tincidunt viverra. Suspendisse tincidunt, diam ut rutrum lacinia, ligula
        turpis lacinia elit, sit amet lobortis dolor purus id nisl. Vestibulum
        ut tempus mauris, sed porttitor justo. Praesent elementum velit nunc, ac
        fringilla enim luctus sit amet. Quisque non libero tortor. Phasellus a
        accumsan sem. Aenean eget maximus nibh.
      </TypographyWithContainerAndMargin>
      <Container maxWidth={CONTAINER_MAX_WIDTH}>
        <CZBUIInfoBox {...args} />
      </Container>
      <TypographyWithContainerAndMargin variant="body1">
        Duis mauris dolor, faucibus eu lorem a, laoreet finibus mi. Donec
        tincidunt elit quis gravida tristique. Donec facilisis urna varius
        libero vehicula, vitae egestas justo tempus. In posuere posuere
        tristique. Donec volutpat urna vel massa eleifend placerat. Aliquam erat
        volutpat. Phasellus nec bibendum lorem. Morbi eget eleifend lectus,
        vitae luctus ex. Morbi sapien tortor, viverra a semper id, euismod sed
        mauris. Sed consectetur volutpat sem sit amet placerat. Cras id congue
        libero. Cras euismod ut nisi sit amet rhoncus. Donec ex ante, ultricies
        ac magna a, pharetra efficitur tortor. Donec vehicula sem libero, sed
        viverra ante semper at. Duis ac lectus eget nisl congue ornare non in
        sapien.
      </TypographyWithContainerAndMargin>
      <Container maxWidth={CONTAINER_MAX_WIDTH}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          <Grid item xs={1} sm={4} md={4}>
            <CZBUIInfoBox {...args} inGrid />
          </Grid>
          <Grid item xs={1} sm={4} md={4}>
            <CZBUIInfoBox {...args} inGrid />
          </Grid>
          <Grid item xs={1} sm={4} md={4}>
            <CZBUIInfoBox {...args} inGrid />
          </Grid>
          <Grid item xs={1} sm={4} md={4}>
            <CZBUIInfoBox {...args} inGrid />
          </Grid>
          <Grid item xs={1} sm={4} md={4}>
            <CZBUIInfoBox {...args} inGrid />
          </Grid>
        </Grid>
      </Container>
      <TypographyWithContainerAndMargin variant="body1">
        Duis facilisis ligula vel nulla egestas, et iaculis est bibendum. Donec
        congue convallis ultrices. Morbi in magna rutrum dolor tempor
        sollicitudin. Aliquam dictum consequat pulvinar. Etiam scelerisque id
        nisl ac finibus. In bibendum facilisis lacus, quis eleifend dui cursus
        a. Aenean sollicitudin molestie arcu a ullamcorper. Sed eleifend luctus
        sollicitudin. Nullam placerat efficitur nunc, sed blandit elit pretium
        et. Sed varius nulla et lectus bibendum, ullamcorper interdum velit
        tincidunt. Aliquam a euismod elit. Morbi nec rhoncus tortor. Suspendisse
        potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas vel tristique metus, at iaculis tortor.
      </TypographyWithContainerAndMargin>
      <Container maxWidth={CONTAINER_MAX_WIDTH}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8 }}>
          <Grid item xs={1} sm={4} md={4}>
            <CZBUIInfoBox {...args} inGrid />
          </Grid>
          <Grid item xs={1} sm={4} md={4}>
            <CZBUIInfoBox {...args} inGrid />
          </Grid>
        </Grid>
      </Container>
      <TypographyWithContainerAndMargin variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie
        orci non tortor feugiat, ac malesuada eros tempus. Nulla venenatis leo
        eu odio gravida semper. In at ex ac est tristique dignissim. Donec quis
        ultricies velit. Quisque pellentesque id metus ac feugiat. Nam ex elit,
        bibendum sed libero eu, vehicula venenatis diam. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.
      </TypographyWithContainerAndMargin>
    </Container>
  ),
};
