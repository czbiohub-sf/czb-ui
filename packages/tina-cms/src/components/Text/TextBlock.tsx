import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { InfoBoxBlock } from "../InfoBox/InfoBoxBlock";

// TODO: Possible to get actual types from tinacms library?
interface HeadingProps {
  children: any;
}

interface ImageProps {
  url: string;
  alt: string;
}

interface TextBlockProps {
  block: any;
}

// TODO: Seperate these components into their own files

// TODO: Headings only supoort text with this implementation. They might include links and other stuff,
// thats when you need to go through the content array
const h1Component = ({ children }: HeadingProps) => {
  return <Typography variant="h1">{children.props.content[0].text}</Typography>;
};

const h2Component = ({ children }: HeadingProps) => {
  return <Typography variant="h2">{children.props.content[0].text}</Typography>;
};

const h3Component = ({ children }: HeadingProps) => {
  return <Typography variant="h3">{children.props.content[0].text}</Typography>;
};

const h4Component = ({ children }: HeadingProps) => {
  return <Typography variant="h4">{children.props.content[0].text}</Typography>;
};

const h5Component = ({ children }: HeadingProps) => {
  return <Typography variant="h5">{children.props.content[0].text}</Typography>;
};

const h6Component = ({ children }: HeadingProps) => {
  return <Typography variant="h6">{children.props.content[0].text}</Typography>;
};

const imgComponent = (props: ImageProps) => {
  // TODO: Caption, props.caption
  // TODO: Get image resolution somehow or
  // switch sizes to 100vw when on mobile
  // and leave on 30vw on desktop
  // TODO: Get palette grey for background
  // that shows when there is no image
  return (
    <Box sx={{ position: "relative", height: "300px", my: "20px" }}>
      {props.url && (
        <Image
          src={props.url}
          alt={props.alt}
          layout="fill"
          objectFit="contain"
          sizes="30vw"
        />
      )}
      {!props.url && (
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
    </Box>
  );
};

// TODO: Put types here
const InfoBox = (props: any) => {
  return <InfoBoxBlock block={props} disableContainerGutters />;
};

const components = {
  h1: h1Component,
  h2: h2Component,
  h3: h3Component,
  h4: h4Component,
  h5: h5Component,
  h6: h6Component,
  img: imgComponent,
  infoBox: InfoBox,
};

export const TextBlock = ({ block }: TextBlockProps) => {
  return (
    <Container sx={{ my: "20px" }}>
      {/* TODO: Find why the components prop is erroring
				@ts-ignore */}
      <TinaMarkdown components={components} content={block.text} />
    </Container>
  );
};
