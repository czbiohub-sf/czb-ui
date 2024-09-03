"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Link,
  CommonThemeProps,
  getSpaces,
  getColors,
} from "@czi-sds/components";
import { css } from "@emotion/react";
import { PageGroup } from "../UniversalTypes/links";
import { HeadingSeparator } from "../HeadingSeparator/HeadingSeparator";

interface FooterPagesGroupProps {
  pages: Array<PageGroup>;
  pagesComponent?: any;
  small?: boolean;
}

interface FooterPagesGroupStyleProps extends CommonThemeProps {
  small?: boolean;
}

const StyledBox = styled(Box)<FooterPagesGroupStyleProps>((props) => {
  return css`
    display: flex;
    gap: 60px;
    flex-direction: column;
    ${props.theme.breakpoints.up("lg")} {
      flex-direction: row;
    }
  `;
});

const ListBox = styled(Box)<FooterPagesGroupStyleProps>((props) => {
  const spaces = getSpaces(props);

  return css`
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
    margin-top: ${spaces?.m}px;
    display: block;
    ${props.small &&
    css`
      ${props.theme.breakpoints.up("md")} {
        display: flex;
        gap: ${spaces?.xl};
      }
    `};
  `;
});

const ListItem = styled(Box)<FooterPagesGroupStyleProps>((props) => {
  const spaces = getSpaces(props);

  return css`
    margin-bottom: ${spaces?.s}px;
  `;
});

const CustomLink = styled(Link)<FooterPagesGroupStyleProps>((props) => {
  const colors = getColors(props);
  const spaces = getSpaces(props);

  return css`
    margin-top: ${spaces?.m}px;
    color: ${
      // @ts-expect-error TODO: Figure out why common is not being recognized */
      colors?.common.white
    };
  `;
});

const PageListContainer = styled(Box)<FooterPagesGroupStyleProps>((props) => {
  return css`
    width: 200px;
  `;
});

export const FooterPagesGroup = ({
  pages,
  pagesComponent,
  small,
}: FooterPagesGroupProps) => {
  return (
    <StyledBox>
      {pages.map((pageGroup, i) => (
        <PageListContainer key={i}>
          <HeadingSeparator
            title={pageGroup.title}
            dividerOpacity={0.2}
            _todoTempFixForFooterPagesGroup
          />
          <ListBox>
            {pageGroup.pages.map((page, j) => (
              <ListItem component="li" key={j}>
                {!page.externalLink ? (
                  <CustomLink
                    href={page?.to}
                    component={page?.to ? pagesComponent : undefined}
                  >
                    {page?.title}
                  </CustomLink>
                ) : (
                  <CustomLink href={page?.to}>{page?.title}</CustomLink>
                )}
              </ListItem>
            ))}
          </ListBox>
        </PageListContainer>
      ))}
    </StyledBox>
  );
};
