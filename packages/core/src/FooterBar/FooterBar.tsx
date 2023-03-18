import MaterialAppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

const AppBarComponent = styled(MaterialAppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  color: "white",
  boxShadow: "none",
})) as typeof MaterialAppBar;

const ToolbarComponent = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
  },
})) as typeof Toolbar;

// TODO: Make footer component prop/option for this AppBar component
export const FooterBar = (props: AppBarProps) => {
  return (
    <AppBarComponent {...props}>
      <ToolbarComponent
        sx={{
          alignItems: "flex-start",
          padding: "30px",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "40px", md: "80px" },
        }}
        component="footer"
      >
        {props.children}
      </ToolbarComponent>
    </AppBarComponent>
  );
};
