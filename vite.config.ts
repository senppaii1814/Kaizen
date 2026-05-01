import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** GitHub Pages & static hosts: serve `index.html` for unknown paths on refresh. */
function spaFallback404(): import('vite').Plugin {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const index = path.join(__dirname, 'dist', 'index.html');
      const fallback = path.join(__dirname, 'dist', '404.html');
      try {
        if (fs.existsSync(index)) fs.copyFileSync(index, fallback);
      } catch {
        /* ignore */
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), spaFallback404()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
