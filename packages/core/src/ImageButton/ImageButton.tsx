import { Card } from "../Card/Card";
import { Box, styled, Typography } from "@mui/material";
import { Link } from "czifui";
import { PageLink } from "../UniversalTypes/links";

interface ImageButtonProps {
  title?: string;
  subtitle?: string;
  page?: PageLink;
  pagesComponent?: any; // TODO: Find type of mui link component prop
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

export const ImageButton = ({
  title,
  subtitle,
  page,
  pagesComponent,
  image,
}: ImageButtonProps) => {
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
          {title}
        </Typography>
        <Typography>{subtitle}</Typography>
        <Link
          sx={{ marginTop: "auto" }}
          component={pagesComponent}
          to={page?.to}
          fontWeight="bold"
        >
          {page?.title}
        </Link>
      </Box>
    </ImageButtonCard>
  );
};
