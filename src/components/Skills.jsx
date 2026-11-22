import { skills } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Skills() {
  const all = skills.flatMap((g) => g.items)

  return (
    <section id="skills" className="section overflow-hidden">
      <div className="container-x">
        <SectionHeading
          eyebrow="02 — Skills"
          title="Tools I reach for"
          description="Grouped by where they sit in the stack, not by how impressive they sound."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 90}>
              <div className="card h-full p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-display text-base font-semibold text-white">
                    {group.group}
                  </h3>
                  <span className="font-mono text-[11px] text-slate-600">
                    0{i + 1}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* marquee */}
      <div className="relative mt-16 select-none [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {[...all, ...all].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 font-display text-lg font-medium text-slate-700"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-brand/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
