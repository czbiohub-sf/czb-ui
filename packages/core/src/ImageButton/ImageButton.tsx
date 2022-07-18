import { Box, Paper, Typography } from "@mui/material";
import { Link } from "czifui";

interface ImageButtonProps {
  image?: React.ReactNode;
}

export const ImageButton = ({ image }: ImageButtonProps) => {
  // TODO: Put grey colors in palette
  return (
    <Paper
      sx={{
        height: "700px",
        width: "400px",
        position: "relative",
        border: "1px solid",
        borderColor: "#f1f0f0",
        padding: "1rem",
      }}
      elevation={0}
      square
    >
      <Box
        sx={{
          zIndex: 1,
          bgcolor: "#f9f9f9",
          height: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            top: 0,
            width: "100%",
            height: "50%",
          }}
          mb={4}
        >
          {image}
        </Box>
        <Typography variant="h2" component="div">
          Tools
        </Typography>
        <Typography>
          Utilise informatics tools developed by the CZ Biohub.
        </Typography>
        <Link sx={{ marginTop: "auto" }}>Explore Tools</Link>
      </Box>
    </Paper>
  );
};
