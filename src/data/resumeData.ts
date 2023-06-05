/**
 * @description 默认简历数据
 */
export const ResumeData = {
  avatar: {
    src: undefined,
    shape: 'circle',
    hidden: false,
  },
  profile: {
    name: '姓名',
    mobile: '1',
    email: '1',
    github: '1',
    zhihu: '1',
    workExpYear: '1',
    workPlace: '1',
    positionTitle: '1'
  },
  educationList: [
    {
      edu_time: ['', ''],
      school: '',
      major: '',
      academic_degree: ''
    }
  ],
  workExpList: [
    {
      company_name: '',
      department_name: '',
      work_time: ['', ''],
      work_desc: ''
    }
  ],
  projectList: [
    {
      project_name: '',
      project_role: '',
      project_desc: '',
      project_content: '',
      project_time: ''
    }
  ],
  skillList: [
    {
      skill_name: '',
      skill_level: 0,
      skill_desc: ''
    }
  ],
  awardList: [
    {
      award_info: '',
      award_time: ''
    }
  ],
  workList: [
    {
      work_name: '',
      work_desc: '',
      visit_link: ''
    }
  ],
  aboutMe: {
    aboutMe_desc: ''
  }
}
