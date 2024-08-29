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

// Function to generate a text with a specified number of words
const generateTextWithWordCount = (wordCount: number) => {
  const words = "Lorem ipsum dolor sit amet consectetur adipiscing elit".split(
    " "
  );
  let result = "";
  for (let i = 0; i < wordCount; i++) {
    result += words[i % words.length] + " ";
  }
  return result.trim();
};

// Arguments for each InfoBox with different word counts
const infoBoxArgs = [
  {
    title: generateTextWithWordCount(5),
    subtitle: generateTextWithWordCount(10),
  },
  {
    title: generateTextWithWordCount(10),
    subtitle: generateTextWithWordCount(20),
  },
  {
    title: generateTextWithWordCount(15),
    subtitle: generateTextWithWordCount(30),
  },
  {
    title: generateTextWithWordCount(20),
    subtitle: generateTextWithWordCount(40),
  },
  {
    title: generateTextWithWordCount(25),
    subtitle: generateTextWithWordCount(50),
  },
];

export const InText: StoryObj<typeof CZBUIInfoBox> = {
  render: () => (
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
      <Container maxWidth={CONTAINER_MAX_WIDTH}>
        <CZBUIInfoBox
          {...infoBoxArgs[0]}
          page={{ title: "Go to Dataset", to: "/tools" }}
          image={
            <img
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                zIndex: 0,
              }}
              src={sampleImage}
            />
          }
        />
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
            <CZBUIInfoBox
              {...infoBoxArgs[1]}
              inGrid
              page={{ title: "Go to Dataset", to: "/tools" }}
              image={
                <img
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    zIndex: 0,
                  }}
                  src={sampleImage}
                />
              }
            />
          </Grid>
          <Grid item xs={1} sm={4} md={4}>
            <CZBUIInfoBox
              {...infoBoxArgs[2]}
              inGrid
              page={{ title: "Go to Dataset", to: "/tools" }}
              image={
                <img
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    zIndex: 0,
                  }}
                  src={sampleImage}
                />
              }
            />
          </Grid>
          <Grid item xs={1} sm={4} md={4}>
            <CZBUIInfoBox
              {...infoBoxArgs[3]}
              inGrid
              page={{ title: "Go to Dataset", to: "/tools" }}
              image={
                <img
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    zIndex: 0,
                  }}
                  src={sampleImage}
                />
              }
            />
          </Grid>
          <Grid item xs={1} sm={4} md={4}>
            <CZBUIInfoBox
              {...infoBoxArgs[4]}
              inGrid
              page={{ title: "Go to Dataset", to: "/tools" }}
              image={
                <img
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    zIndex: 0,
                  }}
                  src={sampleImage}
                />
              }
            />
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
            <CZBUIInfoBox
              {...infoBoxArgs[0]}
              inGrid
              page={{ title: "Go to Dataset", to: "/tools" }}
              image={
                <img
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    zIndex: 0,
                  }}
                  src={sampleImage}
                />
              }
            />
          </Grid>
          <Grid item xs={1} sm={4} md={4}>
            <CZBUIInfoBox
              {...infoBoxArgs[1]}
              inGrid
              page={{ title: "Go to Dataset", to: "/tools" }}
              image={
                <img
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    zIndex: 0,
                  }}
                  src={sampleImage}
                />
              }
            />
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
