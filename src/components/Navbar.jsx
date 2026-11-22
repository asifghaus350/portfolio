import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio.js'
import Icon from './Icons.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active link highlight
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line/80 bg-ink/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-sm font-bold text-ink shadow-lg shadow-brand/30">
            {profile.shortName}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-slate-200 sm:block">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-lg px-3.5 py-2 text-sm transition-colors ${
                  active === link.href
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="btn btn-primary !px-4 !py-2.5 text-sm">
            Let&apos;s talk
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-slate-200 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden border-t border-line bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              Let&apos;s talk
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
