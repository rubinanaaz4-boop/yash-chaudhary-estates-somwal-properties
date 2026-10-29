import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps the production build portable (it can be opened from any folder).
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
})
