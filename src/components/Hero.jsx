import { useEffect, useState } from 'react'
import { profile, socials, stats } from '../data/portfolio.js'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'

function useTypewriter(words, typeSpeed = 70, deleteSpeed = 35, hold = 1600) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), hold)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1),
          )
        },
        deleting ? deleteSpeed : typeSpeed,
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, hold])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="blob animate-float-slow -top-32 left-1/4 h-[420px] w-[420px] bg-brand/50"
        aria-hidden="true"
      />
      <div
        className="blob animate-float-slow top-10 right-0 h-[360px] w-[360px] bg-brand-2/40 [animation-delay:-6s]"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        {/* ---------- Left ---------- */}
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] py-1.5 pr-4 pl-1.5 text-xs text-slate-300">
              <span className="relative grid h-6 w-6 place-items-center">
                <span className="animate-pulse-ring absolute inset-0 rounded-full" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-4xl leading-[1.05] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{' '}
              <span className="gradient-text">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 flex min-h-9 flex-wrap items-center gap-x-2 font-mono text-base text-slate-400 sm:text-lg">
              <span className="text-brand-2">&gt;</span>
              <span className="text-slate-200">{typed}</span>
              <span className="caret inline-block h-5 w-[2px] translate-y-0.5 bg-brand-2" />
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-base">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn btn-primary">
                View my work
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
              <a href={profile.resumeUrl} className="btn btn-ghost" download>
                <Icon name="download" className="h-4 w-4" />
                Résumé
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white/[0.02] text-slate-400 transition hover:-translate-y-0.5 hover:border-brand/60 hover:text-white"
                >
                  <Icon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ---------- Right: code card ---------- */}
        <Reveal delay={220} className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-brand/25 via-transparent to-brand-2/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-2/90 shadow-2xl shadow-black/60 backdrop-blur">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[11px] text-slate-500">
                  developer.js
                </span>
              </div>

              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-slate-400">
                <code>
                  <span className="text-brand-3">const</span>{' '}
                  <span className="text-slate-200">developer</span>{' '}
                  <span className="text-slate-500">=</span> {'{'}
                  {'\n'}  <span className="text-brand-2">name</span>:{' '}
                  <span className="text-emerald-300">&apos;{profile.name}&apos;</span>,
                  {'\n'}  <span className="text-brand-2">role</span>:{' '}
                  <span className="text-emerald-300">&apos;{profile.role}&apos;</span>,
                  {'\n'}  <span className="text-brand-2">stack</span>: [
                  <span className="text-emerald-300">&apos;React&apos;</span>,{' '}
                  <span className="text-emerald-300">&apos;Node&apos;</span>],
                  {'\n'}  <span className="text-brand-2">focus</span>:{' '}
                  <span className="text-emerald-300">&apos;shipping&apos;</span>,
                  {'\n'}  <span className="text-brand-2">openToWork</span>:{' '}
                  <span className="text-brand-3">true</span>,
                  {'\n'}
                  {'}'};
                  {'\n\n'}
                  <span className="text-slate-600">
                    {'// build something useful'}
                  </span>
                </code>
              </pre>

              <div className="flex items-center justify-between border-t border-line px-4 py-2.5 font-mono text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  main
                </span>
                <span>UTF-8 · JavaScript</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* stats strip */}
      <div className="container-x relative mt-16 md:mt-20">
        <Reveal>
          <dl className="grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-white/[0.02]">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-6 text-center sm:px-6">
                <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[11px] leading-snug text-slate-500 sm:text-xs">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="container-x relative mt-14 hidden justify-center md:flex">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 font-mono text-[11px] tracking-widest text-slate-500 uppercase transition hover:text-slate-300"
        >
          Scroll
          <Icon
            name="arrowDown"
            className="h-4 w-4 animate-bounce [animation-duration:2s]"
          />
        </a>
      </div>
    </section>
  )
}
