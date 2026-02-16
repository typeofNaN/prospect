/**
 * Classic - 经典模板
 * 居中排版，分割线强调，适合传统求职场景
 */
import { useTranslation } from 'react-i18next'
import type { TemplateProps } from '../types/resume'

export default function Classic({ data, themeColor = '#2d5a4a' }: TemplateProps) {
  const { t } = useTranslation()

  return (
    <div className="font-serif text-[#222] p-[14mm_16mm] text-[11.5px] leading-[1.6]">
      <header
        className="flex items-center gap-5 pb-3 mb-4 border-b-2"
        style={{ borderColor: themeColor }}
      >
        {data.avatar && (
          <div
            className="shrink-0 rounded-full overflow-hidden border-2 bg-gray-100 w-16 h-16"
            style={{ borderColor: themeColor }}
          >
            <img src={data.avatar} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex-1 text-center min-w-0">
          <h1 className="m-0 mb-1 text-[24px] font-bold tracking-[0.02em]">
            {data.name || t('name')}
          </h1>
          <p className="m-0 mb-1.5 text-[13px] text-[#444]">
            {data.title || t('resumeTitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-0.5 text-[10.5px] text-[#555]">
            {data.email && <span>{data.email}</span>}
            {data.phone && <span>{data.phone}</span>}
            {data.location && <span>{data.location}</span>}
          </div>
        </div>
      </header>

      {data.summary && (
        <section className="mb-4">
          <h2
            className="uppercase border-b pb-1 m-0 mb-2 text-[11px] font-bold tracking-[0.06em] border-[#ddd]"
            style={{ color: themeColor }}
          >
            {t('sectionSummary')}
          </h2>
          <p className="m-0 text-justify text-[11px] text-[#333] leading-[1.65]">
            {data.summary}
          </p>
        </section>
      )}

      {data.selfEvaluation && (
        <section className="mb-4">
          <h2
            className="uppercase border-b pb-1 m-0 mb-2 text-[11px] font-bold tracking-[0.06em] border-[#ddd]"
            style={{ color: themeColor }}
          >
            {t('sectionSelfEvaluation')}
          </h2>
          <p className="m-0 text-justify text-[11px] text-[#333] leading-[1.65]">
            {data.selfEvaluation}
          </p>
        </section>
      )}

      {data.skills.length > 0 && (
        <section className="mb-4">
          <h2
            className="uppercase border-b pb-1 m-0 mb-2 text-[11px] font-bold tracking-[0.06em] border-[#ddd]"
            style={{ color: themeColor }}
          >
            {t('sectionSkills')}
          </h2>
          <ul className="m-0 p-0 list-none text-[11px] text-[#444] leading-[1.8]">
            {data.skills.filter(Boolean).map((s, i) => (
              <li key={i} className="relative pl-3.5">
                <span className="absolute left-0" style={{ color: themeColor }}>·</span>
                {s}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.experience.length > 0 && (
        <section className="mb-4">
          <h2
            className="uppercase border-b pb-1 m-0 mb-2.5 text-[11px] font-bold tracking-[0.06em] border-[#ddd]"
            style={{ color: themeColor }}
          >
            {t('sectionExperience')}
          </h2>
          {data.experience.map((exp, i) => (
            <div key={i} className={i < data.experience.length - 1 ? 'mb-3.5' : ''}>
              <div className="flex justify-between items-baseline gap-2">
                <strong className="text-xs font-semibold">{exp.position}</strong>
                <span className="text-[10.5px] text-[#555] whitespace-nowrap">{exp.period}</span>
              </div>
              <div className="text-[10.5px] text-[#555] mb-1">{exp.company}</div>
              {exp.description && (
                <p className="m-0 text-[10.5px] text-[#444] text-justify leading-[1.6]">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {data.education.length > 0 && (
        <section className="mb-4">
          <h2
            className="uppercase border-b pb-1 m-0 mb-2.5 text-[11px] font-bold tracking-[0.06em] border-[#ddd]"
            style={{ color: themeColor }}
          >
            {t('sectionEducation')}
          </h2>
          {data.education.map((edu, i) => (
            <div key={i} className={i < data.education.length - 1 ? 'mb-3.5' : ''}>
              <div className="flex justify-between items-baseline gap-2">
                <strong className="text-xs font-semibold">{edu.school}</strong>
                <span className="text-[10.5px] text-[#555] whitespace-nowrap">{edu.period}</span>
              </div>
              <div className="text-[10.5px] text-[#555] mb-1">{edu.major}</div>
              {edu.description && (
                <p className="m-0 text-[10.5px] text-[#444] text-justify leading-[1.6]">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {data.projects.length > 0 && (
        <section className="mb-0">
          <h2
            className="uppercase border-b pb-1 m-0 mb-2.5 text-[11px] font-bold tracking-[0.06em] border-[#ddd]"
            style={{ color: themeColor }}
          >
            {t('sectionProjects')}
          </h2>
          {data.projects.map((proj, i) => (
            <div key={i} className={i < data.projects.length - 1 ? 'mb-3.5' : ''}>
              <div className="flex justify-between items-baseline gap-2">
                <strong className="text-xs font-semibold">{proj.name}</strong>
                <span className="text-[10.5px] text-[#555] whitespace-nowrap">{proj.period}</span>
              </div>
              {proj.link && (
                <div className="text-[10.5px] mb-1" style={{ color: themeColor }}>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ color: themeColor }}>
                    {proj.link}
                  </a>
                </div>
              )}
              {proj.description && (
                <p className="m-0 text-[10.5px] text-[#444] text-justify leading-[1.6]">
                  {proj.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  )
}
