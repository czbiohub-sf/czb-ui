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
  outsideLink: boolean;
  image?: any;
  right?: boolean;
}

interface InfoBoxProps {
  block: InfoBoxBlockProps;
}

export const InfoBoxBlock = ({ block }: InfoBoxProps) => {
  let page;

  if (block.linkText && block.linkTo) {
    page = { title: block.linkText, to: block.linkTo };
  }

  return (
    <Container sx={{ my: 5 }}>
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
        pagesComponent={NextLinkComposed}
      />
    </Container>
  );
};
