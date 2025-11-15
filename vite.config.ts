import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
    build: {
    rollupOptions: {
      input: {
        campaign1: './campaigns/campaign1/index.html',
        campaign2: './campaigns/campaign2/index.html',
        campaign3: './campaigns/campaign3/index.html',
        campaign4: './campaigns/campaign4/index.html',
      }
    }
  }
})

