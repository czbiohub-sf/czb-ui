import { createContext } from "react";

const TogglesContext = createContext({
  sidebarViz: true,
  setSidebarViz: () => {},
});

export default TogglesContext;
