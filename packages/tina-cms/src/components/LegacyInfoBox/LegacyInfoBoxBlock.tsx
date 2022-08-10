import { LegacyInfoBox } from "@czb-ui/core";
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
}

// TODO: Take interface from other info box component block
interface InfoBoxProps {
  block: InfoBoxBlockProps;
  disableContainerGutters?: boolean;
  disableYMargins?: boolean;
  small?: boolean;
}

export const LegacyInfoBoxBlock = ({
  block,
  disableContainerGutters,
  disableYMargins,
  small,
}: InfoBoxProps) => {
  let page;

  if (block.linkText && block.linkTo) {
    page = { title: block.linkText, to: block.linkTo };
  }

  return (
    <Container
      sx={{ my: disableYMargins ? undefined : 5 }}
      disableGutters={disableContainerGutters}
    >
      <LegacyInfoBox
        title={block.title}
        subtitle={block.subtitle}
        page={page}
        small={small}
        square={small}
        image={
          block.image ? (
            <Box position="relative" height="100%">
              <Image
                objectFit="cover"
                width={250}
                height={small ? 250 : 160}
                src={block.image}
              />
            </Box>
          ) : undefined
        }
        pagesComponent={block.outsideLink ? undefined : NextLinkComposed}
      />
    </Container>
  );
};
