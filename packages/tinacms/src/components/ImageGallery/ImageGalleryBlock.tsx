import { Box, Container, Grid, Typography } from "@mui/material";
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
  const images = block.images;

  return (
    <Container>
      <Grid
        container
        spacing={7}
        columns={{ xs: 2, sm: 8, md: images?.length > 2 ? 12 : 8 }}
        sx={{ my: 6 }}
      >
        {images &&
          images.map((imageObj, i) => (
            <Grid item sx={{ height: "300px", width: "50%" }}>
              {imageObj.image && (
                <Box
                  sx={{ position: "relative", height: "100%", width: "100%" }}
                >
                  <Image
                    src={imageObj.image}
                    alt={imageObj.imageAlt}
                    layout="fill"
                    objectFit="contain"
                    sizes="(max-width: 768px) 100vw, 50w"
                  />
                </Box>
              )}
              {!imageObj.image && (
                <Box
                  sx={{
                    background: "grey",
                    height: "100%",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h1" component="div">
                    Please put an image
                  </Typography>
                </Box>
              )}
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
