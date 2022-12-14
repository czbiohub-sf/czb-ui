import { PageLink } from "../UniversalTypes/links";
import { Box, Drawer, ListItemButton, ClickAwayListener } from "@mui/material";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "czifui";

interface MobilePagesMenuProps {
  pages: Array<PageLink>;
  pagesComponent?: any; // TODO: Find type of mui button component prop
}

export const MobilePagesMenu = ({
  pages,
  pagesComponent,
}: MobilePagesMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
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
          {pages.map((page, i) => (
            <a>
            {!page.externalLink && (
                  <Link
                    color="inherit"
                    component={pagesComponent}
                    to={page.to}
                    sx={{ mx: 5 }}
                    onClick={() => setOpen(false)}
                    key={i}
                  >
                    <ListItemButton>{page.title}</ListItemButton>
                  </Link>
            )}
            {page.externalLink && (
                  <Link
                    color="inherit"
                    component={pagesComponent}
                    href={page.to}
                    sx={{ mx: 5 }}
                    onClick={() => setOpen(false)}
                    key={i}
                  >
                    <ListItemButton>{page.title}</ListItemButton>
                  </Link>
            )}
            </a>
          ))}
        </Drawer>
      </Box>
    </ClickAwayListener>
  );
};
