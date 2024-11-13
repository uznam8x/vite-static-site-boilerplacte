/**
 * @type {import('vite').UserConfig}
 */
import vituum from 'vituum';
import nunjucks from '@vituum/vite-plugin-nunjucks';
import { twMerge } from './src/utils/nunjucks/filters';
import slots from './src/utils/nunjucks/filters/slots/server';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') }
    ],
  },

  build: {
    emptyOutDir: true,
    outDir: 'prebuild',
    rollupOptions: {},
  },

  plugins: [
    vituum(),
    nunjucks({
      root: './src',
      filters: { twMerge, slots },
    }),
  ],
});
