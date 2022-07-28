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
  right?: boolean;
}

interface InfoBoxProps {
  block: InfoBoxBlockProps;
  disableContainerGutters?: boolean;
  disableYMargins?: boolean;
}

export const InfoBoxBlock = ({
  block,
  disableContainerGutters,
  disableYMargins,
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
      <InfoBox
        title={block.title}
        subtitle={block.subtitle}
        page={page}
        image={
          block.image ? (
            <Box position="relative" height="100%">
              <Image objectFit="cover" layout="fill" src={block.image} />
            </Box>
          ) : undefined
        }
        imageOnRight={block.right}
        pagesComponent={block.outsideLink ? undefined : NextLinkComposed}
      />
    </Container>
  );
};
