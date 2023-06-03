import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";

interface Image {
  __typename: "PageBlocksImageGalleryImages";
  image: string;
  imageAlt: string;
}

// TODO: Is there a way to get types from TinaCMS?
interface ImageGalleryBlockProps {
  __typename: string;
  images: Array<Image>;
}

interface ImageGalleryProps {
  block: ImageGalleryBlockProps;
}

export const ImageGalleryBlock = ({ block }: ImageGalleryProps) => {
  return (
    <Container>
      <Grid
        container
        spacing={7}
        columns={{ xs: 2, sm: 8, md: block.images?.length > 2 ? 12 : 8 }}
        sx={{ my: 6 }}
      >
        {block.images.map((image, i) => (
          <Box sx={{ position: "relative", height: "300px", width: "50%" }}>
            <Image
              src={image.image}
              alt={image.imageAlt}
              layout="fill"
              objectFit="contain"
              sizes="(max-width: 768px) 100vw, 50w"
            />
          </Box>
        ))}
      </Grid>
    </Container>
  );
};
