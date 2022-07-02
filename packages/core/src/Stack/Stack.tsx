import MaterialStack, { StackProps } from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export const Stack = styled(MaterialStack)<StackProps>(
  () => ({})
) as typeof MaterialStack;
