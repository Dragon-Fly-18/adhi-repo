import { defineConfig } from 'vite'
import react from '@vitejs/plugin-node'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0', // bind to all interfaces
    port: parseInt(process.env.PORT) || 4173,
    strictPort: true,
    allowedHosts: 'all' // allow your Render hostname
  }
})
