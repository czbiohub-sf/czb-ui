import { PageLink } from "../UniversalTypes/links";
import { Link } from "@czi-sds/components";
import { Box, ListItem, List } from "@mui/material";

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
      <List sx={{ display: "flex", flexDirection: "row" }}>
        {pages.map((page, i) => (
          <ListItem disableGutters key={i} sx={{ flexBasis: "content" }}>
            {!page.externalLink && (
              <Link
                color="inherit"
                component={page?.to ? pagesComponent : undefined}
                to={page?.to}
                sx={{ mx: 5 }}
              >
                {page?.title}
              </Link>
            )}
            {/* If target="_blank" needs to be added also add rel="noopener" */}
            {page.externalLink && (
              <Link color="inherit" sx={{ mx: 5 }} href={page?.to}>
                {page?.title}
              </Link>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
