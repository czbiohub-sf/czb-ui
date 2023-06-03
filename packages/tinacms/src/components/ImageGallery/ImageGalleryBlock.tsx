interface Image {
  __typename: "PageBlocksImageGalleryImages";
  image: string;
  imageAlt: string;
}

// TODO: Is there a way to get types from TinaCMS?
interface ImageGalleryBlockProps {
  __typename: string;
  images: Array<Image>;
}

interface ImageGalleryProps {
  block: ImageGalleryBlockProps;
}

export const ImageGalleryBlock = ({ block }: ImageGalleryProps) => {
  return <div>ImageGalleryBlock</div>;
};
