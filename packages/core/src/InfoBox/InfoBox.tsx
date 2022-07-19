import { Card } from "../Card/Card";
import BackgroundInfoBox from "./BackgroundInfoBox";
import NormalInfoBox from "./NormalInfoBox";

export interface InfoBoxProps {
  image: React.ReactNode;
  imageOnRight?: boolean;
}

interface InfoBoxContainerProps extends InfoBoxProps {
  type?: "normal" | "background";
  size?: "small" | "normal";
}

export const InfoBox = ({
  image,
  imageOnRight,
  type = "normal",
  size = "normal",
}: InfoBoxContainerProps) => {
  // TODO: Put grey colors in palette
  return (
    <Card
      sx={{
        height: "300px",
        position: "relative",
      }}
      disablePadding={type == "background"}
    >
      {type == "normal" && (
        <NormalInfoBox image={image} imageOnRight={imageOnRight} />
      )}
      {type == "background" && (
        <BackgroundInfoBox image={image} imageOnRight={imageOnRight} />
      )}
    </Card>
  );
};
