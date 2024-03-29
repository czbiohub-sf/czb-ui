import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { InfoBoxBlock } from "../InfoBox/InfoBoxBlock";
import { Link } from "czifui";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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

// TODO: Separate these components into their own files

// TODO: Headings only support text with this implementation. They might include links and other stuff,
// thats when you need to go through the content array
const h1Component = ({ children }: HeadingProps) => {
  const text = children.props.content[0].text;
  return (
    <Typography variant="h1" id={text}>
      {text}
    </Typography>
  );
};

const h2Component = ({ children }: HeadingProps) => {
  const text = children.props.content[0].text;
  return (
    <Typography variant="h2" id={text}>
      {text}
    </Typography>
  );
};

const h3Component = ({ children }: HeadingProps) => {
  const text = children.props.content[0].text;
  return (
    <Typography variant="h3" id={text}>
      {text}
    </Typography>
  );
};

const h4Component = ({ children }: HeadingProps) => {
  const text = children.props.content[0].text;
  return (
    <Typography variant="h4" id={text}>
      {text}
    </Typography>
  );
};

const h5Component = ({ children }: HeadingProps) => {
  const text = children.props.content[0].text;
  return (
    <Typography variant="h5" id={text}>
      {text}
    </Typography>
  );
};

const h6Component = ({ children }: HeadingProps) => {
  const text = children.props.content[0].text;
  return (
    <Typography variant="h6" id={text}>
      {children.props.content[0].text}
    </Typography>
  );
};

// TODO: Find "props" type
const aComponent = (props: any) => {
  const text = props.children.props.content[0].text;
  const urlTitle = props.title;
  const href = props.url;

  return (
    <Link
      sdsStyle="default"
      href={href}
      title={urlTitle}
      target="_blank"
      rel="noopener"
    >
      {text}
    </Link>
  );
};

const imgComponent = (props: ImageProps) => {
  // TODO: Caption, props.caption
  // TODO: Get image resolution somehow or
  // switch sizes to 100vw when on mobile
  // and leave on 30vw on desktop
  // TODO: Get palette grey for background
  // that shows when there is no image
  return (
    <Box
      sx={{
        position: "relative",
        height: "300px",
        my: "20px",
        display: "block",
      }}
      component="span"
    >
      {props.url && (
        <Image
          src={props.url}
          alt={props.alt}
          fill
          style={{ objectFit: "contain" }}
          sizes="(min-width: 75em) 33vw, (min-width: 48em) 50vw, 100vw"
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
          component="span"
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

const codeInlineComponent = (props: any) => {
  return (
    <Typography
      variant="body1"
      component="code"
      sx={{
        backgroundColor: "#f4f4f4",
        padding: "5px",
        borderRadius: "5px",
      }}
      fontFamily="JetBrains Mono"
      fontSize={14}
    >
      {props.children}
    </Typography>
  );
};

const codeBlockComponent = (props: any) => {
  return (
    <SyntaxHighlighter
      language={props.lang}
      style={atomDark}
      codeTagProps={{ style: { fontFamily: "JetBrains Mono" } }}
    >
      {props.value}
    </SyntaxHighlighter>
  );
};

const components = {
  h1: h1Component,
  h2: h2Component,
  h3: h3Component,
  h4: h4Component,
  h5: h5Component,
  h6: h6Component,
  a: aComponent,
  img: imgComponent,
  infoBox: InfoBox,
  code: codeInlineComponent,
  code_block: codeBlockComponent,
};

export const TextBlock = ({ block }: TextBlockProps) => {
  return (
    <Container sx={{ my: 8 }}>
      {/* TODO: Find why the components prop is erroring
				@ts-ignore */}
      <TinaMarkdown components={components} content={block.text} />
    </Container>
  );
};
