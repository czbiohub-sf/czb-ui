import React from "react";
import { Typography, Box, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FooterBar } from "./FooterBar";
import { PageGroup } from "../UniversalTypes/links";
import { FooterPagesGroup } from "./FooterPagesGroup";
import { CommonThemeProps, getSpaces, getColors } from "@czi-sds/components";
import { css } from "@emotion/react";

interface FooterProps {
  logo?: React.ReactNode;
  title?: string;
  pages?: Array<PageGroup>;
  pagesComponent?: any; // TODO: Find type of mui button component prop
  small?: boolean;
}

interface FooterStyleProps extends CommonThemeProps {
  small?: boolean;
}

const StyledFooterBar = styled(FooterBar)<FooterStyleProps>((props) => {
  return css`
    position: relative;
    top: auto;
    bottom: 0;
    min-height: ${props.small ? "100px" : "200px"};
  `;
});

const FlexBox = styled(Box)<FooterStyleProps>((props) => {
  return css`
    display: flex;
    align-items: center;
  `;
});

const CustomLink = styled(Link)<FooterStyleProps>((props) => {
  return css`
    display: flex;
    align-items: center;
    color: inherit;
  `;
});

const LogoBox = styled(Box)<FooterStyleProps>((props) => {
  const spaces = getSpaces(props);

  return css`
    margin-right: ${spaces?.m}px;
    display: inherit;
  `;
});

const TitleTypography = styled(Typography)<FooterStyleProps>((props) => {
  const colors = getColors(props);

  return css`
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0;
    color: ${colors?.common.white};
    flex-grow: 1;

    ${props.theme.breakpoints.up("sm")} {
      flex-grow: 0;
    }
  `;
});

export const Footer = ({
  logo,
  title,
  pages,
  pagesComponent,
  small,
}: FooterProps) => {
  return (
    <StyledFooterBar small={small}>
      <FlexBox>
        <CustomLink href="https://www.czbiohub.org/">
          <LogoBox>{logo}</LogoBox>
          <TitleTypography>{title}</TitleTypography>
        </CustomLink>
      </FlexBox>
      {pages && (
        <FooterPagesGroup
          pages={pages}
          pagesComponent={pagesComponent}
          small={small}
        />
      )}
    </StyledFooterBar>
  );
};
