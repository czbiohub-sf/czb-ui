import MaterialAppBar, { AppBarProps } from "@mui/material/AppBar";

export const AppBar = (props: AppBarProps) => {
  return (
    <MaterialAppBar
      sx={{ backgroundColor: "inherit", color: "text.primary" }}
      {...props}
    >
      hi
    </MaterialAppBar>
  );
};
