import { defineConfig, presetUno, presetWebFonts } from 'unocss';

import presetIcons from '@unocss/preset-icons';
import presetTheme from 'unocss-preset-theme';
import type { Theme } from 'unocss/preset-uno';
import { getUhoBreakpointsList } from './src/config/breakpoints/breakpoints';
import { icons as kdsIcons } from './src/config/icons/index';
import { kdsThemes } from './src/config/theme/kdsThemes';
export default defineConfig<Theme>({
	shortcuts: [
		{
			logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180',
		},
		{
			f: 'flex',
			fcc: 'flex justify-center items-center',
			ic: 'items-center',
			jc: 'justify-center',
			full: 'h-full  w-full',
		},
		{
			'click-interactive': 'active:brightness-80 hover:brightness-120',
		},
		{
			'text-kds-12px': 'text-12px zero:text-12px wide:text-12px',
			'text-kds-14px': 'text-14px zero:text-12px wide:text-14px',
			'text-kds-16px': 'text-16px zero:text-12px wide:text-16px',
			'text-kds-18px': 'text-18px zero:text-14px wide:text-18px',
			'text-kds-20px': 'text-20px zero:text-16px wide:text-20px',
		},
		{
			'text-kds-icon-28px': 'text-28px zero:text-18px wide:text-28px',
		},
		{
			'py-kds-12px': 'py-12px  zero:py-6px wide:py-12px ',
			'py-kds-16px': 'py-16px  zero:py-8px wide:py-16px ',

			'px-kds-10px': 'px-10px  zero:px-6px wide:px-10px ',
			'px-kds-12px': 'px-12px  zero:px-6px wide:px-12px ',
			'px-kds-16px': 'px-16px  zero:px-8px wide:px-16px ',
		},
		{
			layers: 'relative',
			'r-layer': 'relative w-full h-full',
			'r-layer-content': 'relative ',
			'a-layer': 'absolute w-full h-full top-0 left-0',
			'f-layer': 'fixed w-full h-full top-0 left-0 right-0 bottom-0 in-vis',
			vis: 'pointer-events-auto',
			'in-vis': 'pointer-events-none',
		},
	],
	theme: {
		breakpoints: getUhoBreakpointsList(),
	},

	presets: [
		presetUno(),
		presetTheme<Theme>({
			theme: kdsThemes,
		}),
		presetIcons({
			collections: {
				kds: () => kdsIcons,
			},
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle',
			},
		}),
		presetWebFonts({
			provider: 'google', // default provider
			fonts: {
				// these will extend the default theme
				sans: 'Poppins:400,500,600,700',
				mono: ['Fira Code', 'Fira Mono:400,700'],
				// custom ones
				lobster: 'Lobster',
				lato: [
					{
						name: 'Lato',
						weights: ['400', '700'],
						italic: true,
					},
					{
						name: 'sans-serif',
						provider: 'none',
					},
				],
			},
		}),
	],
});
