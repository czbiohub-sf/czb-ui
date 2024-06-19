"use client";
import MaterialAppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

const AppBarComponent = styled(MaterialAppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow: "none",
  borderBottom: "1px solid",
  borderColor: theme.palette.divider,
  zIndex: 9999,
})) as typeof MaterialAppBar;

interface ToolbarComponentProps extends ToolbarProps {
  minHeight?: string;
}

const ToolbarComponent = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== "minHeight",
})<ToolbarComponentProps>(({ minHeight, theme }) => ({
  minHeight: minHeight,
  [theme.breakpoints.down("sm")]: {
    minHeight: minHeight,
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: minHeight,
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
})) as typeof Toolbar;

interface CzbuiAppBarProps {
  children?: React.ReactNode;
  appBarProps?: AppBarProps;
  minHeight?: string;
}

// TODO: Make nav component prop/option for this AppBar component
export const AppBar = ({
  children,
  appBarProps,
  minHeight = "80px",
}: CzbuiAppBarProps) => {
  return (
    <AppBarComponent {...appBarProps}>
      {/* @ts-ignore, ToolbarComponent has minHeight prop */}
      <ToolbarComponent component="nav" minHeight={minHeight}>
        {children}
      </ToolbarComponent>
    </AppBarComponent>
  );
};
