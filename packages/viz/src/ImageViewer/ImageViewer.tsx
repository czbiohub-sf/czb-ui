import React from "react";
import Image from "./Image";

export interface ImageViewerProps {
  imageUrl: string;
}

export const ImageViewer = ({ imageUrl }: ImageViewerProps) => {
  return <Image imageUrl={imageUrl} />;
};
