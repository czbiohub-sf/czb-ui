import React from "react";
import { Box } from "@mui/material";

interface HUDProps {
  children: React.ReactNode;
}

export default function HUD({ children }: HUDProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 4,
        color: "white",
        zIndex: 2, // Overlay on top of deck.gl
      }}
    >
      {children}
    </Box>
  );
}
