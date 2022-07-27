import MaterialAppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

const AppBarComponent = styled(MaterialAppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: "inherit",
  color: theme.palette.text.primary,
  boxShadow: "none",
  borderBottom: "1px solid",
  borderColor: theme.palette.grey[200],
})) as typeof MaterialAppBar;

const minAppBarHeight = "50px";

const ToolbarComponent = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  minHeight: minAppBarHeight,
  [theme.breakpoints.down("sm")]: {
    minHeight: minAppBarHeight,
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: minAppBarHeight,
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
  },
}));

export const AppBar = (props: AppBarProps) => {
  return (
    <AppBarComponent {...props}>
      <ToolbarComponent>{props.children}</ToolbarComponent>
    </AppBarComponent>
  );
};
