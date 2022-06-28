import MaterialGrid, { GridProps } from "@mui/material/Grid";
import { styled } from "@mui/system";

export const Grid = styled(MaterialGrid)<GridProps>(
  () => ({})
) as typeof MaterialGrid;
