"use client";
import { useMediaQuery } from "@mui/material";
import { Settings } from "@mui/icons-material";
import MobileDrawer from "./MobileDrawer";
import { DesktopDrawer } from "./DesktopDrawer";

export type FilterViewProps = {
  drawerComponent: React.ReactNode;
  contentComponent: React.ReactNode;
  desktopDrawerWidth?: number;
  mobileFabAriaLabel?: string;
  mobileFabIcon?: React.ReactNode;
};

export const FilterView = ({
  drawerComponent,
  contentComponent,
  desktopDrawerWidth = 240,
  mobileFabAriaLabel = "Options",
  mobileFabIcon = <Settings />,
}: FilterViewProps) => {
  const onMobile = useMediaQuery("(max-width:600px)");

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
