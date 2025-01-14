import { ThemeConfig } from "antd";
import { kdsThemes } from "./kdsThemes";

const { "base-primary-main": colorPrimary } = kdsThemes.light.colors;

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary, // Primary color for the theme
    colorInfo: "#3bd47d",
    borderRadius: 10,
  },
};
