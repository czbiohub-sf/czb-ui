import MaterialInputBase, { InputBaseProps } from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

export const Input = styled(MaterialInputBase)<InputBaseProps>(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.line.main,
  padding: "5px",
})) as typeof MaterialInputBase;
