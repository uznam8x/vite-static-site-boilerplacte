/**
 * @type {import('vite').UserConfig}
 */
import vituum from 'vituum';
import nunjucks from '@vituum/vite-plugin-nunjucks';
import path from 'path';
import { twMerge } from './vite/plugins/nunjucks/filters';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  resolve: {
    alias: [{ find: '@src', replacement: path.resolve(__dirname, 'src') }],
  },

  build: {
    emptyOutDir: true,
    rollupOptions: {},
  },

  plugins: [
    vituum(),
    nunjucks({
      root: './src',
      filters: { twMerge },
    }),
  ],
});
