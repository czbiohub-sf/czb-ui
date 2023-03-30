import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { PageLink } from "../UniversalTypes/links";

interface BannerProps {
  headline?: string;
  page?: PageLink;
  pagesComponent?: any; // TODO: Find type of mui link component prop
  image?: React.ReactNode;
  type?: "background";
}

const maxHeight = "500px";

export const Banner = ({
  headline,
  page,
  pagesComponent,
  image,
  type,
}: BannerProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: maxHeight,
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <Container sx={{ position: "relative", zIndex: 2, height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            height: "100%",
            padding: 8,
            color: "white",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "2.5rem", lineHeight: "120%", maxWidth: "60%" }}
          >
            {headline}
          </Typography>
        </Box>
      </Container>
      {/* Left black to transparent gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "90%",
          backgroundImage:
            "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1))",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        <Box sx={{ height: maxHeight }}>{image}</Box>
      </Box>
    </Box>
  );
};
