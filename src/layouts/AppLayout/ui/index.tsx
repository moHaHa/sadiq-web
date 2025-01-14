import AppLayoutMenu from "../components/AppLayoutMenu/AppLayoutMenu";
import AppLayoutHeader from "./AppLayoutHeader/AppLayoutHeader";
import AppLayoutHeaderTitle from "./AppLayoutHeaderTitle/AppLayoutHeaderTitle";
import AppLayoutMenuPopup from "./AppLayoutMenuPopup/AppLayoutMenuPopup";
import AppLayoutNav from "./AppLayoutNav/AppLayoutNav";
import AppLayoutNavItem from "./AppLayoutNavItem/AppLayoutNavItem";

export const AppLayoutGroup = {
  Menu: AppLayoutMenu,
  UI: {
    Header: AppLayoutHeader,
    HeaderTitle: AppLayoutHeaderTitle,
    Nav: AppLayoutNav,
    NavItem: AppLayoutNavItem,
    MenuPopup: AppLayoutMenuPopup,
  },
};
