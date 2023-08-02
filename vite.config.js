// vite.config.js
import legacy from '@vitejs/plugin-legacy'
import path from 'node:path'

import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  mode: 'production',
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: true,
  }
}))
