import React, { useState } from "react";
import { ThemeProvider } from "@czb-ui/core";

import { NavBarAndFooterPlacer } from "@czb-ui/core";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import DocsMenu from "../components/DocsMenu/DocsMenu";
import TogglesContext from "../utils/TogglesContext";

import "@fontsource/barlow/700.css"; // We only need bold weight
import "@fontsource/lato/700.css"; // We only need bold weight
import "@fontsource/hanken-grotesk";
import "@fontsource/stix-two-text";

// Import Butler font
import "../public/fonts/Butler.css";

const App = ({ Component, pageProps }) => {
  const [sidebarViz, setSidebarViz] = useState(true);

  return (
    <ThemeProvider>
      <TogglesContext.Provider value={{ sidebarViz, setSidebarViz }}>
        <NavBarAndFooterPlacer
          topBar={<NavBar />}
          bottomBar={<Footer />}
          leftSidebar={sidebarViz ? <DocsMenu /> : null}
        >
          <Component {...pageProps} />
        </NavBarAndFooterPlacer>
      </TogglesContext.Provider>
    </ThemeProvider>
  );
};

export default App;
