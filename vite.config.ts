import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from a repo subpath on GitHub Pages. Change to '/' when a custom
  // domain (root) is attached.
  base: '/urban-projects-website/',
  plugins: [react()],
})
