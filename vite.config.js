import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'bluebird'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: "static",
  resolve: {
    alias: {
      // "@": resolve(__dirname, "./core"),
      "vue": "vue/dist/vue.esm-bundler.js"
    }
  },

  build: {
    outDir: "pago",
    assetsDir: "core"
  },

  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./pago/main.scss"`
      }
    }
  }
})
