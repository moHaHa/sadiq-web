import { FC } from "react";
import { activeAppKey } from "./keys";
import MainAppProvider from "./main/MainAppProvider";
interface ActiveAppProviderProps {}
const ActiveAppProvider: FC<ActiveAppProviderProps> = ({}) => {
  switch (activeAppKey) {
    case "main":
      return <MainAppProvider></MainAppProvider>;
    default:
      return <MainAppProvider></MainAppProvider>;
  }
};
export default ActiveAppProvider;
