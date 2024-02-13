/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		react(),
		dts({
			include: 'src/**',
			exclude: ['src/**/*.test.tsx', 'src/**/*.stories.tsx', 'src/**/index.ts'],
		}),
	],
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: ['./test.setup.ts'],
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: '@orion/ui"',
			fileName: format => `index.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'tailwindcss'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					tailwindcss: 'tailwindcss',
				},
			},
		},
		sourcemap: true,
		emptyOutDir: true,
	},
});
