// Based off example: https://mui.com/material-ui/react-drawer/#swipeable-edge
import { useState } from "react";
import {
  Box,
  Typography,
  SwipeableDrawer,
  Fab,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { getColors } from "@czi-sds/components";

import { FilterViewProps } from "./FilterView";

const drawerBleeding = 0;
const drawerHeight = "80%";

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
}: FilterViewProps) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
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
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        transitionDuration={200}
      >
        <Puller />

        <IconButton
          aria-label="close"
          onClick={toggleDrawer(false)}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            p: 7,
          }}
        >
          <Close />
        </IconButton>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          {drawerComponent}
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
}
