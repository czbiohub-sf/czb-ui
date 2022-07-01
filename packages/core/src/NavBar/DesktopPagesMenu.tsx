import { PagesObject } from "./NavBar";
import { Box, Button } from "@mui/material";

interface DesktopPagesMenuProps {
  pages: Array<PagesObject>;
  pagesComponent?: any; // TODO: Find type of mui button component prop
}

export const DesktopPagesMenu = ({
  pages,
  pagesComponent,
}: DesktopPagesMenuProps) => {
  return (
    <Box sx={{ mx: 2 }}>
      {pages.map((page) => (
        <Button color="inherit" component={pagesComponent} to={page.to}>
          {page.title}
        </Button>
      ))}
    </Box>
  );
};
