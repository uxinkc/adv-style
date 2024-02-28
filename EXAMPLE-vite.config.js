import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import copy from 'rollup-plugin-copy'
import path from 'path';

const useMath = `@use 'sass:math' as math;`
const advScssPath = './node_modules/adv-style/src/stylesheets/adv-style.scss';
const advFontsPath = './node_modules/adv-style/src/fonts/';
const advImagesPath = './node_modules/adv-style/src/img/';

const config = {
  server: { port: 3001 },
  base: '/', // Example: '/eis-application/'
  plugins: [
    copy({
      targets: [
        { src: advFontsPath, dest: 'public' },
        { src: advImagesPath, dest: 'public' }
      ]
    }),
    react()
  ],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `${useMath} @import "${advScssPath}";`
      }
    }
  }
};

export default defineConfig(config);