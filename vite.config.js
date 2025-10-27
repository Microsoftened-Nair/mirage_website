// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mirage_website/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})