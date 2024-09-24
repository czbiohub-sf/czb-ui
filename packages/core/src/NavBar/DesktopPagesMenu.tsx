"use client";
import { PageLink } from "../UniversalTypes/links";
import { CommonThemeProps, getSpaces } from "@czi-sds/components";
import { Box, ListItem, List, styled } from "@mui/material";
import { css } from "@emotion/react";
import { Button } from "@czi-sds/components";

interface DesktopPagesMenuProps extends CommonThemeProps {
  pages: Array<PageLink>;
  pagesComponent?: any; // TODO: Find type of mui button component prop
}

interface DesktopPagesMenuStyleProps extends CommonThemeProps {}

const StyledBox = styled(Box)<DesktopPagesMenuStyleProps>((props) => {
  const spaces = getSpaces(props);

  return css`
    margin: 0 ${spaces?.xl}px;
  `;
});

const StyledList = styled(List)<DesktopPagesMenuStyleProps>(() => {
  return css`
    display: flex;
    flex-direction: row;
  `;
});

const StyledListItem = styled(ListItem)<DesktopPagesMenuStyleProps>(() => {
  return css`
    flex-basis: content;
  `;
});

const StyledLink = styled(Button)<DesktopPagesMenuStyleProps>((props) => {
  const spaces = getSpaces(props);

  return css`
    margin: 0 ${spaces?.l}px;
    color: inherit;
  `;
});

export const DesktopPagesMenu = ({
  pages,
  pagesComponent,
}: DesktopPagesMenuProps) => {
  return (
    <StyledBox>
      <StyledList>
        {pages.map((page, i) => (
          <StyledListItem disableGutters key={i}>
            <StyledLink
              component={
                // If we are using newTab, use "a" straight away as client routers don't support new tab
                // If externalLink is true, use "a" as well
                // Otherwise, use the pagesComponent for a regular client side navigation
                page.newTab ? "a" : page.externalLink ? "a" : pagesComponent
              }
              sdsStyle="minimal"
              sdsType="secondary"
              href={page?.to}
              // @ts-ignore: We already know that if target is used, we are either external or using an <a> tag for new tab
              target={page.newTab ? "_blank" : undefined}
            >
              {page?.title}
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledBox>
  );
};
