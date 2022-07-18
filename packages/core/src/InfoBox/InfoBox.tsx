import { Paper } from "@mui/material";
import BackgroundInfoBox from "./BackgroundInfoBox";
import NormalInfoBox from "./NormalInfoBox";

export interface InfoBoxProps {
  image: React.ReactNode;
}

interface InfoBoxContainerProps extends InfoBoxProps {
  type?: "normal" | "background";
  size?: "small" | "normal";
}

export const InfoBox = ({
  image,
  type = "normal",
  size = "normal",
}: InfoBoxContainerProps) => {
  // TODO: Put grey colors in palette
  return (
    <Paper
      sx={{
        height: "300px",
        position: "relative",
        border: "1px solid",
        borderColor: "#f1f0f0",
        padding: "1rem",
      }}
      elevation={0}
      square
    >
      {type == "normal" && <NormalInfoBox image={image} />}
      {type == "background" && <BackgroundInfoBox image={image} />}
    </Paper>
  );
};
