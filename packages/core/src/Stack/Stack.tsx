import MaterialStack, { StackProps } from "@mui/material/Stack";
import { styled } from "@mui/system";

export const Stack = styled(MaterialStack)<StackProps>(
  () => ({})
) as typeof MaterialStack;
