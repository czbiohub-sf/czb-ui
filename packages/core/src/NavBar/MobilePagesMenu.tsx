"use client";
import { PageLink } from "../UniversalTypes/links";
import {
  Box,
  Drawer,
  ListItemButton,
  ClickAwayListener,
  ListItem,
  List,
  Divider,
} from "@mui/material";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "@czi-sds/components";

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
          anchor="top"
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              top: offsetHeight,
            },
          }}
        >
          <List disablePadding>
            {pages.map((page, i) => (
              <Box key={i}>
                <Divider component="li" />
                <ListItem disableGutters disablePadding>
                  <Link
                    color="inherit"
                    component={
                      // If we are using newTab, use "a" straight away as client routers don't support new tab
                      // If externalLink is true, use "a" as well
                      // Otherwise, use the pagesComponent for a regular client side navigation
                      page.newTab
                        ? "a"
                        : page.externalLink
                        ? "a"
                        : pagesComponent
                    }
                    href={page?.to}
                    sx={{ mx: 5, width: "100%" }}
                    onClick={() => setOpen(false)}
                    // @ts-ignore: We already know that if target is used, we're using an <a> tag for new tab
                    target={page.newTab ? "_blank" : undefined}
                  >
                    <ListItemButton sx={{ p: 6 }}>{page.title}</ListItemButton>
                  </Link>
                </ListItem>
              </Box>
            ))}
          </List>
        </Drawer>
      </Box>
    </ClickAwayListener>
  );
};
