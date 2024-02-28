import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'

const config = {
  server: { port: 3000 },
  base: '/',
  plugins: [
    vue()
  ],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } }
}

export default defineConfig(config);