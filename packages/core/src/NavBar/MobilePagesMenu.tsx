import { PagesObject } from "./NavBar";
import { Box, Drawer, ListItemButton } from "@mui/material";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "czifui";

interface MobilePagesMenuProps {
  pages: Array<PagesObject>;
  pagesComponent?: any; // TODO: Find type of mui button component prop
}

export const MobilePagesMenu = ({
  pages,
  pagesComponent,
}: MobilePagesMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Hamburger toggled={open} toggle={setOpen} />
      <Drawer
        variant="persistent"
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            top: "50px",
          },
        }}
      >
        {pages.map((page) => (
          <Link
            color="inherit"
            component={pagesComponent}
            to={page.to}
            sx={{ mx: 5 }}
          >
            <ListItemButton>{page.title}</ListItemButton>
          </Link>
        ))}
      </Drawer>
    </Box>
  );
};
