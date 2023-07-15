import { PageLink } from "../UniversalTypes/links";
import {
  Box,
  Drawer,
  ListItemButton,
  ClickAwayListener,
  ListItem,
  List,
} from "@mui/material";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "czifui";

interface MobilePagesMenuProps {
  pages: Array<PageLink>;
  offsetHeight: string;
  pagesComponent?: any; // TODO: Find type of mui button component prop
}

export const MobilePagesMenu = ({
  pages,
  offsetHeight,
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
              top: offsetHeight,
            },
          }}
        >
          <List>
            {pages.map((page, i) => (
              <ListItem disableGutters key={i}>
                {!page.externalLink && (
                  <Link
                    color="inherit"
                    component={page?.to ? pagesComponent : undefined}
                    to={page?.to}
                    sx={{ mx: 5 }}
                    onClick={() => setOpen(false)}
                  >
                    <ListItemButton>{page.title}</ListItemButton>
                  </Link>
                )}
                {/* If target="_blank" needs to be added also add rel="noopener" */}
                {page.externalLink && (
                  <Link
                    color="inherit"
                    sx={{ mx: 5 }}
                    onClick={() => setOpen(false)}
                    href={page?.to}
                  >
                    <ListItemButton>{page.title}</ListItemButton>
                  </Link>
                )}
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </ClickAwayListener>
  );
};
