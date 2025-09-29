import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For type safety and compatibility, import process from 'node:process'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
     port: parseInt(process.env.PORT ?? '') || 4173,
    strictPort: true,
     allowedHosts: true,
  },
})
