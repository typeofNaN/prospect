import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators'

import { ResumeData } from '@/data/resumeData'
import store from '@/store'

export interface IResumeState {
  resume: {
    /** 头像 */
    avatar?: {
      src?: string
      shape?: string
      hidden?: boolean
    }

    /** 个人信息 */
    profile?: {
      name: string
      mobile?: string
      email?: string
      github?: string
      zhihu?: string
      /** 工作经验 xx 年 */
      workExpYear?: string
      /** 期望工作地 */
      workPlace?: string
      /** 职位 */
      positionTitle?: string
    }

    /** 教育背景 */
    educationList?: {
      edu_time: [string | undefined, string | number]
      school: string
      major?: string
      /** 学历 */
      academic_degree?: string
    }[]

    /** 工作经历 */
    workExpList?:{
      company_name: string
      department_name: string
      work_time?: [string | undefined, string | number | null]
      work_desc: string
    }[]

    /** 项目经历 */
    projectList?: {
      /** 项目名称 */
      project_name: string
      /** 担任角色 */
      project_role: string
      /** 描述 */
      project_desc?: string
      /** 项目内容，负责内容 */
      project_content?: string
      /** 项目时间 */
      project_time?: string
    }[]

    /** 个人技能 */
    skillList?: {
      /** 技能项 */
      skill_name?: string
      /** 掌握程度 */
      skill_level?: number
      /** 技能描述 */
      skill_desc?: string
    }[]

    /** 更多信息 */
    awardList?: {
      // 奖项
      award_info: string
      award_time?: string
    }[]

    /** 作品 */
    workList?: {
      work_name?: string
      work_desc?: string
      visit_link?: string
    }[]

    /** 自我介绍 */
    aboutMe?: {
      aboutMe_desc: string
    }
  }
}

@Module({
  dynamic: true,
  store,
  name: 'resume'
})
class Resume extends VuexModule {
  public resume = ResumeData
}

export const ResumeModule = getModule(Resume)
