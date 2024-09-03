import React from "react";
import { Box, Stack, styled } from "@mui/material";
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
  sdsType: "primary" | "secondary";
  page?: PageLink;
  pagesComponent?: any;
}

const NormalInfoBoxContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "inGrid",
})<NormalInfoBoxContainerProps>((props) => {
  const spaces = getSpaces(props);
  const colors = getColors(props);

  return css`
    z-index: 1;
    width: 100%;
    height: ${props.inGrid ? "100%" : "auto"};
    padding: ${spaces?.m}px;
    border: 1px solid ${colors?.gray[300]};
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

  return css`
    flex: 1;
    background-color: ${colors?.gray[200]};
    aspect-ratio: 4 / 3;
    max-height: 50%;
  `;
});

const ContentBox = styled(Box)<CommonThemeProps>((props) => {
  const spaces = getSpaces(props);
  const colors = getColors(props);

  return css`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: ${spaces?.xl}px;
    background-color: ${colors?.gray[100]};
    overflow: scroll;
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

  return css`
    color: ${colors?.gray[600]};
    margin: ${spaces?.xs}px 0;
  `;
});

const InfoBoxLink = ({ page, pagesComponent, sdsType }: InfoBoxLinkProps) => {
  if (!page?.to) {
    return (
      <Button
        sdsStyle="minimal"
        sdsType={sdsType}
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
        sdsType={sdsType}
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
      sdsType={sdsType}
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
  secondaryPage,
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
        <Stack marginTop="auto" alignItems="baseline" direction="row" gap={6}>
          <InfoBoxLink
            page={page}
            pagesComponent={pagesComponent}
            sdsType="primary"
          />
          {secondaryPage && (
            <InfoBoxLink
              page={secondaryPage}
              pagesComponent={pagesComponent}
              sdsType="secondary"
            />
          )}
        </Stack>
      </ContentBox>
    </NormalInfoBoxContainer>
  );
}
