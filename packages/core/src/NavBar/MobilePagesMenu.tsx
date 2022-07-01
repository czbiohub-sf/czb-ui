import { PagesObject } from "./NavBar";
import { Box, Button } from "@mui/material";
import Hamburger from "hamburger-react";

interface MobilePagesMenuProps {
  pages: Array<PagesObject>;
  pagesComponent?: any; // TODO: Find type of mui button component prop
}

export const MobilePagesMenu = ({
  pages,
  pagesComponent,
}: MobilePagesMenuProps) => {
  return (
    <Box>
      <Hamburger />
    </Box>
  );
};
