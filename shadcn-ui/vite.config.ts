import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  preview: {
    host: '0.0.0.0',
    port: Number(import.meta.env.PORT) || 4173,
    strictPort: true,
    allowedHosts: ['adhi-repo.onrender.com', 'localhost'],
  },
});
