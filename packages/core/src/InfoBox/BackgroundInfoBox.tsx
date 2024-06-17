import { Box, Typography } from "@mui/material";
import { Link } from "@czi-sds/components";
import { InfoBoxProps } from "./InfoBox";

/**
 * @deprecated This component will not be worked on.
 */
export default function BackgroundInfoBox({
  title,
  subtitle,
  page,
  pagesComponent,
  image,
  imageOnRight,
}: InfoBoxProps) {
  return (
    <Box
      sx={{
        padding: 0,
        height: "100%",
        display: "flex",
        flexDirection: imageOnRight ? "row" : "row-reverse",
        gap: "50px",
        position: "relative",
      }}
    >
      <Box
        flex={2}
        sx={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
          padding: "20px",
          maxWidth: "400px",
        }}
      >
        <Typography variant="h2" component="div">
          {title}
        </Typography>
        <Typography>{subtitle}</Typography>
        {pagesComponent && (
          <Link
            sx={{ marginTop: "1rem" }}
            to={page?.to}
            component={page?.to ? pagesComponent : undefined}
          >
            {page?.title}
          </Link>
        )}
        {/* If target="_blank" needs to be added also add rel="noopener" */}
        {!pagesComponent && (
          <Link sx={{ marginTop: "1rem" }} href={page?.to}>
            {page?.title}
          </Link>
        )}
      </Box>
      <Box
        sx={{
          background: `linear-gradient(${
            imageOnRight ? "-90" : "90"
          }deg, rgba(0,0,0,0) 0%, #000 100%)`,
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {image}
      </Box>
    </Box>
  );
}
