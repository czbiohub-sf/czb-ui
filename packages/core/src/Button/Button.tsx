import MaterialButton, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/system";

export const Button = styled(MaterialButton)<ButtonProps>(
  () => ({})
) as typeof MaterialButton;
