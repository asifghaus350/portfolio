import { useState } from 'react'
import { profile, socials } from '../data/portfolio.js'
import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

/**
 * Backend ke baghair form kaam kare, isliye submit par mailto khulta hai.
 * Agar Formspree/Getform use karna ho to yahan apna endpoint daal dein
 * (e.g. 'https://formspree.io/f/xxxxxxx') — phir form direct POST karega.
 */
const FORM_ENDPOINT = ''

const initial = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [copied, setCopied] = useState(false)

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error('Request failed')
        setStatus('sent')
        setForm(initial)
      } catch {
        setStatus('error')
      }
      return
    }

    // Fallback: mail client open karo
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'someone'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-20 left-1/2 h-[380px] w-[700px] -translate-x-1/2 rounded-full bg-brand/15 blur-[130px]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <SectionHeading
          align="center"
          eyebrow="05 — Contact"
          title="Let's build something"
          description="Have a role, a project, or just a question? My inbox is open — I reply within a day or two."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-[1fr_1.15fr]">
          {/* Left: direct */}
          <Reveal>
            <div className="card flex h-full flex-col justify-between p-6">
              <div>
                <p className="font-mono text-[11px] tracking-wider text-slate-500 uppercase">
                  Email
                </p>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="mt-2 flex w-full items-center justify-between gap-3 rounded-lg border border-line bg-white/[0.02] px-3.5 py-3 text-left text-sm text-slate-200 transition hover:border-brand/50"
                >
                  <span className="truncate">{profile.email}</span>
                  <span className="shrink-0 font-mono text-[10.5px] text-brand-2">
                    {copied ? 'copied!' : 'copy'}
                  </span>
                </button>

                <p className="mt-6 font-mono text-[11px] tracking-wider text-slate-500 uppercase">
                  Elsewhere
                </p>
                <ul className="mt-3 space-y-1.5">
                  {socials
                    .filter((s) => s.icon !== 'mail')
                    .map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center gap-2.5 rounded-md py-1.5 text-sm text-slate-400 transition hover:text-white"
                        >
                          <Icon
                            name={s.icon}
                            className="h-4 w-4 text-slate-500 transition group-hover:text-brand-2"
                          />
                          {s.label}
                          <Icon
                            name="arrowRight"
                            className="ml-auto h-3.5 w-3.5 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                          />
                        </a>
                      </li>
                    ))}
                </ul>
              </div>

              <p className="mt-8 flex items-center gap-2 text-[11.5px] text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {profile.availability}
              </p>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="card p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-mono text-[11px] tracking-wider text-slate-500 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={onChange}
                  placeholder="A little about what you need…"
                  className="w-full resize-none rounded-lg border border-line bg-white/[0.02] px-3.5 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:border-brand/60 focus:bg-white/[0.04] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>

              <p
                className="mt-3 min-h-4 text-center text-[11.5px]"
                role="status"
                aria-live="polite"
              >
                {status === 'sent' && (
                  <span className="text-emerald-400">
                    Thanks — your mail app should be open now.
                  </span>
                )}
                {status === 'error' && (
                  <span className="text-rose-400">
                    Something went wrong. Email me directly instead.
                  </span>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', ...rest }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-mono text-[11px] tracking-wider text-slate-500 uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full rounded-lg border border-line bg-white/[0.02] px-3.5 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:border-brand/60 focus:bg-white/[0.04] focus:outline-none"
        {...rest}
      />
    </div>
  )
}
