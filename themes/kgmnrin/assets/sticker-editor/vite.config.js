import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	base: '/sticker-editor/',
	plugins: [react()],
	build: {
		outDir: "../../../../static/sticker-editor",
		emptyOutDir: true,
	},
})
