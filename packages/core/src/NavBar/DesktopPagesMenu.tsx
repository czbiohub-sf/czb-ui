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
            {!page.externalLink ? (
              <StyledLink
                component={page?.to ? pagesComponent : undefined}
                sdsStyle="minimal"
                sdsType="secondary"
                // @ts-expect-error
                to={page?.to}
              >
                {page?.title}
              </StyledLink>
            ) : (
              <StyledLink href={page?.to}>{page?.title}</StyledLink>
            )}
          </StyledListItem>
        ))}
      </StyledList>
    </StyledBox>
  );
};
