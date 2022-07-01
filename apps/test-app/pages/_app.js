import { ThemeProvider } from "@czb-ui/core";

// Import fonts at their various weights
// 400 is normal, 700 is bold
import "@fontsource/barlow/700.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

import NavBar from "../components/NavBar/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
