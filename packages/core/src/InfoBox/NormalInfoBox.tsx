import React from "react";
import { Box, styled } from "@mui/material";
import {
  Button,
  Icon,
  CommonThemeProps,
  getSpaces,
  getColors,
  fontHeaderL,
  fontCapsXxs,
  getTypography,
  getFontWeights,
  fontHeaderM,
  getPalette,
} from "@czi-sds/components";
import { PageLink } from "../UniversalTypes/links";
import { InfoBoxProps } from "./InfoBox";
import { css } from "@emotion/react";

interface NormalInfoBoxContainerProps extends CommonThemeProps {
  imageOnRight?: boolean;
  inGrid?: boolean;
}

interface InfoBoxLinkProps extends CommonThemeProps {
  page?: PageLink;
  pagesComponent?: any;
}

const NormalInfoBoxContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "inGrid",
})<NormalInfoBoxContainerProps>((props) => {
  const spaces = getSpaces(props);
  const colors = getColors(props);
  const palette = getPalette(props);
  const inDarkMode = palette.mode === "dark";

  return css`
    z-index: 1;
    width: 100%;
    padding: ${spaces?.m}px;
    border: 1px solid ${inDarkMode ? colors?.gray[500] : colors?.gray[200]};
    display: flex;
    flex-direction: ${props.inGrid ? "column" : "row"};

    /* TODO: Use global breakpoints */
    @media (max-width: 600px) {
      flex-direction: column;
    }
  `;
});

const ImageContainer = styled(Box)<CommonThemeProps>((props) => {
  const colors = getColors(props);
  const palette = getPalette(props);
  const inDarkMode = palette.mode === "dark";

  return css`
    flex: 1;
    background-color: ${inDarkMode ? colors?.gray[600] : colors?.gray[200]};
    aspect-ratio: 4/3;
  `;
});

const ContentBox = styled(Box)<CommonThemeProps>((props) => {
  const spaces = getSpaces(props);
  const colors = getColors(props);
  const palette = getPalette(props);
  const inDarkMode = palette.mode === "dark";

  return css`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: ${spaces?.xl}px;
    background-color: ${inDarkMode ? colors?.gray[500] : colors?.gray[100]};
  `;
});

const Title = styled(Box)<CommonThemeProps>((props) => {
  const typography = getTypography(props);
  const fontWeights = getFontWeights(props);

  return css`
    ${fontHeaderM(props)}
    font-family: ${typography?.fontFamily.body};
    font-weight: ${fontWeights?.semibold};
  `;
});

const Subtitle = styled(Box)<CommonThemeProps>((props) => {
  const spaces = getSpaces(props);
  const colors = getColors(props);
  const palette = getPalette(props);
  const inDarkMode = palette.mode === "dark";

  return css`
    color: ${inDarkMode ? colors?.gray[200] : colors?.gray[400]};
    margin: ${spaces?.xs}px 0;
  `;
});

const InfoBoxLink = ({ page, pagesComponent }: InfoBoxLinkProps) => {
  if (!page?.to) {
    return (
      <Button
        sdsStyle="minimal"
        sdsType="primary"
        startIcon={<Icon sdsIcon="PlusCircle" sdsSize="s" sdsType="button" />}
        disabled={true}
      >
        {page?.title}
      </Button>
    );
  }

  if (pagesComponent) {
    return (
      <Button
        href={page?.to}
        component={page?.to ? pagesComponent : undefined}
        sdsStyle="minimal"
        sdsType="primary"
        startIcon={<Icon sdsIcon="PlusCircle" sdsSize="s" sdsType="button" />}
      >
        {page?.title}
      </Button>
    );
  }

  return (
    <Button
      href={page?.to}
      sdsStyle="minimal"
      sdsType="primary"
      // @ts-expect-error
      target={page?.newTab ? "_blank" : undefined}
      rel="noopener"
      startIcon={<Icon sdsIcon="PlusCircle" sdsSize="s" sdsType="button" />}
    >
      {page?.title}
    </Button>
  );
};

export default function NormalInfoBox({
  title,
  subtitle,
  page,
  pagesComponent,
  image,
  inGrid,
}: InfoBoxProps) {
  return (
    <NormalInfoBoxContainer inGrid={inGrid}>
      {image && <ImageContainer>{image}</ImageContainer>}
      <ContentBox>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Box marginTop="auto">
          <InfoBoxLink page={page} pagesComponent={pagesComponent} />
        </Box>
      </ContentBox>
    </NormalInfoBoxContainer>
  );
}
