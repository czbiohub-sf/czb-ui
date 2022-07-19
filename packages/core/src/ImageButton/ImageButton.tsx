import { Card } from "../Card/Card";
import { Box, Typography } from "@mui/material";
import { Link } from "czifui";

interface ImageButtonProps {
  image?: React.ReactNode;
}

export const ImageButton = ({ image }: ImageButtonProps) => {
  return (
    <Card sx={{ height: "700px", width: "400px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
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
    </Card>
  );
};
