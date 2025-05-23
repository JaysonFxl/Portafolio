// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://jaysonfxl.github.io',
  base: process.env.NODE_ENV === 'production' ? '/Portafolio' : '',
});
