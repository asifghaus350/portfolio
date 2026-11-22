import { about, certifications, education, languages, profile } from '../data/portfolio.js'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="01 — About"
          title="Developer with a product mindset"
          description="I like problems where the interface and the data model have to agree with each other."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-[15px] leading-[1.85] text-slate-400">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={280}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {about.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <span className="mt-1.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand/15">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div className="card p-6">
              <div className="flex items-center gap-3 border-b border-line pb-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand/25 to-brand-2/20 text-brand-2">
                  <Icon name="code" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{profile.name}</p>
                  <p className="font-mono text-[11px] text-slate-500">
                    {profile.role} · {profile.location}
                  </p>
                </div>
              </div>

              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-[11px] tracking-wider text-slate-500 uppercase">
                    Education
                  </dt>
                  <dd className="mt-1 text-slate-300">
                    {education.degree}
                    <span className="block text-xs text-slate-500">
                      {education.school} · {education.period}
                    </span>
                    {education.detail ? (
                      <span className="mt-0.5 block text-xs text-slate-500">
                        {education.detail}
                      </span>
                    ) : null}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] tracking-wider text-slate-500 uppercase">
                    Currently
                  </dt>
                  <dd className="mt-1 text-slate-300">{profile.availability}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] tracking-wider text-slate-500 uppercase">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-brand-2 underline-offset-4 hover:underline"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] tracking-wider text-slate-500 uppercase">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${profile.phone.replace(/\s/g, '')}`}
                      className="text-slate-300 underline-offset-4 hover:text-brand-2 hover:underline"
                    >
                      {profile.phone}
                    </a>
                  </dd>
                </div>
                {certifications?.length ? (
                  <div>
                    <dt className="font-mono text-[11px] tracking-wider text-slate-500 uppercase">
                      Certifications
                    </dt>
                    <dd className="mt-1.5 flex flex-wrap gap-1.5">
                      {certifications.map((c) => (
                        <span key={c.label} className="chip !text-[10.5px]">
                          {c.label}
                        </span>
                      ))}
                    </dd>
                  </div>
                ) : null}
                {languages?.length ? (
                  <div>
                    <dt className="font-mono text-[11px] tracking-wider text-slate-500 uppercase">
                      Languages
                    </dt>
                    <dd className="mt-1 text-slate-300">{languages.join(' · ')}</dd>
                  </div>
                ) : null}
              </dl>

              <a
                href={profile.resumeUrl}
                download
                className="btn btn-ghost mt-6 w-full text-sm"
              >
                <Icon name="download" className="h-4 w-4" />
                Download résumé
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
