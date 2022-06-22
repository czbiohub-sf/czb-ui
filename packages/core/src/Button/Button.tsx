import MaterialButton, { ButtonProps } from "@mui/material/Button";

export const Button = (props: ButtonProps) => {
  return (
    <MaterialButton
      variant="contained"
      sx={{ textTransform: "none", ...props.sx }}
      {...props}
    >
      {props.children}
    </MaterialButton>
  );
};
