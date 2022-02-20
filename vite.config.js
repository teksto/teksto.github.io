import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./core', import.meta.url)),
      'vue': 'vue/dist/vue.esm-bundler.js' // 解决不能直接使用 template 的问题。
    }
  },

  publicDir: "static",
  build: {
    outDir: "pago",
    assetsDir: "core"
  },
  css: {},
  server: {}
})
