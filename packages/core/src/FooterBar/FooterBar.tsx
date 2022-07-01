import MaterialAppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

const AppBarComponent = styled(MaterialAppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  boxShadow: "none",
})) as typeof MaterialAppBar;

const minAppBarHeight = "100px";

const ToolbarComponent = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  minHeight: minAppBarHeight,
  [theme.breakpoints.up("sm")]: {
    minHeight: minAppBarHeight,
  },
  [theme.breakpoints.up("xs")]: {
    minHeight: minAppBarHeight,
  },
}));

export const FooterBar = (props: AppBarProps) => {
  return (
    <AppBarComponent {...props}>
      <ToolbarComponent sx={{ alignItems: "flex-start", padding: "10px" }}>
        {props.children}
      </ToolbarComponent>
    </AppBarComponent>
  );
};
