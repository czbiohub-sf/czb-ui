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
        <a>
        {!page.externalLink && (
                <Link
                  color="inherit"
                  component={pagesComponent}
                  to={page.to}
                  sx={{ mx: 5 }}
                  key={i}
                >
                  {page.title}
                </Link>
        )}
        {page.externalLink && (
                <Link
                  color="inherit"
                  component={pagesComponent}
                  href={page.to}
                  sx={{ mx: 5 }}
                  key={i}
                >
                  {page.title}
                </Link>
        )}
        </a>
      ))}
    </Box>
  );
};
