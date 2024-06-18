import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

// I had to sort of override justifyContent here,
// I know the Box component already has it, but
// the prop wouldn't override the things in styled().
// It's a super weird implementation but it works...
interface BoxCenterProps extends BoxProps {
  children: React.ReactNode;
  justifyContent?:
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right";
}
/**
 * @deprecated This component will be removed.
 */
export const Center = (props: BoxCenterProps) => {
  const CenterComponent = styled(Box)<BoxProps>(() => ({
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
    justifyContent: props.justifyContent ?? "center",
  })) as typeof Box;

  return <CenterComponent>{props.children}</CenterComponent>;
};
