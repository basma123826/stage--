import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Compatble/', // ⚠️ Ce doit être le nom EXACT du repo GitHub
  plugins: [react()],
})



