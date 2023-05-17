import React from "react";
import Image from "./Image";
import HUD from "./HUD";

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
  return (
    <>
      {hudComponent && <HUD>{hudComponent}</HUD>}
      <Image imageUrl={imageUrl} imageDimensions={{ width, height }} />
    </>
  );
};
