import MaterialInputBase, { InputBaseProps } from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

export const Input = styled(MaterialInputBase)<InputBaseProps>(
  () => ({})
) as typeof MaterialInputBase;
