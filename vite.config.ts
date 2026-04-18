import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages（プロジェクトサイト）は /リポジトリ名/ がルート。CI で VITE_BASE_PATH を渡す。
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? '/',
})
