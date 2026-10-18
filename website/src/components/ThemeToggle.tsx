'use client'

import { useEffect, useState } from 'react'

/* The site follows the system theme and remembers an override (localStorage › rm.theme: 'light' | 'dark'; absent = follow the system).
   The boot script in app/layout.tsx sets html[data-theme] before the first paint, so there is no flash; this control only changes it afterwards.
   Two glyphs — a sun and a moon — in the header's pill recipe; the label is for the reader, the glyph for the eye (DECISIONS › The website follows the app's two themes, Oct 18). */
type Theme = 'light' | 'dark'
const read = (): Theme => (document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark')

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null)
  useEffect(() => {
    const sync = () => setTheme(read())
    sync()
    const observer = new MutationObserver(sync)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])
  const flip = () => {
    const next: Theme = read() === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('rm.theme', next) } catch {}
    setTheme(next)
  }
  const light = theme === 'light'
  return <button type="button" onClick={flip} aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'} aria-pressed={light} className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent/40 hover:text-accent ${className}`}>
    {theme === null ? <span className="h-4 w-4" /> : light
      ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="h-4 w-4" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
      : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="h-4 w-4" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>}
  </button>
}
