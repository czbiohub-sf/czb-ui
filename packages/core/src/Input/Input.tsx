import MaterialInputBase, { InputBaseProps } from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

export const Input = styled(MaterialInputBase, {
  shouldForwardProp: (prop) => prop !== "error",
})<InputBaseProps>(({ error, theme }) => ({
  border: "1px solid",
  borderColor: error ? theme.palette.error.main : theme.palette.line.main,
  padding: "5px",
})) as typeof MaterialInputBase;
