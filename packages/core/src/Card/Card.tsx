import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const CardOuter = styled(Box)<BoxProps>(({ theme }) => ({
  // TODO: Put grey colors in palette
  border: `1px solid #f1f0f0`,
  padding: "1rem",
})) as typeof Box;

const CardInner = styled(Box)<BoxProps>(({ theme }) => ({
  // TODO: Put grey colors in palette
  background: "#f9f9f9",
  height: "100%",
  padding: "20px",
})) as typeof Box;

export const Card = (props: BoxProps) => {
  return (
    <CardOuter {...props}>
      <CardInner>{props.children}</CardInner>
    </CardOuter>
  );
};
