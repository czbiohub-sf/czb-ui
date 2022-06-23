import MaterialTypography, { TypographyProps } from "@mui/material/Typography";

export const Typography = (props: TypographyProps) => {
  return <MaterialTypography {...props}>{props.children}</MaterialTypography>;
};
