import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  plugins: [
    createVuePlugin()
  ]
})
