import { Container } from "@mui/material";
import { HeadingSeparator } from "@czb-ui/core";

interface HeadingSeparatorBlockProps {
  title?: string;
}

interface HeadingSeparatorProps {
  block: HeadingSeparatorBlockProps;
}

export const HeadingSeparatorBlock = ({ block }: HeadingSeparatorProps) => {
  return (
    <Container sx={{ my: 8 }}>
      <HeadingSeparator title={block.title} id={block.title} />
    </Container>
  );
};
