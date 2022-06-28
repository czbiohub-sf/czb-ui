import MaterialContainer, { ContainerProps } from "@mui/material/Container";
import { styled } from "@mui/system";

export const Container = styled(MaterialContainer)<ContainerProps>(
  () => ({})
) as typeof MaterialContainer;
