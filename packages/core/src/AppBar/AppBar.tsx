import MaterialAppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";
import { styled } from "@mui/system";

const AppBarComponent = styled(MaterialAppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: "inherit",
  color: theme.palette.text.primary,
  boxShadow: "none",
  borderBottom: "1px solid",
  borderColor: theme.palette.line.main,
})) as typeof MaterialAppBar;

const minAppBarHeight = "50px";

const ToolbarComponent = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  minHeight: minAppBarHeight,
  [theme.breakpoints.up("sm")]: {
    minHeight: minAppBarHeight,
  },
  [theme.breakpoints.up("xs")]: {
    minHeight: minAppBarHeight,
  },
}));

export const AppBar = (props: AppBarProps) => {
  return (
    <AppBarComponent {...props}>
      <ToolbarComponent>{props.children}</ToolbarComponent>
    </AppBarComponent>
  );
};