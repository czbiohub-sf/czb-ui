import { Box } from "@mui/material";
import { PagesObject } from "../NavBar/NavBar";
import BackgroundInfoBox from "./BackgroundInfoBox";
import NormalInfoBox from "./NormalInfoBox";

export interface InfoBoxProps {
  title?: string;
  subtitle?: string;
  page?: PagesObject;
  image?: React.ReactNode;
  imageOnRight?: boolean;
  small?: boolean;
  pagesComponent?: any; // TODO: Find type of mui link component prop
}

interface InfoBoxContainerProps extends InfoBoxProps {
  small?: boolean;
  type?: "normal" | "background";
}

export const InfoBox = ({
  title,
  subtitle,
  page,
  pagesComponent,
  image,
  imageOnRight,
  small,
  type = "normal",
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
          small={small}
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
