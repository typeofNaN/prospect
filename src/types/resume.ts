/**
 * 简历数据结构
 * 定义各模块字段及默认值，供表单与模板使用
 */

/** 工作经历单项 */
export interface ExperienceItem {
  company: string
  position: string
  period: string
  description: string
}

/** 教育背景单项 */
export interface EducationItem {
  school: string
  major: string
  period: string
  description?: string
}

/** 项目经历单项 */
export interface ProjectItem {
  name: string
  period: string
  description: string
  link?: string
}

/** 完整简历数据 */
export interface ResumeData {
  avatar: string
  name: string
  title: string
  email: string
  phone: string
  location: string
  summary: string
  selfEvaluation: string
  skills: string[]
  experience: ExperienceItem[]
  education: EducationItem[]
  projects: ProjectItem[]
}

/** 模板 ID */
export type TemplateId = 'classic' | 'modern' | 'minimal'

/** 模板组件 props */
export interface TemplateProps {
  data: ResumeData
  themeColor?: string
}

const initialResumeData: ResumeData = {
  avatar: '',
  name: '张三',
  title: '前端开发工程师',
  email: 'zhangsan@example.com',
  phone: '138 0000 0000',
  location: '北京',
  summary: '3 年前端开发经验，熟悉 React、TypeScript 与工程化实践，有从 0 到 1 搭建项目与团队协作经验。',
  selfEvaluation: '学习能力强，注重代码质量与可维护性；具备良好的沟通与团队协作能力，能独立负责模块开发与推进。',
  skills: ['React', 'TypeScript', 'Vite', 'Node.js', 'CSS'],
  experience: [
    {
      company: '某某科技有限公司',
      position: '前端工程师',
      period: '2021.07 - 至今',
      description: '负责核心业务前端开发与组件库维护；参与技术选型与代码评审。',
    },
  ],
  education: [
    {
      school: '某某大学',
      major: '计算机科学与技术',
      period: '2017 - 2021',
      description: '本科',
    },
  ],
  projects: [
    {
      name: '在线简历生成器',
      period: '2024.01 - 2024.03',
      description: '基于 React + TypeScript 的简历编辑与导出工具，支持多模板与 PDF 导出。',
      link: 'https://example.com/resume',
    },
  ],
}

/** 默认简历数据（带示例初始值），用于表单初始状态与导入时的合并基准 */
export const defaultResumeData: ResumeData = initialResumeData

/** 获取新的默认数据副本，供 useState 惰性初始化，避免多处共享同一引用 */
export function getDefaultResumeData(): ResumeData {
  return JSON.parse(JSON.stringify(initialResumeData))
}
