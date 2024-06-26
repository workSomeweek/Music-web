import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from "autoprefixer";
import pxToViewport from 'postcss-px-to-viewport';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import {resolve} from "node:path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        pxToViewport({
          unitToConvert: 'px',
          viewportWidth: 1320,
          propList: ['*'],
        })

      ]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 5174,
    proxy: {
      "/music-control-system/service": {
        target: 'http://localhost:3000',
      }
    }
  }
})
