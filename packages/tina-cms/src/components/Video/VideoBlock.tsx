import React, { useState } from "react";
import Container from "@mui/material/Container";
import type { VideoProps } from "../../templates/Video/Video";

// Temp fix for broken types(?) in react-player
// https://github.com/cookpete/react-player/issues/1436#issuecomment-1098551225
import { default as _ReactPlayer } from "react-player";
import { ReactPlayerProps } from "react-player/types/lib";
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

interface VideoBlockProps {
  block: VideoProps;
}

export const VideoBlock = ({ block }: VideoBlockProps) => {
  const [error, setError] = useState("");

  return (
    <Container sx={{ my: 5 }}>
      {error && (
        <p>
          <b>{error}</b>
        </p>
      )}
      <ReactPlayer
        url={block.url ?? "https://www.youtube.com/watch?v=fl5oo7ZQ8LQ"}
        onError={(e) => setError("Error loading video.")}
        onReady={() => setError("")}
        controls={!block.hideControls}
      />
    </Container>
  );
};
