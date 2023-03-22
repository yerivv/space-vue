import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:` // just variables loaded globally
        @import "./src/assets/scss/setup/_reset";
        @import "./src/assets/scss/setup/_fonts";
        @import "./src/assets/scss/setup/_colors";
        @import "./src/assets/scss/setup/_variables";
        @import "./src/assets/scss/setup/_mixins";
      `
      }
    }
  },
  server:{
    port: 9015
  }
})
