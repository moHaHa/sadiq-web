import React from '@vitejs/plugin-react';
import path from 'node:path';
import Unocss from 'unocss/vite';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
	resolve: {
		alias: {
			'~/': `${path.resolve(__dirname, 'src')}/`,
		},
	},
	plugins: [Unocss(), React(), checker({ typescript: true })],
});
