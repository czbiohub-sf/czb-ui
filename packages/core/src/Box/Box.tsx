import MaterialBox, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/system";

export const Box = styled(MaterialBox)<BoxProps>(
  () => ({})
) as typeof MaterialBox;
