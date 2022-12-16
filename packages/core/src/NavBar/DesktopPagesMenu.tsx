import { PageLink } from "../UniversalTypes/links";
import { Link } from "czifui";
import { Box } from "@mui/material";

interface DesktopPagesMenuProps {
  pages: Array<PageLink>;
  pagesComponent?: any; // TODO: Find type of mui button component prop
}

export const DesktopPagesMenu = ({
  pages,
  pagesComponent,
}: DesktopPagesMenuProps) => {
  return (
    <Box sx={{ mx: 5 }}>
      {pages.map((page, i) => (
        <>
          {!page.externalLink && (
            <Link
              color="inherit"
              component={page?.to ? pagesComponent : undefined}
              to={page?.to}
              sx={{ mx: 5 }}
              key={i}
            >
              {page?.title}
            </Link>
          )}
          {/* If target="_blank" needs to be added also add rel="noopener" */}
          {page.externalLink && (
            <Link color="inherit" sx={{ mx: 5 }} key={i} href={page?.to}>
              {page?.title}
            </Link>
          )}
        </>
      ))}
    </Box>
  );
};
