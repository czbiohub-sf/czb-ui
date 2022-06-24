import MaterialAppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

export const AppBar = (props: AppBarProps) => {
  return (
    <MaterialAppBar
      sx={{
        backgroundColor: "inherit",
        color: "text.primary",
        height: "40px",
        boxShadow: "none",
        borderBottom: "1px solid",
        borderColor: "line.main",
      }}
      {...props}
    >
      <Toolbar>{props.children}</Toolbar>
    </MaterialAppBar>
  );
};
