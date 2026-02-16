/**
 * 模板注册表
 * 将 TemplateId 映射到对应组件，供 App 渲染
 */
import type { TemplateId, TemplateProps } from '../types/resume'
import Classic from './Classic'
import Modern from './Modern'
import Minimal from './Minimal'

export type TemplateComponent = (props: TemplateProps) => JSX.Element

const templates = {
  classic: Classic,
  modern: Modern,
  minimal: Minimal,
} as Record<TemplateId, TemplateComponent>

export default templates
