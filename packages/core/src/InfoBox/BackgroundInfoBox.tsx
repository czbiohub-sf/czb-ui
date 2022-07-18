import { Box, Typography } from "@mui/material";
import { Link } from "czifui";
import { InfoBoxProps } from "./InfoBox";

export default function BackgroundInfoBox({
  image,
  imageOnRight,
}: InfoBoxProps) {
  return (
    <Box
      sx={{
        bgcolor: "#f9f9f9",
        height: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: imageOnRight ? "row" : "row-reverse",
        gap: "50px",
        position: "relative",
      }}
    >
      <Box
        flex={2}
        sx={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography variant="h2" component="div">
          The Tabula Sapiens: A multiple-organ, single-cell transcriptomic atlas
          of humans
        </Typography>
        <Typography>Background</Typography>
        <Link sx={{ marginTop: "1rem" }}>Explore Tools</Link>
      </Box>
      <Box
        sx={{
          background: `linear-gradient(${
            imageOnRight ? "-90" : "90"
          }deg, rgba(0,0,0,0) 0%, #000 100%)`,
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {image}
      </Box>
    </Box>
  );
}
