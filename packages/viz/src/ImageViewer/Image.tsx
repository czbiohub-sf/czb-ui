import React, { useState, useEffect } from "react";
import DeckGL from "@deck.gl/react/typed";
import { OrthographicView } from "@deck.gl/core/typed";
import { BitmapLayer } from "@deck.gl/layers/typed";

interface ImageProps {
  imageUrl: string;
}

export default function Image({ imageUrl }: ImageProps) {
  const layer = new BitmapLayer({
    id: "bitmap-layer",
    bounds: [0, 100, 100, 0],
    image: imageUrl,
  });

  return (
    <DeckGL
      views={[new OrthographicView({ id: "ortho" })]}
      controller={true}
      initialViewState={{
        target: [50, 50, 0],
      }}
      layers={[layer]}
    />
  );
}
