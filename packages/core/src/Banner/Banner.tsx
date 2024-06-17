import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  CommonThemeProps,
  getColors,
  fontHeaderXxl,
} from "@czi-sds/components";
import { css } from "@emotion/react";

interface BannerProps extends CommonThemeProps {
  headline?: string;
  image?: React.ReactNode;
  type?: "background" | "nobackground";
}

const maxHeight = "500px";

const StyledBox = styled(Box)<BannerProps>((props) => {
  const colors = getColors(props);

  return css`
    position: relative;
    height: ${maxHeight};
    width: 100%;
    background-color: ${colors?.common.black};
  `;
});

const StyledContainer = styled(Container)<BannerProps>(() => ({
  position: "relative",
  zIndex: 2,
  height: "100%",
}));

const ContentBox = styled(Box)<BannerProps>((props) => {
  return css`
    display: flex;
    justify-content: left;
    height: 100%;
    padding-top: ${props.theme.spacing(7)};
    padding-left: ${props.theme.spacing(7)};
    align-items: center;
    max-width: 500px;

    ${props.theme.breakpoints.down("md")} {
      align-items: top;
    }
  `;
});

const Headline = styled(Typography)<BannerProps>((props) => {
  const colors = getColors(props);

  return css`
    color: ${props.type === "background"
      ? colors?.common.white
      : colors?.common.black};

    ${fontHeaderXxl(props)}
  `;
});

const GradientBox = styled(Box)<BannerProps>((props) => {
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
