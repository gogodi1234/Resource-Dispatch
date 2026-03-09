import { defineConfig } from 'vite'
import react from '@vitejs/react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 這裡設為 './' 確保在 GitHub Pages 或 Vercel 都能正確載入路徑
  base: './',
})
