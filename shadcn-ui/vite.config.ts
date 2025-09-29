import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // if your app is served at root
  build: {
    outDir: 'dist', // default, but explicit
  },
});
