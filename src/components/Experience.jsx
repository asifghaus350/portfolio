import { experience } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="04 — Experience"
          title="Where I have worked"
          description="Roles and the outcomes that mattered, not a list of responsibilities."
        />

        <ol className="relative mt-14 border-l border-line pl-6 sm:pl-8">
          {experience.map((job, i) => (
            <li key={`${job.company}-${job.period}`} className="relative pb-12 last:pb-0">
              <span
                className="absolute top-1.5 -left-[33px] grid h-3 w-3 place-items-center rounded-full border-2 border-ink bg-brand-2 sm:-left-[41px]"
                aria-hidden="true"
              />

              <Reveal delay={i * 100}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-txt">
                    {job.role}
                  </h3>
                  <span className="text-sm text-brand-2">{job.company}</span>
                  {job.period.includes('Present') ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Current
                    </span>
                  ) : null}
                  <span className="ml-auto font-mono text-[11px] text-slate-600">
                    {job.period}
                  </span>
                </div>

                {job.tags?.length ? (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {job.tags.map((t) => (
                      <li key={t} className="chip !text-[10.5px]">
                        {t}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-[13.5px] leading-relaxed text-slate-400"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
