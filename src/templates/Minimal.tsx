/**
 * Minimal - 极简模板
 * 紧凑布局，适合内容精简的简历
 */
import { useTranslation } from 'react-i18next'
import type { TemplateProps } from '../types/resume'

export default function Minimal({ data, themeColor = '#2d5a4a' }: TemplateProps) {
  const { t } = useTranslation()

  return (
    <div className="font-sans text-[#1a1a1a] p-[16mm_18mm] text-[11px] leading-[1.65]">
      <header className="flex items-start gap-5 mb-[22px]">
        {data.avatar && (
          <div className="rounded-full overflow-hidden border border-[#e5e5e5] shrink-0 w-[72px] h-[72px]">
            <img src={data.avatar} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h1 className="m-0 mb-1.5 text-[26px] font-semibold tracking-[-0.02em] leading-tight">
            {data.name || t('name')}
          </h1>
          <p className="m-0 mb-2 text-[13px] text-[#555]">
            {data.title || t('resumeTitle')}
          </p>
          <div className="text-[10.5px] text-[#666]">
            {[data.email, data.phone, data.location].filter(Boolean).join(' · ')}
          </div>
        </div>
      </header>

      {data.summary && (
        <section className="mb-5">
          <h2 className="uppercase font-semibold m-0 mb-2.5 text-[10.5px] tracking-widest text-[#888]">
            {t('sectionSummaryShort')}
          </h2>
          <p className="m-0 text-[11px] text-[#444] leading-[1.65]">
            {data.summary}
          </p>
        </section>
      )}

      {data.selfEvaluation && (
        <section className="mb-5">
          <h2 className="uppercase font-semibold m-0 mb-2.5 text-[10.5px] tracking-widest text-[#888]">
            {t('sectionSelfEvaluation')}
          </h2>
          <p className="m-0 text-[11px] text-[#444] leading-[1.65]">
            {data.selfEvaluation}
          </p>
        </section>
      )}

      {data.skills.length > 0 && (
        <section className="mb-5">
          <h2 className="uppercase font-semibold m-0 mb-2.5 text-[10.5px] tracking-widest text-[#888]">
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
        <section className="mb-5">
          <h2 className="uppercase font-semibold m-0 mb-3 text-[10.5px] tracking-widest text-[#888]">
            {t('sectionExperienceShort')}
          </h2>
          {data.experience.map((exp, i) => (
            <div key={i} className={i < data.experience.length - 1 ? 'mb-3.5' : ''}>
              <span className="font-semibold text-[11.5px]">{exp.position}</span>
              <span className="text-[10.5px] text-[#666] ml-2">
                {exp.company} · {exp.period}
              </span>
              {exp.description && (
                <p className="mt-1.5 m-0 text-[10.5px] text-[#555] leading-[1.6]">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {data.education.length > 0 && (
        <section className="mb-5">
          <h2 className="uppercase font-semibold m-0 mb-3 text-[10.5px] tracking-widest text-[#888]">
            {t('sectionEducationShort')}
          </h2>
          {data.education.map((edu, i) => (
            <div key={i} className={i < data.education.length - 1 ? 'mb-3.5' : ''}>
              <span className="font-semibold text-[11.5px]">{edu.school}</span>
              <span className="text-[10.5px] text-[#666] ml-2">
                {edu.major} · {edu.period}
              </span>
              {edu.description && (
                <p className="mt-1.5 m-0 text-[10.5px] text-[#555] leading-[1.6]">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {data.projects.length > 0 && (
        <section className="mb-0">
          <h2 className="uppercase font-semibold m-0 mb-3 text-[10.5px] tracking-widest text-[#888]">
            {t('sectionProjectsShort')}
          </h2>
          {data.projects.map((proj, i) => (
            <div key={i} className={i < data.projects.length - 1 ? 'mb-3.5' : ''}>
              <span className="font-semibold text-[11.5px]">{proj.name}</span>
              <span className="text-[10.5px] text-[#666] ml-2">{proj.period}</span>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 text-[9.5px]"
                  style={{ color: themeColor }}
                >
                  {proj.link}
                </a>
              )}
              {proj.description && (
                <p className="mt-1.5 m-0 text-[10.5px] text-[#555] leading-[1.6]">
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
