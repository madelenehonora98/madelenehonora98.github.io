import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteExternalsPlugin({
      'vue-resource': 'VueResource',
      vue: 'Vue3',
      'vue-router': 'Vue3Router',
      pinia: 'pinia',
      lozad: 'lozad',
      'vue-i18n': 'Vue3I18n'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
