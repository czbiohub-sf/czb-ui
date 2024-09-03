"use client";
import { Box, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  CommonThemeProps,
  getSpaces,
  fontCapsXxs,
  getTypography,
} from "@czi-sds/components";
import { css } from "@emotion/react";

interface HeadingSeparatorProps extends CommonThemeProps {
  title?: string;
  id?: string;
  dividerOpacity?: number;
  _todoTempFixForFooterPagesGroup?: boolean;
}

interface HeadingSeparatorStyleProps extends CommonThemeProps {}

const StyledContainer = styled(Box)<HeadingSeparatorStyleProps>((props) => {
  const spaces = getSpaces(props);

  return css`
    width: 100%;
    margin-bottom: ${spaces?.m}px;
  `;
});

const HeadingTitle = styled(Box)<HeadingSeparatorStyleProps>((props) => {
  const spaces = getSpaces(props);
  const typography = getTypography(props);

  return css`
    ${fontCapsXxs(props)}
    font-size: ${typography?.styles.body.regular.s.fontSize}px;
    margin-bottom: ${spaces?.m}px;
  `;
});

export const HeadingSeparator = ({
  title,
  id,
  dividerOpacity = 1.0,
  _todoTempFixForFooterPagesGroup,
}: HeadingSeparatorProps) => {
  return (
    <StyledContainer id={id}>
      <HeadingTitle>{title}</HeadingTitle>
      {!_todoTempFixForFooterPagesGroup && (
        <Divider sx={{ opacity: dividerOpacity }} />
      )}
      {_todoTempFixForFooterPagesGroup && (
        <Divider sx={{ mr: 6, borderColor: "gray", opacity: 0.5 }} />
      )}
    </StyledContainer>
  );
};
