import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // un comment following line to make the server accessible from other devices in the same network
  server: {
    host: '0.0.0.0'
  }
})
