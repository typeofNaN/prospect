/**
 * Prospect - 在线简历生成器
 * 入口：加载 UnoCSS、i18n，挂载 React 根组件
 */
import 'virtual:uno.css'
import './locales/i18n'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
