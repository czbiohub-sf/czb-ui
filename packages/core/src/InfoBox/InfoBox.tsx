import { Box } from "@mui/material";
import { PagesObject } from "../NavBar/NavBar";
import BackgroundInfoBox from "./BackgroundInfoBox";
import NormalInfoBox from "./NormalInfoBox";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export interface InfoBoxProps {
  title?: string;
  subtitle?: string;
  page?: PagesObject;
  image?: React.ReactNode;
  imageOnRight?: boolean;
  pagesComponent?: any; // TODO: Find type of mui link component prop
}

interface InfoBoxContainerProps extends InfoBoxProps {
  type?: "normal" | "background";
  size?: "small" | "normal";
}

export const InfoBox = ({
  title,
  subtitle,
  page,
  pagesComponent,
  image,
  imageOnRight,
  type = "normal",
  size = "normal",
}: InfoBoxContainerProps) => {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      {type == "normal" && (
        <NormalInfoBox
          title={title}
          subtitle={subtitle}
          page={page}
          pagesComponent={pagesComponent}
          image={image}
          imageOnRight={imageOnRight}
        />
      )}
      {type == "background" && (
        <BackgroundInfoBox
          title={title}
          subtitle={subtitle}
          page={page}
          pagesComponent={pagesComponent}
          image={image}
          imageOnRight={imageOnRight}
        />
      )}
    </Box>
  );
};
