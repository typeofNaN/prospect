/** UnoCSS 配置：主题色、字体、预检样式、动态类白名单 */
import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['src/**/*.{tsx,ts,jsx,js,html}'],
  },
  /** 条件/动态类名白名单，打包时保证这些类被生成，避免样式丢失 */
  safelist: [
    'mb-4',
    'mb-3.5',
    'border-[#d9d9d9]',
    'bg-transparent',
    'bg-[#fafafa]',
    'hover:border-[#2d5a4a]',
    'hover:bg-[#f0f7f5]',
  ],
  theme: {
    breakpoints: {
      app: '900px',
    },
    colors: {
      accent: '#2d5a4a',
      'accent-light': '#3d7a64',
      muted: '#5c5c5c',
      border: '#e0d9cc',
      page: '#f5f0e8',
      surface: '#fffef9',
      ink: '#1a1a1a',
    },
    fontFamily: {
      sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      serif: ['Lora', '"Noto Serif SC"', 'serif'],
    },
  },
  preflights: [
    {
      getCSS: () => `
        * { box-sizing: border-box; }
        body {
          margin: 0;
          min-height: 100vh;
          font-family: "DM Sans", system-ui, sans-serif;
          background: #f5f0e8;
          color: #1a1a1a;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }
        #root { min-height: 100vh; }
        button { font-family: inherit; cursor: pointer; }
        input, textarea { font-family: inherit; }
        @media print { body { background: #fff; } }
      `,
    },
  ],
})
