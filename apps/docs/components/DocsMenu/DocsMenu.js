import React from "react";
import styled from "@emotion/styled";
import { fontCapsXxs } from "czifui";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { NextLinkComposed } from "@czb-ui/tinacms";

const drawerWidth = 240;

const docsMenu = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        slug: "introduction",
      },
      {
        title: "Installation",
        slug: "installation",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "NavBarAndFooterPlacer",
        slug: "navbarandfooterplacer",
      },
      {
        title: "InfoBox",
        slug: "infobox",
      },
    ],
  },
];

export const CategoryTitle = styled(Typography)`
  ${fontCapsXxs}
  padding-left: 16px; /* To match ListItemButton padding */
  padding-right: 16px; /* To match ListItemButton padding */
  margin-top: 16px;
`;

export default function DocsMenu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        height: "100%",
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          position: "relative",
        },
      }}
    >
      <List>
        {docsMenu.map((category, i) => (
          <ListItem key={i} disablePadding sx={{ display: "block" }}>
            <CategoryTitle component="div">{category.title}</CategoryTitle>
            <Box>
              <List>
                {category.items.map((item, j) => (
                  <ListItem key={j} disablePadding>
                    <ListItemButton
                      sx={{ paddingY: 3 }}
                      component={NextLinkComposed}
                      to={`/docs/${item.slug}`}
                    >
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
