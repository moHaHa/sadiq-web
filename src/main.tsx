import { ConfigProvider } from "antd";
import { ThemeProvider } from "antd-style";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import "virtual:uno.css";
import queryClient from "~/config/reactQuery/queryClient";
import { antdTheme } from "~/config/theme/antdTheme";
import { version } from "./../package.json";
import ActiveAppProvider from "./apps/ActiveAppProvider";
import { LayoutContextProvider } from "./components/LayoutContent/LayoutContent";
import "./index.css";

/**
 * Show Version
 */
document.getElementById("root")?.setAttribute("version", version);
console.log("Upgrading Syria", "v" + version);
/**
 *
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={antdTheme}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LayoutContextProvider>
          <ActiveAppProvider />
        </LayoutContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ConfigProvider>
);
