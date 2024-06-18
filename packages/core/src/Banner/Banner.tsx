import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  CommonThemeProps,
  getColors,
  fontHeaderXxl,
} from "@czi-sds/components";
import { css } from "@emotion/react";

interface BannerProps {
  headline?: string;
  image?: React.ReactNode;
  type?: "background" | "nobackground";
}

interface BannerStyleProps extends CommonThemeProps {
  type?: "background" | "nobackground";
}

const maxHeight = "500px";

const StyledBox = styled(Box)<BannerStyleProps>((props) => {
  const colors = getColors(props);

  return css`
    position: relative;
    height: ${maxHeight};
    width: 100%;
  `;
});

const StyledContainer = styled(Container)<BannerStyleProps>(() => ({
  position: "relative",
  zIndex: 2,
  height: "100%",
}));

const ContentBox = styled(Box)<BannerStyleProps>((props) => {
  return css`
    display: flex;
    justify-content: left;
    height: 100%;
    padding-top: ${props.theme.spacing(7)};
    align-items: center;
    max-width: 500px;

    ${props.theme.breakpoints.down("md")} {
      align-items: flex-start;
    }
  `;
});

const Headline = styled(Typography)<BannerStyleProps>((props) => {
  const colors = getColors(props);

  return css`
    color: ${props.type === "background"
      ? colors?.common.white
      : colors?.common.black};

    ${fontHeaderXxl(props)}
    font-size: 2.5rem;
    line-height: 120%;
  `;
});

const GradientBox = styled(Box)<BannerStyleProps>((props) => {
  return css`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: ${props.type === "background"
      ? props.theme.breakpoints.down("md")
        ? "linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,1))"
        : "linear-gradient(270deg, rgba(0,0,0,0), rgba(0,0,0,1))"
      : "linear-gradient(0deg, rgba(255,255,255,1), rgba(255,255,255,1))"};
    z-index: 1;
  `;
});

const ImageBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  width: "100%",
}));

export const Banner = ({
  headline,
  image,
  type = "nobackground",
}: BannerProps) => {
  return (
    <StyledBox type={type}>
      <StyledContainer>
        <ContentBox type={type}>
          <Headline variant="h1" type={type}>
            {headline}
          </Headline>
        </ContentBox>
      </StyledContainer>
      <GradientBox type={type} />
      <ImageBox>
        {type !== "nobackground" && (
          <Box sx={{ height: maxHeight }}>{image}</Box>
        )}
      </ImageBox>
    </StyledBox>
  );
};
