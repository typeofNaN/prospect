/**
 * App - 根组件
 * 布局、URL 参数同步、模板/主题/语言切换、导入导出、打印
 */
import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ConfigProvider, Layout, Button, Segmented, Select, Space, message, Tooltip } from 'antd'
import { Icon } from '@iconify/react'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import type { ResumeData, TemplateId } from './types/resume'
import { defaultResumeData, getDefaultResumeData } from './types/resume'
import i18n, { type Lang } from './locales/i18n'
import { ResumeForm } from './components/ResumeForm'
import { ResumePreview } from './components/ResumePreview'
import templates from './templates'

const { Header, Sider, Content } = Layout

/** 主题色预设（中文命名） */
const THEME_COLORS = [
  { label: '松烟', value: '#2d5a4a' },
  { label: '靛青', value: '#1677ff' },
  { label: '藤紫', value: '#722ed1' },
  { label: '胭脂', value: '#eb2f96' },
  { label: '琥珀', value: '#fa8c16' },
  { label: '鸦青', value: '#1a365d' },
  { label: '竹青', value: '#2d6a4f' },
  { label: '月白', value: '#3b82f6' },
  { label: '檀褐', value: '#78350f' },
  { label: '朱砂', value: '#dc2626' },
  { label: '黛蓝', value: '#1e3a5f' },
  { label: '茶白', value: '#0f766e' },
  { label: '绛紫', value: '#5b21b6' },
  { label: '赭石', value: '#c2410c' },
  { label: '藏青', value: '#1e40af' },
]

/** 从 URL search 解析 template、lang、mode */
function parseUrlParams() {
  const p = new URLSearchParams(window.location.search)
  return {
    template: (p.get('template') as TemplateId) || 'classic',
    lang: (p.get('lang') === 'en' ? 'en' : 'zh') as Lang,
    mode: p.get('mode') === 'preview' ? 'preview' : 'edit',
  }
}

/** 将 template/lang/mode 写回 URL，支持分享链接 */
function setUrlParams(params: { template?: TemplateId; lang?: string; mode?: string }) {
  const p = new URLSearchParams(window.location.search)
  if (params.template != null) p.set('template', params.template)
  if (params.lang != null) p.set('lang', params.lang)
  if (params.mode != null) p.set('mode', params.mode)
  const q = p.toString()
  window.history.replaceState(null, '', q ? `?${q}` : window.location.pathname)
}

function App() {
  const [data, setData] = useState<ResumeData>(() => getDefaultResumeData())
  const [templateId, setTemplateId] = useState<TemplateId>('classic')
  const [lang, setLang] = useState<Lang>('zh')
  const [mode, setMode] = useState<'edit' | 'preview'>('edit')
  const [themeColor, setThemeColor] = useState('#2d5a4a')

  const { t } = useTranslation()

  useEffect(() => {
    const { template, lang: l, mode: m } = parseUrlParams()
    setTemplateId(['classic', 'modern', 'minimal'].includes(template) ? template : 'classic')
    setLang(l)
    setMode(m === 'preview' ? 'preview' : 'edit')
    i18n.changeLanguage(l)
  }, [])

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  useEffect(() => {
    setUrlParams({ template: templateId, lang, mode })
  }, [templateId, lang, mode])

  const updateData = useCallback((patch: Partial<ResumeData>) => {
    setData((prev) => ({ ...prev, ...patch }))
  }, [])

  const handlePrint = () => window.print()

  /** 导出 resume 为 JSON 文件 */
  const handleExport = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'resume.json'
    a.click()
    URL.revokeObjectURL(a.href)
    message.success(t('exportSuccess'))
  }

  /** 从 JSON 文件导入，合并到 defaultResumeData */
  const handleImport = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json,application/json'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = () => {
        try {
          const json = JSON.parse(reader.result as string) as ResumeData
          if (json && typeof json === 'object') {
            setData({ ...defaultResumeData, ...json })
            message.success(t('importSuccess'))
          } else {
            message.error(t('importError'))
          }
        } catch {
          message.error(t('importError'))
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }

  const TemplateComponent = templates[templateId]
  const antdLocale = lang === 'zh' ? zhCN : enUS

  const templateOptions = [
    { value: 'classic' as const, label: t('templateClassic') },
    { value: 'modern' as const, label: t('templateModern') },
    { value: 'minimal' as const, label: t('templateMinimal') },
  ]

  return (
    <ConfigProvider
      locale={antdLocale}
      theme={{
        token: { colorPrimary: themeColor },
      }}
    >
      <Layout className="print:!block h-screen overflow-hidden flex flex-col">
        <Header
          className="print:!hidden shrink-0 bg-white border-b border-[#f0f0f0] px-6 flex items-center justify-between flex-wrap gap-3"
        >
          <Space size="middle">
            <span className="font-semibold text-xl" style={{ color: themeColor }}>{t('appTitle')}</span>
            <Segmented
              size="small"
              value={mode}
              options={[
                { value: 'edit', label: t('edit') },
                { value: 'preview', label: t('preview') },
              ]}
              onChange={(v) => setMode(v === 'preview' ? 'preview' : 'edit')}
            />
          </Space>

          <Space size="middle" wrap align="center">
            <div className="flex items-center gap-1.5">
              <span className="text-[#666] text-sm whitespace-nowrap">{t('template')}</span>
              <Select
                size="small"
                value={templateId}
                onChange={setTemplateId}
                options={templateOptions}
                style={{ width: 90 }}
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#666] text-sm whitespace-nowrap">{t('theme')}</span>
              <Select
                size="small"
                value={themeColor}
                onChange={setThemeColor}
                options={THEME_COLORS}
                style={{ width: 80 }}
              />
            </div>
            <Tooltip title={lang === 'zh' ? t('switchToEnglish') : t('switchToChinese')}>
              <Button type="text" size="small" icon={<Icon icon="mdi:translate" />} onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} />
            </Tooltip>
            <Tooltip title={t('exportConfig')}>
              <Button type="text" size="small" icon={<Icon icon="mdi:download-outline" />} onClick={handleExport} />
            </Tooltip>
            <Tooltip title={t('importConfig')}>
              <Button type="text" size="small" icon={<Icon icon="mdi:upload-outline" />} onClick={handleImport} />
            </Tooltip>
            {mode === 'preview' && (
              <Button type="primary" size="small" onClick={handlePrint}>{t('print')}</Button>
            )}
          </Space>
        </Header>

        <Layout className="print:!block flex-row flex-1 min-h-0 overflow-hidden">
          <Content
            className="flex flex-col items-center p-6 print:!p-0 bg-[#f5f0e8] overflow-auto flex-1 min-w-0"
          >
            <div
              className="w-full flex-1 print:shadow-none max-w-[210mm] min-h-[297mm] bg-white rounded-sm overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
            >
              <ResumePreview>
                <TemplateComponent data={data} themeColor={themeColor} />
              </ResumePreview>
            </div>
          </Content>

          {mode === 'edit' && (
            <Sider
              width={380}
              className="print:!hidden bg-white border-l border-[#f0f0f0] overflow-auto"
            >
              <div className="p-5">
                <ResumeForm data={data} onChange={updateData} />
              </div>
            </Sider>
          )}
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default App
