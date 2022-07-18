import { Box, Paper, Typography } from "@mui/material";
import { Link } from "czifui";

interface ImageButtonProps {
  image?: React.ReactNode;
}

export const InfoBox = ({ image }: ImageButtonProps) => {
  // TODO: Put grey colors in palette
  return (
    <Paper
      sx={{
        height: "300px",
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
          flexDirection: "row",
          gap: "50px",
        }}
      >
        <Box flex={3}>{image}</Box>
        <Box
          flex={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" component="div">
            The Tabula Sapiens: A multiple-organ, single-cell transcriptomic
            atlas of humans
          </Typography>
          <Typography>
            The Tabula Sapiens Consortium, Science 376, eabl4896 (2022).
          </Typography>
          <Link sx={{ marginTop: "1rem" }}>Explore Tools</Link>
        </Box>
      </Box>
    </Paper>
  );
};
