import { ThemeConfig } from 'antd';
import { kdsThemes } from './kdsThemes';

const { 'base-primary-main': colorPrimary } = kdsThemes.light.colors;

export const antdTheme: ThemeConfig = {
	token: {
		colorPrimary, // Primary color for the theme
		colorInfo: '#084239',
		borderRadius: 10,
	},
};
