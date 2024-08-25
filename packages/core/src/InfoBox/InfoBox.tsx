"use client";
import { PageLink } from "../UniversalTypes/links";
import NormalInfoBox from "./NormalInfoBox";

export interface InfoBoxProps {
  title?: string;
  subtitle?: string;
  page?: PageLink;
  image?: React.ReactNode;
  inGrid?: boolean;
  pagesComponent?: any; // TODO: Find type of mui link component prop
}

interface InfoBoxContainerProps extends InfoBoxProps {
  inGrid?: boolean;
  type?: "normal" | "background";
}

export const InfoBox = ({
  title,
  subtitle,
  page,
  pagesComponent,
  image,
  inGrid,
  type = "normal",
}: InfoBoxContainerProps) => {
  return (
    <>
      {type == "normal" && (
        <NormalInfoBox
          title={title}
          subtitle={subtitle}
          page={page}
          pagesComponent={pagesComponent}
          image={image}
          inGrid={inGrid}
        />
      )}
    </>
  );
};
