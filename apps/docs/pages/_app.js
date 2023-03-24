import React from "react";
import { ThemeProvider } from "@czb-ui/core";

import { NavBarAndFooterPlacer } from "@czb-ui/core";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import DocsMenu from "../components/DocsMenu/DocsMenu";

import "@fontsource/barlow/700.css"; // We only need bold weight
import "@fontsource/lato/700.css"; // We only need bold weight
import "@fontsource/hanken-grotesk";
import "@fontsource/stix-two-text";

// Import Butler font
import "../public/fonts/Butler.css";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <NavBarAndFooterPlacer
        topBar={<NavBar />}
        bottomBar={<Footer />}
        leftSidebar={<DocsMenu />}
      >
        <Component {...pageProps} />
      </NavBarAndFooterPlacer>
    </ThemeProvider>
  );
};

export default App;
