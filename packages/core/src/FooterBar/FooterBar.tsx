import MaterialAppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

const AppBarComponent = styled(MaterialAppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  boxShadow: "none",
  borderTop: "1px solid",
  borderColor: theme.palette.grey[200],
})) as typeof MaterialAppBar;

const minAppBarHeight = "100px";

const ToolbarComponent = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  minHeight: minAppBarHeight,
  [theme.breakpoints.up("sm")]: {
    minHeight: minAppBarHeight,
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
  },
  [theme.breakpoints.up("xs")]: {
    minHeight: minAppBarHeight,
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
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
