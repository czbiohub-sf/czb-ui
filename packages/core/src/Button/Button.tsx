import MaterialButton, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const Button = styled(MaterialButton)<ButtonProps>(
  () => ({})
) as typeof MaterialButton;
