/**
 * 国际化配置
 * react-i18next，支持 zh / en，语言从 URL ?lang= 读取
 */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh from './lang/zh-CN.json'
import en from './lang/en.json'

export type Lang = 'zh' | 'en'

const resources = {
  zh: { translation: zh },
  en: { translation: en },
}

/** 根据 URL ?lang=en 决定初始语言 */
const getInitialLang = (): Lang => {
  if (typeof window === 'undefined') return 'zh'
  const p = new URLSearchParams(window.location.search)
  return p.get('lang') === 'en' ? 'en' : 'zh'
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLang(),
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
