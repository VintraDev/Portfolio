import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolvePath } from 'react-router-dom'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      src: resolvePath(__dirname, 'src'),
      pages: resolvePath(__dirname, 'src/pages'),
      components: resolvePath(__dirname, 'src/components'),
    }
  }
})
