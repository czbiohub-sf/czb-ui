"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import { Settings } from "@mui/icons-material";
import MobileDrawer from "./MobileDrawer";
import { DesktopDrawer } from "./DesktopDrawer";

export type FilterViewProps = {
  drawerComponent: React.ReactNode;
  contentComponent: React.ReactNode;
  desktopDrawerWidth?: number;
  mobileFabAriaLabel?: string;
  mobileFabIcon?: React.ReactNode;
  muiBreakpointForMobile?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const FilterView = ({
  drawerComponent,
  contentComponent,
  desktopDrawerWidth = 240,
  mobileFabAriaLabel = "Options",
  mobileFabIcon = <Settings />,
  muiBreakpointForMobile = "md",
}: FilterViewProps) => {
  const theme = useTheme();
  const onMobile = useMediaQuery(
    theme.breakpoints.down(muiBreakpointForMobile)
  );

  if (onMobile) {
    return (
      <MobileDrawer
        drawerComponent={drawerComponent}
        contentComponent={contentComponent}
        mobileFabAriaLabel={mobileFabAriaLabel}
        mobileFabIcon={mobileFabIcon}
      />
    );
  }

  return (
    <DesktopDrawer
      drawerComponent={drawerComponent}
      contentComponent={contentComponent}
      desktopDrawerWidth={desktopDrawerWidth}
    />
  );
};
