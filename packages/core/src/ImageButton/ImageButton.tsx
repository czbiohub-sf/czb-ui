import { Card } from "../Card/Card";
import { Box, styled, Typography } from "@mui/material";
import { Link } from "czifui";

interface ImageButtonProps {
  image?: React.ReactNode;
}

const ImageButtonCard = styled(Card)<React.ComponentProps<typeof Card>>(
  ({ theme }) => ({
    maxWidth: "400px",
    [theme.breakpoints.down("sm")]: {
      height: "400px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "700px",
    },
  })
);

export const ImageButton = ({ image }: ImageButtonProps) => {
  return (
    <ImageButtonCard>
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
    </ImageButtonCard>
  );
};
