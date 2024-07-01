"use client";
import { useMediaQuery } from "@mui/material";
import MobileDrawer from "./MobileDrawer";
import { DesktopDrawer } from "./DesktopDrawer";

export type FilterViewProps = {
  drawerComponent: React.ReactNode;
  contentComponent: React.ReactNode;
  desktopDrawerWidth?: number;
  mobileDrawerPullerText?: string;
};

export const FilterView = ({
  drawerComponent,
  contentComponent,
  desktopDrawerWidth = 240,
  mobileDrawerPullerText = "Options",
}: FilterViewProps) => {
  const onMobile = useMediaQuery("(max-width:600px)");

  if (onMobile) {
    return (
      <MobileDrawer
        drawerComponent={drawerComponent}
        contentComponent={contentComponent}
        mobileDrawerPullerText={mobileDrawerPullerText}
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
