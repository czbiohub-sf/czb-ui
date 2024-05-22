import React, { useRef, useEffect, useState } from "react";
import { ThreeDimScatterPlot } from "./three-dim-scatterplot";

export const ThreeDUmap = () => {
  const scatterplotRef = useRef<ThreeDimScatterPlot | null>(null);
  const scatterplotContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // https://react.dev/reference/react/useRef#avoiding-recreating-the-ref-contents
    if (
      scatterplotRef.current === null &&
      scatterplotContainerRef.current !== null
    ) {
      scatterplotRef.current = new ThreeDimScatterPlot(
        scatterplotContainerRef.current!
      );

      scatterplotRef.current.debug = true;

      scatterplotRef.current.loadZarr(
        "http://localhost:3001/export_3d_velo_nmp",
        "coords.zarr",
        "first_timepoint",
        "positions",
        "First Timepoint"
      );

      scatterplotRef.current.loadZarr(
        "http://localhost:3001/export_3d_velo_nmp",
        "attribute_celltype.zarr",
        "cell_types",
        "colors",
        "Cell types"
      );
    }
  }, [scatterplotContainerRef]);

  return (
    <>
      <div
        ref={scatterplotContainerRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
        }}
      />
    </>
  );
};
