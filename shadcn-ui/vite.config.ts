// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { outDir: 'dist' },
  server: { 
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 4173
    // 'process' is available in Node.js, but ensure @types/node is installed for TypeScript
  }
})
