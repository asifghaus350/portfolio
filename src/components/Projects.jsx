import { projects, socials } from '../data/portfolio.js'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

function ProjectCard({ project, index }) {
  const featured = project.featured

  return (
    <Reveal delay={index * 90} className={featured ? 'sm:col-span-1' : ''}>
      <article className="card group flex h-full flex-col overflow-hidden p-6">
        <div className="mb-5 flex items-start justify-between gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-white/[0.03] text-brand-2 transition group-hover:border-brand/50 group-hover:text-txt">
            <Icon name="code" className="h-[18px] w-[18px]" />
          </span>
          <div className="flex items-center gap-2">
            {featured ? (
              <span className="rounded bg-gradient-to-r from-[#a78bfa] to-[#22d3ee] px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wider text-on-accent uppercase">
                Featured
              </span>
            ) : (
              <span className="font-mono text-[11px] text-slate-600">{project.year}</span>
            )}
            {project.repo && project.repo !== '#' ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} source code`}
                className="grid h-8 w-8 place-items-center rounded-md text-slate-500 transition hover:bg-white/5 hover:text-txt"
              >
                <Icon name="github" className="h-4 w-4" />
              </a>
            ) : null}
            {project.href && project.href !== '#' ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live site`}
                className="grid h-8 w-8 place-items-center rounded-md text-slate-500 transition hover:bg-white/5 hover:text-txt"
              >
                <Icon name="external" className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>

        <h3 className="font-display text-lg font-semibold text-txt">
          {project.href && project.href !== '#' ? (
            <a href={project.href} target="_blank" rel="noreferrer" className="hover:text-brand-2">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-400">
          {project.blurb}
        </p>

        {project.highlights?.length ? (
          <ul className="mt-4 space-y-2 border-t border-line pt-4">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-[13px] leading-snug text-slate-300">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-2"
                  aria-hidden="true"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5 12 5 5L20 7"
                  />
                </svg>
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.tags.map((tag) => (
            <li key={tag} className="chip !text-[10.5px]">
              {tag}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  const github = socials.find((s) => s.icon === 'github')?.href

  return (
    <section id="work" className="section relative">
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="03 — Work"
            title="Selected projects"
            description="A few things I have built end to end. Each one has a short write-up of the hard part."
          />
          <Reveal delay={150}>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost text-sm"
            >
              <Icon name="github" className="h-4 w-4" />
              All repositories
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
