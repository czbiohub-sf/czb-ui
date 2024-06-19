"use client";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

interface NavBarAndFooterPlacerProps {
  children: React.ReactNode;
  topBar?: React.ReactNode;
  bottomBar?: React.ReactNode;
  leftSidebar?: React.ReactNode;
  rightSidebar?: React.ReactNode;
}

// https://1linelayouts.glitch.me/
// Classic Holy Grail Layout
const Ex5Parent = styled(Box)`
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
  height: 100vh;
`;

// Make sure component has "header" tag
const Ex5Header = styled(Box)`
  grid-column: 1 / 4;
`;

const Ex5LeftSide = styled(Box)`
  grid-column: 1 / 2;
`;

// Make sure component has "main" tag
const Ex5Main = styled(Box)`
  grid-column: 2 / 3;
`;

const Ex5RightSide = styled(Box)`
  grid-column: 3 / 4;
`;

// Make sure component has "footer" tag
const Ex5Footer = styled(Box)`
  grid-column: 1 / 4;
`;

export const NavBarAndFooterPlacer = ({
  children,
  topBar,
  bottomBar,
  leftSidebar,
  rightSidebar,
}: NavBarAndFooterPlacerProps) => {
  return (
    <Ex5Parent>
      <Ex5Header>{topBar}</Ex5Header>
      <Ex5LeftSide>{leftSidebar}</Ex5LeftSide>
      <Ex5Main>{children}</Ex5Main>
      <Ex5RightSide>{rightSidebar}</Ex5RightSide>
      <Ex5Footer>{bottomBar}</Ex5Footer>
    </Ex5Parent>
  );
};
