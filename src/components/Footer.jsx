import { navLinks, profile, socials } from '../data/portfolio.js'
import Icon from './Icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink-2/40">
      <div className="container-x py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#a78bfa] to-[#22d3ee] text-sm font-bold text-on-accent">
                {profile.shortName}
              </span>
              <span className="text-sm font-semibold text-slate-200">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 text-[13px] leading-relaxed text-slate-500">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <h3 className="font-mono text-[11px] tracking-wider text-slate-600 uppercase">
                Navigate
              </h3>
              <ul className="mt-3 space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-[13px] text-slate-400 transition hover:text-txt"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[11px] tracking-wider text-slate-600 uppercase">
                Elsewhere
              </h3>
              <ul className="mt-3 space-y-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-[13px] text-slate-400 transition hover:text-txt"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="font-mono text-[11px] text-slate-600">
            © {year} {profile.name}. Built with React &amp; Tailwind CSS.
          </p>
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-[11px] text-slate-500 transition hover:text-slate-300"
          >
            Back to top
            <Icon
              name="arrowDown"
              className="h-3.5 w-3.5 rotate-180 transition group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
