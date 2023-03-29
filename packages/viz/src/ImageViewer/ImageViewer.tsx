import React from "react";
import Image from "./Image";

export interface ImageViewerProps {
  imageUrl: string;
  width: number;
  height: number;
}

export const ImageViewer = ({ imageUrl, width, height }: ImageViewerProps) => {
  return <Image imageUrl={imageUrl} imageDimensions={{ width, height }} />;
};
