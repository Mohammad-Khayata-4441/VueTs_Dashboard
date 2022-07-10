; import { fileURLToPath, URL } from 'url';
import vitePluginImp from 'vite-plugin-imp';
import tailwindConfig from './tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig';
const fullConfig = resolveConfig(tailwindConfig)

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vitePluginImp({
    libList: [
      {
        libName: 'antd',
        style: (name) => `antd/es/${name}/style`,
      },
    ],
  }),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@config': fileURLToPath(new URL('./AppConfig', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': fullConfig.theme.colors.primary,
        },
      },
    },
  },
})
