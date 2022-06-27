import MaterialTypography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/system";

export const Typography = styled(MaterialTypography)<TypographyProps>(
  () => ({})
) as typeof MaterialTypography;
// "as typeof" is needed because of the `component` prop
// https://mui.com/material-ui/guides/typescript/#complications-with-the-component-prop
