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
        square={small}
        image={
          block.image ? (
            <Image
              objectFit="cover"
              // Subtract 2 because of the
              // border around the image
              width={248}
              height={small ? 248 : 158}
              src={block.image}
            />
          ) : undefined
        }
        pagesComponent={block.outsideLink ? undefined : NextLinkComposed}
      />
    </Container>
  );
};
