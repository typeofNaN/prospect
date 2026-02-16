/** Vite 配置：UnoCSS + React，路径别名 @/ -> src/ */
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  base: '/prospect/',
  plugins: [UnoCSS(), react()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
})
