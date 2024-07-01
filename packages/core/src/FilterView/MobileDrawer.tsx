"use client";
// Based off example: https://mui.com/material-ui/react-drawer/#swipeable-edge
import { useState } from "react";
import { Box, SwipeableDrawer, Fab, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { getColors } from "@czi-sds/components";
import { Global } from "@emotion/react";

import { FilterViewProps } from "./FilterView";

const StyledBox = styled("div")(() => {
  return {
    backgroundColor: "#fff",
  };
});

const Puller = styled("div")((props) => {
  const colors = getColors(props);

  return {
    width: 30,
    height: 6,
    backgroundColor: colors?.gray[300],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
  };
});

const fabStyle = {
  position: "fixed",
  bottom: 16,
  right: 16,
};

export default function MobileDrawer({
  drawerComponent,
  contentComponent,
  mobileFabAriaLabel,
  mobileFabIcon,
  mobileDrawerHeightPx,
}: FilterViewProps) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            overflow: "visible",
          },
        }}
      />
      <Box>
        {contentComponent}
        <Fab
          color="primary"
          aria-label={mobileFabAriaLabel}
          onClick={toggleDrawer(true)}
          sx={fabStyle}
        >
          {mobileFabIcon}
        </Fab>
      </Box>
      {/* @ts-expect-error */}
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={0}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        transitionDuration={200}
      >
        <Box borderBottom={1} sx={{ borderColor: "divider" }}>
          <Puller />
          <IconButton
            aria-label="close"
            onClick={toggleDrawer(false)}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "flex-end",
              p: 7,
              width: "100%",
            }}
          >
            <Close />
          </IconButton>
        </Box>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: `${mobileDrawerHeightPx}px`,
            overflow: "auto",
          }}
        >
          {drawerComponent}
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
}
