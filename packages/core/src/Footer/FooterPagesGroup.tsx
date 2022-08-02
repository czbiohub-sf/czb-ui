import { Box, Typography } from "@mui/material";
import { Link } from "czifui";
import { PageGroup } from "../UniversalTypes/links";

interface FooterPagesGroupProps {
  pages: Array<PageGroup>;
  pagesComponent?: any;
}

// TODO: Create component for link
// that handles inner routes and external
// links (like the one in here)
export const FooterPagesGroup = ({
  pages,
  pagesComponent,
}: FooterPagesGroupProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "7px", // So it aligns with the title and logo (being centered in their div)
        gap: "40px",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {pages.map((pageGroup, i) => {
        return (
          <Box key={i}>
            <Typography
              sx={{ textTransform: "uppercase", fontWeight: "bold" }}
              component="b"
            >
              {pageGroup.title}
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyleType: "none",
                padding: "0px",
                marginBottom: "0px",
              }}
            >
              {pageGroup.pages.map((page, j) => {
                return (
                  <li key={j}>
                    {!page.externalLink && (
                      <Link
                        sx={{ marginTop: "1rem", color: "white" }}
                        to={page?.to}
                        component={page?.to ? pagesComponent : undefined}
                      >
                        {page?.title}
                      </Link>
                    )}
                    {/* If target="_blank" needs to be added also add rel="noopener" */}
                    {page.externalLink && (
                      <Link
                        sx={{ marginTop: "1rem", color: "white" }}
                        href={page?.to}
                      >
                        {page?.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
