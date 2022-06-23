import MaterialButton, { ButtonProps } from "@mui/material/Button";

export const Button = (props: ButtonProps) => {
  return (
    <MaterialButton variant="contained" {...props}>
      {props.children}
    </MaterialButton>
  );
};
