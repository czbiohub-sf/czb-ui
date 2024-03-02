import { InfoBox } from "@czb-ui/core";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import { NextLinkComposed } from "../../utils/NextLinkComposed";

interface InfoBoxBlockProps {
  title?: string;
  subtitle?: string;
  linkText?: string;
  linkTo?: string;
  outsideLink?: boolean;
  image?: any;
  imageAlt?: string;
  right?: boolean;
}

interface InfoBoxProps {
  block: InfoBoxBlockProps;
  disableContainerGutters?: boolean;
  disableYMargins?: boolean;
  smallVariants?: boolean;
}

// TODO: Clean up link components (from
// legacy info box) and use those components
// here for these links
export const InfoBoxBlock = ({
  block,
  disableContainerGutters,
  disableYMargins,
  smallVariants,
}: InfoBoxProps) => {
  let page;

  page = { title: block.linkText, to: block.linkTo };

  return (
    <Container
      sx={{ my: disableYMargins ? undefined : 5 }}
      disableGutters={disableContainerGutters}
    >
      <InfoBox
        title={block.title}
        subtitle={block.subtitle}
        page={page}
        small={smallVariants}
        image={
          block.image ? (
            <Box position="relative" height="100%">
              <Image
                alt={block.imageAlt ?? ""}
                fill
                style={{ objectFit: "cover" }}
                src={block.image}
                // TODO: Use theme breakpoints
                sizes="(max-width: 768px) 100vw, 50w"
              />
            </Box>
          ) : undefined
        }
        imageOnRight={block.right}
        pagesComponent={block.outsideLink ? undefined : NextLinkComposed}
      />
    </Container>
  );
};
