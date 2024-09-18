"use client";
import { SxProps, Theme, useMediaQuery, useTheme } from "@mui/material";
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
  mobileDrawerHeightPx?: number;
  desktopContainerSxProps?: SxProps<Theme>;
  mobileContentContainerSxProps?: SxProps<Theme>;
  desktopContentContainerSxProps?: SxProps<Theme>;
};

export const FilterView = ({
  drawerComponent,
  contentComponent,
  desktopDrawerWidth = 240,
  mobileFabAriaLabel = "Options",
  mobileFabIcon = <Settings />,
  muiBreakpointForMobile = "md",
  mobileDrawerHeightPx = 300,
  desktopContainerSxProps,
  mobileContentContainerSxProps,
  desktopContentContainerSxProps,
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
        mobileDrawerHeightPx={mobileDrawerHeightPx}
        mobileContentContainerSxProps={mobileContentContainerSxProps}
      />
    );
  }

  return (
    <DesktopDrawer
      drawerComponent={drawerComponent}
      contentComponent={contentComponent}
      desktopDrawerWidth={desktopDrawerWidth}
      desktopContainerSxProps={desktopContainerSxProps}
      desktopContentContainerSxProps={desktopContentContainerSxProps}
    />
  );
};
