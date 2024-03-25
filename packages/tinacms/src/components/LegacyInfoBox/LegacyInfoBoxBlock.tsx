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
  newTab?: boolean;
  image?: any;
  imageAlt?: string;
  hoverImage?: any;
}

// TODO: Take interface from other info box component block
interface InfoBoxProps {
  block: InfoBoxBlockProps;
  disableContainerGutters?: boolean;
  disableYMargins?: boolean;
  smallVariants?: boolean;
}

interface ImageComponentProps {
  src: string;
  alt?: string;
  small?: boolean;
  zIndex?: number;
}

const ImageComponent = ({ src, alt, small }: ImageComponentProps) => {
  if (!src) {
    return <div></div>;
  }

  return (
    <Image style={{ objectFit: "cover" }} fill src={src} alt={alt ?? ""} />
  );
};

// TODO: Clean up link components (from
// legacy info box) and use those components
// here for these links
export const LegacyInfoBoxBlock = ({
  block,
  disableContainerGutters,
  disableYMargins,
  smallVariants,
}: InfoBoxProps) => {
  const [hoveringOverImg, setHoveringOverImg] = useState(false);

  let page;

  if (block.linkText && block.linkTo) {
    page = { title: block.linkText, to: block.linkTo, newTab: block.newTab };
  }

  return (
    <Container
      sx={{
        my: disableYMargins ? undefined : 5,
        mb: disableYMargins ? undefined : "30px",
        height: "100%",
      }}
      disableGutters={disableContainerGutters}
    >
      <LegacyInfoBox
        title={block.title}
        subtitle={block.subtitle}
        page={page}
        small={smallVariants}
        image={
          <span
            onMouseEnter={() => setHoveringOverImg(true)}
            onMouseLeave={() => setHoveringOverImg(false)}
            // We need these styles here because the span doesn't
            // automatically fill the box
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              position: "relative",
            }}
          >
            {!block.hoverImage && (
              <ImageComponent
                src={block.image}
                alt={block.imageAlt}
                small={smallVariants}
              />
            )}
            {block.hoverImage && (
              <Box position="relative">
                <Box visibility={hoveringOverImg ? "hidden" : "visible"}>
                  <ImageComponent
                    src={block.image}
                    alt={block.imageAlt}
                    small={smallVariants}
                  />
                </Box>
                <Box
                  position="absolute"
                  top={0}
                  visibility={hoveringOverImg ? "visible" : "hidden"}
                >
                  {/* TODO: Either explicitly mark in CMS that the hover image should NOT be different, more of just a "decorative image" (https://www.w3.org/WAI/tutorials/images/decorative/), or somehow make the alt dynamic? (which will probably be confusing for screen readers?)*/}
                  <ImageComponent
                    src={block.hoverImage}
                    alt=""
                    small={smallVariants}
                  />
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
