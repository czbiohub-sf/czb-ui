import TinaProvider from "../.tina/components/TinaDynamicProvider";
import { ThemeProvider } from "@czb-ui/core";

// Import fonts at their various weights
// 400 is normal, 700 is bold
import "@fontsource/barlow/700.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

// Import Butler font
import "../public/fonts/Butler.css";

const App = ({ Component, pageProps }) => {
  return (
    <TinaProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </TinaProvider>
  );
};

export default App;
