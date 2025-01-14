import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useLayoutContext } from "~/components/LayoutContent/LayoutContent";
import { mainRoutes } from "~/modules/main/routes";
import MainApp from "./MainApp";
import { mainRouter } from "./router";

const MainAppProvider: FC = () => {
  const { user } = useLayoutContext();
  const unAuthRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainApp />,
      // loader: tokenLoader,
      // shouldRevalidate: () => false,
      children: [mainRoutes],
    },
  ]);
  return user ? (
    <RouterProvider router={mainRouter} />
  ) : (
    <RouterProvider router={unAuthRouter} />
  );
};

export default MainAppProvider;
