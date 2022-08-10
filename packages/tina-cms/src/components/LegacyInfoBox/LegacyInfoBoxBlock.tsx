import { useState } from "react";
import { LegacyInfoBox } from "@czb-ui/core";
import { Container, Box } from "@mui/material";
import Image from "next/image";
import { NextLinkComposed } from "../../utils/NextLinkComposed";

interface InfoBoxBlockProps {
  title?: string;
  subtitle?: string;
  linkText?: string;
  linkTo?: string;
  outsideLink?: boolean;
  image?: any;
  hoverImage?: any;
}

// TODO: Take interface from other info box component block
interface InfoBoxProps {
  block: InfoBoxBlockProps;
  disableContainerGutters?: boolean;
  disableYMargins?: boolean;
  small?: boolean;
}

interface ImageComponentProps {
  src: string;
  small?: boolean;
  zIndex?: number;
}

const ImageComponent = ({ src, small }: ImageComponentProps) => {
  if (!src) {
    return <div></div>;
  }

  return (
    <Image
      objectFit="contain"
      // Subtract 1 or 2 because of the
      // border around the image
      width={small ? 200 : 250}
      height={small ? 105 : 159}
      src={src}
    />
  );
};

export const LegacyInfoBoxBlock = ({
  block,
  disableContainerGutters,
  disableYMargins,
  small,
}: InfoBoxProps) => {
  const [hoveringOverImg, setHoveringOverImg] = useState(false);

  let page;

  if (block.linkText && block.linkTo) {
    page = { title: block.linkText, to: block.linkTo };
  }

  return (
    <Container
      sx={{
        my: disableYMargins ? undefined : 5,
        mb: small ? undefined : "30px",
      }}
      disableGutters={disableContainerGutters}
    >
      <LegacyInfoBox
        title={block.title}
        subtitle={block.subtitle}
        page={page}
        small={small}
        image={
          <span
            onMouseEnter={() => setHoveringOverImg(true)}
            onMouseLeave={() => setHoveringOverImg(false)}
            // We need these styles here because the span doesn't
            // automatically fill the box
            style={{ width: "100%", height: "100%", display: "flex" }}
          >
            {!block.hoverImage && (
              <ImageComponent src={block.image} small={small} />
            )}
            {block.hoverImage && (
              <Box position="relative">
                <Box visibility={hoveringOverImg ? "hidden" : "visible"}>
                  <ImageComponent src={block.image} small={small} />
                </Box>
                <Box
                  position="absolute"
                  top={0}
                  visibility={hoveringOverImg ? "visible" : "hidden"}
                >
                  <ImageComponent src={block.hoverImage} small={small} />
                </Box>
              </Box>
            )}
          </span>
        }
        pagesComponent={block.outsideLink ? undefined : NextLinkComposed}
      />
    </Container>
  );
};
