/**
 * TemplateSelector - 模板选择器
 * 经典 / 现代 / 极简 三种模板切换
 */
import { Segmented } from 'antd'
import type { TemplateId } from '../types/resume'

const options: { id: TemplateId; label: string; value: TemplateId }[] = [
  { id: 'classic', label: '经典', value: 'classic' },
  { id: 'modern', label: '现代', value: 'modern' },
  { id: 'minimal', label: '极简', value: 'minimal' },
]

interface TemplateSelectorProps {
  value: TemplateId
  onChange: (id: TemplateId) => void
}

export function TemplateSelector({ value, onChange }: TemplateSelectorProps) {
  return (
    <div className="mb-5">
      <div className="mb-2 text-xs text-muted font-medium">选择模板</div>
      <Segmented
        block
        options={options.map((o) => ({ label: o.label, value: o.value }))}
        value={value}
        onChange={(v) => onChange(v as TemplateId)}
      />
    </div>
  )
}
