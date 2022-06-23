import MaterialButton, { ButtonProps } from "@mui/material/Button";

export const Button = (props: ButtonProps) => {
  return <MaterialButton {...props}>{props.children}</MaterialButton>;
};
