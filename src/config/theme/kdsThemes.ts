export const kdsThemes = {
	// Configure dark themes
	dark: {
		colors: {
			// primary
			'base-primary-primary': '#E99F39',
			'base-primary-primary-light': '#eab262',
			'base-primary-secondary': '#8F9FB5',
			'base-primary-white-and-black': '#121313',
			'base-primary-white-and-white': '#ffffff',
			'base-primary-medium-gray': '#A8A8A8',
			'base-primary-dark-gray': '#E2E2E2',
			'base-primary-light-gray': '#898989',
			// background
			'base-background-cards': '#161616',
			'base-background-secondary': '#0B0B0D',
			'base-background-basic': '#070708',

			// font
			'base-font-colors-black': '#FFFFFF',
			'base-font-colors-black-70': '#FFFFFFb3',
			'base-font-colors-black-60': '#ffffff9b',
			'base-font-colors-white-and-white': '#FFFFFF',
			'base-font-colors-dark-gray': '#C4C4C4',
			'base-font-colors-light-gray': '#898989',

			// status
			'base-status-colors-red': '#E2222F',
			'base-status-colors-light-red': '#E2222F1a',
			'base-status-colors-purple': '#AA6DE2',
			'base-status-colors-green': '#0BBA6D',
			'base-status-colors-light-green': '#0BBA6D1a',
			'base-status-colors-blue': '#42B0FE',
			'base-status-colors-orange': '#E99F39',
			'base-status-colors-gray-tint': '#2D2D2D',
			'base-status-colors-blue-tint': '#1098f71a',
			'base-status-colors-orange-tint': '#FFAF361A',
			'base-status-colors-red-tint': '#E2222F1A',
			'base-status-colors-navy': '#167BC1',

			//border
			'base-border-color-gray': '#ffffff40',

			// others
			'base-others-primary-tint': '#E99F392B',
			'base-others-secondary-tint': '#8F9FB51A',
			'base-others-secondary-tint-light': '#8F9FB50a',
			'base-others-border': '#fafafa3A',
			'base-others-divider': '#ffffff26',
			// static
			'static-bg-disabled': '#2D2D2D',
			'static-font-disabled': '#fafafa',
		},
	},
	light: {
		colors: {
			// primary
			'base-primary-primary': '#E99F39',
			'base-primary-primary-light': '#eab262',
			'base-primary-secondary': '#8F9FB5',
			'base-primary-white-and-black': '#121313',
			'base-primary-white-and-white': '#ffffff',
			'base-primary-medium-gray': '#A8A8A8',
			'base-primary-dark-gray': '#E2E2E2',
			'base-primary-light-gray': '#898989',
			// background
			'base-background-cards': '#161616',
			'base-background-secondary': '#0B0B0D',
			'base-background-basic': '#070708',

			// font
			'base-font-colors-black': '#FFFFFF',
			'base-font-colors-black-70': '#FFFFFFb3',
			'base-font-colors-black-60': '#ffffff9b',
			'base-font-colors-white-and-white': '#FFFFFF',
			'base-font-colors-dark-gray': '#C4C4C4',
			'base-font-colors-light-gray': '#898989',

			// status
			'base-status-colors-red': '#E2222F',
			'base-status-colors-light-red': '#E2222F1a',
			'base-status-colors-purple': '#AA6DE2',
			'base-status-colors-green': '#0BBA6D',
			'base-status-colors-light-green': '#0BBA6D1a',
			'base-status-colors-blue': '#42B0FE',
			'base-status-colors-orange': '#E99F39',
			'base-status-colors-gray-tint': '#2D2D2D',
			'base-status-colors-blue-tint': '#1098f71a',
			'base-status-colors-orange-tint': '#FFAF361A',
			'base-status-colors-red-tint': '#E2222F1A',
			'base-status-colors-navy': '#167BC1',

			//border
			'base-border-color-gray': '#ffffff40',

			// others
			'base-others-primary-tint': '#E99F392B',
			'base-others-secondary-tint': '#8F9FB51A',
			'base-others-secondary-tint-light': '#8F9FB50a',
			'base-others-border': '#fafafa3A',
			'base-others-divider': '#ffffff26',
			// static
			'static-bg-disabled': '#2D2D2D',
			'static-font-disabled': '#fafafa',
		},
	},
};

export type OrderStatusColorType =
	| 'base-status-colors-orange'
	| 'base-status-colors-blue'
	| 'base-status-colors-green'
	| 'base-status-colors-red';
