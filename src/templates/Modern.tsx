/**
 * Modern - 现代模板
 * 左侧深色栏 + 右侧内容区，适合突出个性与技能的简历
 */
import { useTranslation } from 'react-i18next'
import type { TemplateProps } from '../types/resume'

export default function Modern({ data, themeColor = '#2d5a4a' }: TemplateProps) {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-[297mm] font-sans text-[#1a1a1a] text-[11px] print:min-h-0">
      <div className="w-[32%] flex flex-col items-center shrink-0 p-[16mm_12mm] bg-[#1a1a1a] text-[#f5f0e8]">
        {data.avatar && (
          <div className="rounded-full overflow-hidden border-2 border-white/30 shrink-0 w-[88px] h-[88px] mb-4">
            <img src={data.avatar} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <h1 className="m-0 mb-1.5 text-center font-bold text-[22px] tracking-[0.02em] leading-tight">
          {data.name || t('name')}
        </h1>
        <p className="m-0 mb-4 text-center text-[11.5px] opacity-90">
          {data.title || t('resumeTitle')}
        </p>
        <div className="w-full mb-5">
          {data.email && <div className="text-[10.5px] mb-1.5 break-all">{data.email}</div>}
          {data.phone && <div className="text-[10.5px] mb-1.5 break-all">{data.phone}</div>}
          {data.location && <div className="text-[10.5px] mb-1.5 break-all">{data.location}</div>}
        </div>
        {data.skills.length > 0 && (
          <div className="w-full">
            <h3 className="m-0 uppercase font-semibold mb-2.5 text-[10px] tracking-wider opacity-90">
              {t('sectionSkills')}
            </h3>
            <ul className="m-0 p-0 list-none text-[10.5px] leading-[1.8]">
              {data.skills.filter(Boolean).map((s, i) => (
                <li key={i} className="relative pl-3.5">
                  <span className="absolute left-0 opacity-80">·</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex-1 overflow-hidden p-[16mm_14mm]">
        {data.summary && (
          <section className="mb-5">
            <h2
              className="font-bold uppercase pb-1 m-0 mb-2.5 text-[11.5px] tracking-wider border-b-2"
              style={{ color: themeColor, borderColor: themeColor }}
            >
              {t('sectionSummary')}
            </h2>
            <p className="m-0 text-[10.5px] text-[#333] leading-[1.65]">
              {data.summary}
            </p>
          </section>
        )}

        {data.selfEvaluation && (
          <section className="mb-5">
            <h2
              className="font-bold uppercase pb-1 m-0 mb-2.5 text-[11.5px] tracking-wider border-b-2"
              style={{ color: themeColor, borderColor: themeColor }}
            >
              {t('sectionSelfEvaluation')}
            </h2>
            <p className="m-0 text-[10.5px] text-[#333] leading-[1.65]">
              {data.selfEvaluation}
            </p>
          </section>
        )}

        {data.experience.length > 0 && (
          <section className="mb-5">
            <h2
              className="font-bold uppercase pb-1 m-0 mb-3 text-[11.5px] tracking-wider border-b-2"
              style={{ color: themeColor, borderColor: themeColor }}
            >
              {t('sectionExperience')}
            </h2>
            {data.experience.map((exp, i) => (
              <div key={i} className={i < data.experience.length - 1 ? 'mb-4' : ''}>
                <div className="flex justify-between items-baseline gap-2 mb-1">
                  <span className="text-[10.5px] text-[#555]">{exp.company}</span>
                  <span className="text-[9.5px] text-[#888] whitespace-nowrap">{exp.period}</span>
                </div>
                <h3 className="m-0 mb-1.5 text-[11.5px] font-semibold">
                  {exp.position}
                </h3>
                {exp.description && (
                  <p className="m-0 text-[10.5px] text-[#333] leading-[1.6]">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {data.education.length > 0 && (
          <section className="mb-5">
            <h2
              className="font-bold uppercase pb-1 m-0 mb-3 text-[11.5px] tracking-wider border-b-2"
              style={{ color: themeColor, borderColor: themeColor }}
            >
              {t('sectionEducation')}
            </h2>
            {data.education.map((edu, i) => (
              <div key={i} className={i < data.education.length - 1 ? 'mb-4' : ''}>
                <div className="flex justify-between items-baseline gap-2 mb-1">
                  <span className="text-[10.5px] text-[#555]">{edu.school}</span>
                  <span className="text-[9.5px] text-[#888] whitespace-nowrap">{edu.period}</span>
                </div>
                <h3 className="m-0 mb-1.5 text-[11.5px] font-semibold">
                  {edu.major}
                </h3>
                {edu.description && (
                  <p className="m-0 text-[10.5px] text-[#333] leading-[1.6]">
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
              className="font-bold uppercase pb-1 m-0 mb-3 text-[11.5px] tracking-wider border-b-2"
              style={{ color: themeColor, borderColor: themeColor }}
            >
              {t('sectionProjects')}
            </h2>
            {data.projects.map((proj, i) => (
              <div key={i} className={i < data.projects.length - 1 ? 'mb-4' : ''}>
                <div className="flex justify-between items-baseline gap-2 mb-1">
                  <span className="text-[10.5px] text-[#555]">{proj.name}</span>
                  <span className="text-[9.5px] text-[#888] whitespace-nowrap">{proj.period}</span>
                </div>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9.5px] mb-1 inline-block"
                    style={{ color: themeColor }}
                  >
                    {proj.link}
                  </a>
                )}
                {proj.description && (
                  <p className="m-0 text-[10.5px] text-[#333] leading-[1.6]">
                    {proj.description}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  )
}
