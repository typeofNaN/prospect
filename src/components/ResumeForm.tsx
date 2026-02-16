/**
 * ResumeForm - 简历编辑表单
 * 基本信息、技能、工作经历、教育、项目，支持增删改
 */
import type { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Form, Input, Button, Row, Col } from 'antd'
import type { ResumeData, ExperienceItem, EducationItem, ProjectItem } from '../types/resume'

interface ResumeFormProps {
  data: ResumeData
  onChange: (patch: Partial<ResumeData>) => void
}

/** 不可变更新：用 updater(item) 替换 list[index] */
function updateList<T>(
  list: T[],
  index: number,
  updater: (item: T) => T
): T[] {
  const next = [...list]
  next[index] = updater(next[index])
  return next
}

export function ResumeForm({ data, onChange }: ResumeFormProps) {
  const { t } = useTranslation()

  const addExperience = () => {
    onChange({
      experience: [
        ...data.experience,
        { company: '', position: '', period: '', description: '' },
      ],
    })
  }
  const removeExperience = (i: number) => {
    onChange({
      experience: data.experience.filter((_, idx) => idx !== i),
    })
  }
  const updateExperience = (i: number, patch: Partial<ExperienceItem>) => {
    onChange({
      experience: updateList(data.experience, i, (item) => ({ ...item, ...patch })),
    })
  }

  const addEducation = () => {
    onChange({
      education: [
        ...data.education,
        { school: '', major: '', period: '', description: '' },
      ],
    })
  }
  const removeEducation = (i: number) => {
    onChange({ education: data.education.filter((_, idx) => idx !== i) })
  }
  const updateEducation = (i: number, patch: Partial<EducationItem>) => {
    onChange({
      education: updateList(data.education, i, (item) => ({ ...item, ...patch })),
    })
  }

  const addProject = () => {
    onChange({
      projects: [
        ...data.projects,
        { name: '', period: '', description: '', link: '' },
      ],
    })
  }
  const removeProject = (i: number) => {
    onChange({ projects: data.projects.filter((_, idx) => idx !== i) })
  }
  const updateProject = (i: number, patch: Partial<ProjectItem>) => {
    onChange({
      projects: updateList(data.projects, i, (item) => ({ ...item, ...patch })),
    })
  }

  const addSkill = () => {
    onChange({ skills: [...data.skills, ''] })
  }
  const removeSkill = (i: number) => {
    onChange({ skills: data.skills.filter((_, idx) => idx !== i) })
  }
  const updateSkill = (i: number, value: string) => {
    const next = [...data.skills]
    next[i] = value
    onChange({ skills: next })
  }

  /** 读取图片为 base64，写入 avatar */
  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = () => onChange({ avatar: reader.result as string })
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  return (
    <Form layout="vertical" className="max-w-full">
      <Card size="small" title={t('basicInfo')} className="mb-6">
        <Form.Item label={t('avatar')}>
          <div className="flex items-start gap-4">
            <div
              className={[
                'relative shrink-0 w-[88px] h-[88px] rounded-lg border-2 border-dashed overflow-hidden',
                data.avatar
                  ? 'border-[#d9d9d9] bg-transparent'
                  : 'border-[#d9d9d9] bg-[#fafafa] hover:border-[#2d5a4a] hover:bg-[#f0f7f5]',
              ].join(' ')}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                style={{ fontSize: 0, lineHeight: 0 }}
                tabIndex={0}
                aria-label={t('avatar')}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none" aria-hidden>
                {data.avatar ? (
                  <img
                    src={data.avatar}
                    alt=""
                    className="block w-full h-full object-cover object-center"
                  />
                ) : (
                  <span className="text-3xl text-[#bfbfbf] leading-none">👤</span>
                )}
              </div>
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-1">
              <p className="text-xs text-[#666] m-0 leading-relaxed">{t('avatarUploadHint')}</p>
              {data.avatar && (
                <Button
                  type="link"
                  danger
                  size="small"
                  className="!p-0 !h-auto !text-xs"
                  onClick={() => onChange({ avatar: '' })}
                >
                  {t('remove')}
                </Button>
              )}
            </div>
          </div>
        </Form.Item>
        <Form.Item label={t('name')}>
          <Input
            value={data.name}
            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange({ name: e.target.value })}
            placeholder={t('placeholderName')}
          />
        </Form.Item>
        <Form.Item label={t('jobTitle')}>
          <Input
            value={data.title}
            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange({ title: e.target.value })}
            placeholder={t('placeholderJob')}
          />
        </Form.Item>
        <Form.Item label={t('email')}>
          <Input
            type="email"
            value={data.email}
            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange({ email: e.target.value })}
            placeholder={t('placeholderEmail')}
          />
        </Form.Item>
        <Form.Item label={t('phone')}>
          <Input
            value={data.phone}
            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange({ phone: e.target.value })}
            placeholder={t('placeholderPhone')}
          />
        </Form.Item>
        <Form.Item label={t('location')}>
          <Input
            value={data.location}
            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange({ location: e.target.value })}
            placeholder={t('placeholderLocation')}
          />
        </Form.Item>
        <Form.Item label={t('summary')}>
          <Input.TextArea
            value={data.summary}
            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange({ summary: e.target.value })}
            placeholder={t('placeholderSummary')}
            rows={3}
          />
        </Form.Item>
        <Form.Item label={t('selfEvaluation')}>
          <Input.TextArea
            value={data.selfEvaluation}
            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange({ selfEvaluation: e.target.value })}
            placeholder={t('placeholderSelfEvaluation')}
            rows={3}
          />
        </Form.Item>
        <Form.Item label={t('skills')}>
          {data.skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-2 mb-2">
              <Input
                value={skill}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateSkill(i, e.target.value)}
                placeholder={t('placeholderSkills')}
                className="flex-1"
              />
              <Button type="link" danger size="small" onClick={() => removeSkill(i)}>
                {t('remove')}
              </Button>
            </div>
          ))}
          <Button type="dashed" size="small" onClick={addSkill}>
            + {t('addSkill')}
          </Button>
        </Form.Item>
      </Card>

      <Card
        size="small"
        title={t('experience')}
        className="mb-6"
        extra={
          <Button type="dashed" size="small" onClick={addExperience}>
            + {t('addExperience')}
          </Button>
        }
      >
        {data.experience.length === 0 && (
          <Button type="dashed" block onClick={addExperience}>
            + {t('addExperience')}
          </Button>
        )}
        {data.experience.map((exp, i) => (
          <Card key={i} size="small" type="inner" className="mb-3">
            <Form.Item label={t('company')}>
              <Input
                value={exp.company}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateExperience(i, { company: e.target.value })}
                placeholder={t('placeholderCompany')}
              />
            </Form.Item>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item label={t('position')}>
                  <Input
                    value={exp.position}
                    onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateExperience(i, { position: e.target.value })}
                    placeholder={t('placeholderPosition')}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={t('period')}>
                  <Input
                    value={exp.period}
                    onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateExperience(i, { period: e.target.value })}
                    placeholder={t('placeholderPeriod')}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label={t('description')}>
              <Input.TextArea
                value={exp.description}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateExperience(i, { description: e.target.value })}
                placeholder={t('placeholderDesc')}
                rows={2}
              />
            </Form.Item>
            <Button type="link" danger size="small" onClick={() => removeExperience(i)}>
              {t('remove')}
            </Button>
          </Card>
        ))}
      </Card>

      <Card
        size="small"
        title={t('education')}
        className="mb-6"
        extra={
          <Button type="dashed" size="small" onClick={addEducation}>
            + {t('addEducation')}
          </Button>
        }
      >
        {data.education.length === 0 && (
          <Button type="dashed" block onClick={addEducation}>
            + {t('addEducation')}
          </Button>
        )}
        {data.education.map((edu, i) => (
          <Card key={i} size="small" type="inner" className="mb-3">
            <Form.Item label={t('school')}>
              <Input
                value={edu.school}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateEducation(i, { school: e.target.value })}
                placeholder={t('placeholderSchool')}
              />
            </Form.Item>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item label={t('major')}>
                  <Input
                    value={edu.major}
                    onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateEducation(i, { major: e.target.value })}
                    placeholder={t('placeholderMajor')}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={t('period')}>
                  <Input
                    value={edu.period}
                    onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateEducation(i, { period: e.target.value })}
                    placeholder={t('placeholderEduPeriod')}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label={t('descriptionOptional')}>
              <Input
                value={edu.description ?? ''}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateEducation(i, { description: e.target.value })}
                placeholder={t('placeholderEduDesc')}
              />
            </Form.Item>
            <Button type="link" danger size="small" onClick={() => removeEducation(i)}>
              {t('remove')}
            </Button>
          </Card>
        ))}
      </Card>

      <Card
        size="small"
        title={t('projects')}
        extra={
          <Button type="dashed" size="small" onClick={addProject}>
            + {t('addProject')}
          </Button>
        }
      >
        {data.projects.length === 0 && (
          <Button type="dashed" block onClick={addProject}>
            + {t('addProject')}
          </Button>
        )}
        {data.projects.map((proj, i) => (
          <Card key={i} size="small" type="inner" className="mb-3">
            <Form.Item label={t('projectName')}>
              <Input
                value={proj.name}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateProject(i, { name: e.target.value })}
                placeholder={t('placeholderProjectName')}
              />
            </Form.Item>
            <Form.Item label={t('period')}>
              <Input
                value={proj.period}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateProject(i, { period: e.target.value })}
                placeholder={t('placeholderProjectPeriod')}
              />
            </Form.Item>
            <Form.Item label={t('description')}>
              <Input.TextArea
                value={proj.description}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateProject(i, { description: e.target.value })}
                placeholder={t('placeholderProjectDesc')}
                rows={2}
              />
            </Form.Item>
            <Form.Item label={t('linkOptional')}>
              <Input
                value={proj.link ?? ''}
                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateProject(i, { link: e.target.value })}
                placeholder="https://..."
              />
            </Form.Item>
            <Button type="link" danger size="small" onClick={() => removeProject(i)}>
              {t('remove')}
            </Button>
          </Card>
        ))}
      </Card>
    </Form>
  )
}
