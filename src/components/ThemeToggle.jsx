import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'

const STORAGE_KEY = 'portfolio-theme'

export default function ThemeToggle({ withLabel = false, className = '' }) {
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false,
  )

  // Another instance (mobile vs desktop) changed the theme — stay in sync.
  useEffect(() => {
    const sync = () =>
      setDark(document.documentElement.classList.contains('dark'))
    window.addEventListener('themechange', sync)
    return () => window.removeEventListener('themechange', sync)
  }, [])

  const toggle = () => {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', next ? '#06070b' : '#f6f7fb')
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light')
    } catch {
      /* storage may be blocked */
    }
    setDark(next)
    window.dispatchEvent(new Event('themechange'))
  }

  if (withLabel) {
    return (
      <button
        type="button"
        onClick={toggle}
        className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-base text-slate-300 transition hover:bg-white/5 hover:text-txt ${className}`}
        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className="flex items-center gap-2.5">
          <Icon name={dark ? 'moon' : 'sun'} className="h-[18px] w-[18px]" />
          {dark ? 'Dark mode' : 'Light mode'}
        </span>
        <span
          className={`relative h-5 w-9 rounded-full transition-colors ${dark ? 'bg-brand' : 'bg-line'}`}
        >
          <span
            className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${dark ? 'translate-x-[18px]' : 'translate-x-0.5'}`}
          />
        </span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={`grid h-9 w-9 place-items-center rounded-lg border border-line text-slate-400 transition hover:border-brand/50 hover:text-txt ${className}`}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      <Icon name={dark ? 'sun' : 'moon'} className="h-[17px] w-[17px]" />
    </button>
  )
}
