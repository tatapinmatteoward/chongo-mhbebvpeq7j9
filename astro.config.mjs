import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  site: 'https://chongo-mhbebvpeq7j9.pages.dev'
});
