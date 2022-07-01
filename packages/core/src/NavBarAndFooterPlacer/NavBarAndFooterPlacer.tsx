import { Box } from "@mui/material";

interface NavBarAndFooterPlacerProps {
  children: React.ReactNode;
  topBar: React.ReactNode;
  bottomBar: React.ReactNode;
}

export const NavBarAndFooterPlacer = ({
  children,
  topBar,
  bottomBar,
}: NavBarAndFooterPlacerProps) => {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ flex: "1 0 auto" }}>
        {topBar}
        {children}
      </Box>
      <Box>{bottomBar}</Box>
    </Box>
  );
};
