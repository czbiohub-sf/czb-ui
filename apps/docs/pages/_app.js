import React, { useState } from "react";
import { ThemeProvider } from "@czb-ui/core";

import { NavBarAndFooterPlacer } from "@czb-ui/core";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import DocsMenu from "../components/DocsMenu/DocsMenu";
import TogglesContext from "../utils/TogglesContext";

import "@fontsource/hanken-grotesk/400.css";
import "@fontsource/hanken-grotesk/600.css";
import "@fontsource/hanken-grotesk/700.css";
import "@fontsource/stix-two-text/600.css";
import "@fontsource/lato/700.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/400.css";
import "@fontsource/jetbrains-mono/400.css";

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
