// Based off example: https://mui.com/material-ui/react-drawer/#swipeable-edge
import { useState } from "react";
import { Box, Typography, SwipeableDrawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import { getColors } from "@czi-sds/components";
import { Global } from "@emotion/react";

import { FilterViewProps } from "./FilterView";

const drawerBleeding = 72;
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

export default function MobileDrawer({
  drawerComponent,
  contentComponent,
  mobileDrawerPullerText,
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
            height: `calc(${drawerHeight} - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box>{contentComponent}</Box>
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
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 7, color: "text.secondary" }}>
            51 results
          </Typography>
        </StyledBox>
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
