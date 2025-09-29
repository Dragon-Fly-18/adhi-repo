import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',                     // listen on all network interfaces
    port: parseInt(process.env.PORT) || 4173,
    strictPort: true,
    allowedHosts: 'all'                   // allow Render hostname
  }
})
