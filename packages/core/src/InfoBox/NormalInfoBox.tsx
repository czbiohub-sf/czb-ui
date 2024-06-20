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
} from "@czi-sds/components";
import { PageLink } from "../UniversalTypes/links";
import { InfoBoxProps } from "./InfoBox";
import { css } from "@emotion/react";

interface NormalInfoBoxContainerProps extends CommonThemeProps {
  imageOnRight?: boolean;
  small?: boolean;
}

interface InfoBoxLinkProps extends CommonThemeProps {
  page?: PageLink;
  pagesComponent?: any;
}

const NormalInfoBoxContainer = styled(Box)<NormalInfoBoxContainerProps>(
  (props) => {
    const spaces = getSpaces(props);
    const colors = getColors(props);

    return css`
      z-index: 1;
      width: 100%;
      max-width: ${props.small ? "100%" : "350px"};
      height: ${props.small ? "350px" : "450px"};
      padding: ${spaces?.m}px;
      border: 1px solid ${colors?.gray[200]};
      display: flex;
      flex-direction: column;
    `;
  }
);

const ImageContainer = styled(Box)<CommonThemeProps>((props) => {
  const colors = getColors(props);

  return css`
    width: 100%;
    height: 100%;
    border: 1px solid ${colors?.gray[200]};
    max-width: 100%;
    max-height: 138px;
  `;
});

const ContentBox = styled(Box)<CommonThemeProps>((props) => {
  const spaces = getSpaces(props);

  return css`
    display: flex;
    flex-direction: column;
    padding: ${spaces?.l}px;
    height: 100%;
  `;
});

const Title = styled(Box)<CommonThemeProps>((props) => {
  const typography = getTypography(props);
  const fontWeights = getFontWeights(props);

  return css`
    ${fontHeaderL(props)}
    font-family: ${typography?.fontFamily.body};
    font-weight: ${fontWeights?.regular};
  `;
});

const Subtitle = styled(Box)<CommonThemeProps>((props) => {
  const spaces = getSpaces(props);
  const colors = getColors(props);

  return css`
    color: ${colors?.gray[300]};
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
  small,
}: InfoBoxProps) {
  return (
    <NormalInfoBoxContainer small={small}>
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
