import { PagesObject } from "./NavBar";
import { Link } from "czifui";
import { Box } from "@mui/material";

interface DesktopPagesMenuProps {
  pages: Array<PagesObject>;
  pagesComponent?: any; // TODO: Find type of mui button component prop
}

export const DesktopPagesMenu = ({
  pages,
  pagesComponent,
}: DesktopPagesMenuProps) => {
  return (
    <Box sx={{ mx: 5 }}>
      {pages.map((page) => (
        <Link
          color="inherit"
          component={pagesComponent}
          to={page.to}
          sx={{ mx: 5 }}
        >
          {page.title}
        </Link>
      ))}
    </Box>
  );
};
