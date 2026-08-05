import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Custom domain (urbanprojectsltd.com) serves from root.
  base: '/',
  plugins: [react()],
})
