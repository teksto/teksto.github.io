import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./pago', import.meta.url)) // 修改 assetsDir 后需同时修改，保证静态(mater)资源调用。
    }
  },

  // 修改相关配置。
  publicDir: "static", // 静态资源（公共目录'public'将全部复制于'/'目录当中，通过‘/’访问。
  build: {
    outDir: "www",
    assetsDir: "pago" // 修改开发目录 src 地址。
  }
})
