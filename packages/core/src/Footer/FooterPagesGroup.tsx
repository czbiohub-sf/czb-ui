import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Link,
  CommonThemeProps,
  getSpaces,
  getColors,
} from "@czi-sds/components";
import { css } from "@emotion/react";
import { PageGroup } from "../UniversalTypes/links";

interface FooterPagesGroupProps {
  pages: Array<PageGroup>;
  pagesComponent?: any;
  small?: boolean;
}

interface FooterPagesGroupStyleProps extends CommonThemeProps {
  small?: boolean;
}

const StyledBox = styled(Box)<FooterPagesGroupStyleProps>((props) => {
  const spaces = getSpaces(props);

  return css`
    display: flex;
    margin-top: ${spaces?.l};
    gap: 80px;
    flex-direction: column;

    ${props.theme.breakpoints.up("md")} {
      flex-direction: row;
    }
  `;
});

const GroupTitle = styled(Typography)<FooterPagesGroupStyleProps>((props) => {
  const colors = getColors(props);

  return css`
    text-transform: uppercase;
    font-weight: bold;
    color: ${colors?.common.white};
  `;
});

const ListBox = styled(Box)<FooterPagesGroupStyleProps>((props) => {
  const spaces = getSpaces(props);

  return css`
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
    margin-top: ${spaces?.m};
    display: block;

    ${props.small &&
    css`
      ${props.theme.breakpoints.up("md")} {
        display: flex;
        gap: ${spaces?.xl};
      }
    `}
  `;
});

const ListItem = styled(Box)<FooterPagesGroupStyleProps>((props) => {
  const spaces = getSpaces(props);

  return css`
    margin-bottom: ${spaces?.xl};
  `;
});

const CustomLink = styled(Link)<FooterPagesGroupStyleProps>((props) => {
  const colors = getColors(props);
  const spaces = getSpaces(props);

  return css`
    margin-top: ${spaces?.m};
    color: ${colors?.common.white};
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
        <Box key={i}>
          <GroupTitle>{pageGroup.title}</GroupTitle>
          <ListBox>
            {pageGroup.pages.map((page, j) => (
              <ListItem component="li" key={j}>
                {!page.externalLink ? (
                  <CustomLink
                    to={page?.to}
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
        </Box>
      ))}
    </StyledBox>
  );
};
