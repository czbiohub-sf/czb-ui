import React, { useState, useEffect } from "react";
import DeckGL from "@deck.gl/react/typed";
import { OrthographicView } from "@deck.gl/core/typed";
import { BitmapLayer } from "@deck.gl/layers/typed";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

interface imageDimensions {
  width: number;
  height: number;
}

interface ImageProps {
  imageUrl: string;
  imageDimensions: imageDimensions;
}

export default function Image({ imageUrl, imageDimensions }: ImageProps) {
  const [viewportDimensions, setViewportDimensions] = useState({
    width: 1000,
    height: 1000,
  });
  const [loading, setLoading] = useState(true);

  // Get the viewport width on mount
  // so we can adjust the starting zoom accordingly
  useEffect(() => {
    // Due to server-side rendering, window may not be defined.
    // If window isn't defined somehow in the client, the default value of 1000 will be used
    // (as set in the useState() call above)
    if (window) {
      setViewportDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  // If new imageUrl is passed in, reset the loading state
  useEffect(() => {
    setLoading(true);
  }, [imageUrl]);

  const layer = new BitmapLayer({
    id: "bitmap-layer",
    bounds: [0, imageDimensions.height, imageDimensions.width, 0],
    image: imageUrl,
    onDataLoad: () => {
      console.log("done");
      setLoading(false);
    },
  });

  // Based on the viewport and image width, determine a zoom percentage that will **fit** the image to the viewport.
  // Fit means that the image will be as large as possible without being cut-off.
  // "The zoom level of the viewport. zoom: 0 maps one unit distance to one pixel on screen,
  //  and increasing zoom by 1 scales the same object to twice as large."
  // https://deck.gl/docs/api-reference/core/orthographic-view#view-state
  const zoomLevelToFitWidth = Math.log2(
    viewportDimensions.width / imageDimensions.width
  );
  const zoomLevelToFitHeight = Math.log2(
    viewportDimensions.height / imageDimensions.height
  );
  const startingZoomLevel = Math.min(zoomLevelToFitWidth, zoomLevelToFitHeight);

  return (
    <>
      {loading && <LoadingComponent />}
      <DeckGL
        views={[new OrthographicView({ id: "ortho" })]}
        controller={true}
        initialViewState={{
          target: [imageDimensions.width / 2, imageDimensions.height / 2, 0], // Start at the center of the image
          zoom: startingZoomLevel,
        }}
        layers={[layer]}
      />
    </>
  );
}
