import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

interface CardProps extends BoxProps {
  disablePadding?: boolean;
}

const CardOuter = styled(Box, {
  shouldForwardProp: (prop) => prop !== "disablePadding",
})<BoxProps>(({ theme }) => ({
  // TODO: Put grey colors in palette
  border: `1px solid #f1f0f0`,
  padding: "1rem",
})) as typeof Box;

const CardInner = styled(Box, {
  shouldForwardProp: (prop) => prop !== "disablePadding",
})<CardProps>(({ theme, disablePadding }) => ({
  // TODO: Put grey colors in palette
  background: "#f9f9f9",
  height: "100%",
  padding: disablePadding ? "0px" : "20px",
})) as React.FunctionComponent<CardProps>;

export const Card = (props: CardProps) => {
  return (
    <CardOuter {...props}>
      <CardInner disablePadding={props.disablePadding}>
        {props.children}
      </CardInner>
    </CardOuter>
  );
};
