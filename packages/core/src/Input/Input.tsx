import MaterialInputBase, { InputBaseProps } from "@mui/material/InputBase";
import { styled } from "@mui/system";

export const Input = styled(MaterialInputBase)<InputBaseProps>(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.line.main,
  padding: "10px",
})) as typeof MaterialInputBase;
