import React from "react";
import { ThemeProvider } from "@czb-ui/core";

import { NavBarAndFooterPlacer } from "@czb-ui/core";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

// Import fonts at their various weights
// 400 is normal, 700 is bold
import "@fontsource/barlow/700.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <NavBarAndFooterPlacer topBar={<NavBar />} bottomBar={<Footer />}>
        <Component {...pageProps} />
      </NavBarAndFooterPlacer>
    </ThemeProvider>
  );
};

export default App;
