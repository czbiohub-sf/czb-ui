import React from "react";
import { LoadingIndicator } from "czifui";
import { Box } from "@mui/material";

const LoadingComponent = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        zIndex: 2,
        padding: 6,
      }}
    >
      <LoadingIndicator sdsStyle="tag" />
    </Box>
  );
};

export default LoadingComponent;
