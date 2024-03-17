import { Box } from "@mui/material";
import { OpenInFull, CloseFullscreen } from "@mui/icons-material";
import { Button } from "czifui";
import React, { useRef, useState, useEffect } from "react";

export interface FullScreenIFrameProps
  extends Omit<
    React.DetailedHTMLProps<
      React.IframeHTMLAttributes<HTMLIFrameElement>,
      HTMLIFrameElement
    >,
    "width" | "height" | "style"
  > {
  fullScreenButton?: boolean;
  fullScreenButtonLocation?:
    | "topleft"
    | "topright"
    | "bottomleft"
    | "bottomright";
}

export const FullScreenIFrame = (props: FullScreenIFrameProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (boxRef.current) {
      if (!isFullScreen) {
        if (boxRef.current.requestFullscreen) {
          boxRef.current.requestFullscreen();
        } else if ((boxRef.current as any).mozRequestFullScreen) {
          /* Firefox */
          (boxRef.current as any).mozRequestFullScreen();
        } else if ((boxRef.current as any).webkitRequestFullscreen) {
          /* Chrome, Safari and Opera */
          (boxRef.current as any).webkitRequestFullscreen();
        } else if ((boxRef.current as any).msRequestFullscreen) {
          /* IE/Edge */
          (boxRef.current as any).msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
          /* Firefox */
          (document as any).mozCancelFullScreen();
        } else if ((document as any).webkitExitFullscreen) {
          /* Chrome, Safari and Opera */
          (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          /* IE/Edge */
          (document as any).msExitFullscreen();
        }
      }
    }
  };

  useEffect(() => {
    const changeHandler = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", changeHandler);
    return () => {
      document.removeEventListener("fullscreenchange", changeHandler);
    };
  }, []);

  return (
    <Box ref={boxRef} width="100%" height="100%">
      <Box sx={{ position: "absolute", top: 20, right: 20 }}>
        <Button
          sdsStyle="square"
          sdsType={isFullScreen ? "secondary" : "primary"}
          startIcon={isFullScreen ? <CloseFullscreen /> : <OpenInFull />}
          onClick={handleFullScreen}
        >
          {isFullScreen ? "Exit Full Screen" : "Full Screen"}
        </Button>
      </Box>
      <iframe
        {...props}
        style={{
          border: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
      />
    </Box>
  );
};
