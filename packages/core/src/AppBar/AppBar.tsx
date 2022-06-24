import MaterialAppBar, { AppBarProps } from "@mui/material/AppBar";

export const AppBar = (props: AppBarProps) => {
  return (
    <MaterialAppBar
      sx={{
        backgroundColor: "inherit",
        color: "text.primary",
        height: "40px",
        padding: "5px",
        boxShadow: "none",
        borderBottom: "1px solid",
        borderColor: "line.main",
      }}
      {...props}
    >
      {props.children}
    </MaterialAppBar>
  );
};
