import MaterialAppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";
import { styled } from "@mui/system";

const AppBarComponent = styled(MaterialAppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: "inherit",
  color: theme.palette.text.primary,
  height: "40px",
  boxShadow: "none",
  borderBottom: "1px solid",
  borderColor: theme.palette.line.main,
})) as typeof MaterialAppBar;

const ToolbarComponent = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  minHeight: "40px",
  [theme.breakpoints.up("sm")]: {
    minHeight: "40px",
  },
  [theme.breakpoints.up("xs")]: {
    minHeight: "40px",
  },
}));

export const AppBar = (props: AppBarProps) => {
  return (
    <AppBarComponent {...props}>
      <ToolbarComponent>{props.children}</ToolbarComponent>
    </AppBarComponent>
  );
};
