"use client";
import { PageLink } from "../UniversalTypes/links";
import NormalInfoBox from "./NormalInfoBox";

export interface InfoBoxProps {
  title?: string;
  subtitle?: string;
  page?: PageLink;
  secondaryPage?: PageLink;
  image?: React.ReactNode;
  inGrid?: boolean;
  /**
   * @deprecated The `small` prop is deprecated and only used for backwards compatibility.
   * Please use the `inGrid` prop instead.
   */
  small?: boolean;
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
  secondaryPage,
  pagesComponent,
  image,
  inGrid,
  small,
  type = "normal",
}: InfoBoxContainerProps) => {
  return (
    <>
      {type == "normal" && (
        <NormalInfoBox
          title={title}
          subtitle={subtitle}
          page={page}
          secondaryPage={secondaryPage}
          pagesComponent={pagesComponent}
          image={image}
          inGrid={inGrid || small}
        />
      )}
    </>
  );
};
