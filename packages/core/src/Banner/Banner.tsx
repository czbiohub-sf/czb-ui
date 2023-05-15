import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { PageLink } from "../UniversalTypes/links";

interface BannerProps {
  headline?: string;
  page?: PageLink;
  pagesComponent?: any; // TODO: Find type of mui link component prop
  image?: React.ReactNode;
  type?: "background" | "nobackground";
}

const maxHeight = "500px";

export const Banner = ({
  headline,
  page,
  pagesComponent,
  image,
  type = "nobackground",
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
            alignItems: { xs: "top", md: "center" },
            height: "100%",
            paddingTop: { xs: 7, md: 0 },
            color: "white",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              lineHeight: "120%",
              maxWidth: { xs: "100%", md: "60%" },
            }}
            color={type === "background" ? "white" : "black"}
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
          width: "100%",
          backgroundImage:
            type === "background"
              ? {
                  xs: "linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,1))",
                  md: "linear-gradient(270deg, rgba(0,0,0,0), rgba(0,0,0,1))",
                }
              : type === "nobackground"
              ? "linear-gradient(0deg, rgba(255,255,255,1), rgba(255,255,255,1))"
              : "none",
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
        {type !== "nobackground" && (
          <Box sx={{ height: maxHeight }}>{image}</Box>
        )}
      </Box>
    </Box>
  );
};
