import React from "react";
import Image from "./Image";
import HUD from "./HUD";
import SwipeableEdgeDrawer from "../Drawer/Drawer";
import { useMediaQuery } from "@mui/material";

export interface ImageViewerProps {
  imageUrl: string;
  width: number;
  height: number;
  hudComponent?: React.ReactNode;
}

export const ImageViewer = ({
  imageUrl,
  width,
  height,
  hudComponent,
}: ImageViewerProps) => {
  const onMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {hudComponent && (
        <>
          {onMobile ? (
            <SwipeableEdgeDrawer>{hudComponent}</SwipeableEdgeDrawer>
          ) : (
            <HUD>{hudComponent}</HUD>
          )}
        </>
      )}
      <Image imageUrl={imageUrl} imageDimensions={{ width, height }} />
    </>
  );
};
