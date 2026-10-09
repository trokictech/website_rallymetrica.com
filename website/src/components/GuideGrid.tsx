'use client'

import Link from 'next/link'
import { useState } from 'react'
import { guides } from '@/lib/guides'

const categories = ['All guides', 'Getting started', 'On court', 'Analysis', 'Coaching']

export function GuideGrid() {
  const [query,setQuery] = useState('')
  const [category,setCategory] = useState('All guides')
  const visible = guides.filter(guide => (category === 'All guides' || guide.category === category) && `${guide.title} ${guide.description} ${guide.category} ${guide.steps.map(step => step.body).join(' ')}`.toLowerCase().includes(query.toLowerCase().trim()))
  return <div>
    <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-center">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter guides by topic">{categories.map(item => <button key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={`rounded-full px-4 py-2.5 text-xs font-medium transition-colors ${category === item ? 'bg-accent text-ground' : 'border border-white/15 text-muted hover:border-white/40 hover:text-ink'}`}>{item}</button>)}</div>
      <div className="relative"><label htmlFor="guide-search" className="sr-only">Search guides</label><input id="guide-search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search guides…" className="w-full rounded-full border border-white/15 bg-surface py-3 pr-10 pl-5 text-sm text-ink placeholder:text-muted focus:border-accent focus:ring-0 lg:w-64" /><span className="pointer-events-none absolute top-3 right-4 text-muted" aria-hidden="true">⌕</span></div>
    </div>
    <p className="mt-5 text-xs text-muted" aria-live="polite">{visible.length} {visible.length === 1 ? 'guide' : 'guides'}</p>
    <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visible.map((guide,index) => <Link href={`/learn/${guide.slug}`} key={guide.slug} className="group flex min-h-[270px] flex-col rounded-2xl border border-white/10 bg-surface/60 p-7 transition-colors hover:border-accent/40 hover:bg-surface"><div className="flex justify-between"><span className="eyebrow text-accent">{guide.category}</span><span className="text-xs text-muted">{guide.duration}</span></div><span className="mt-9 text-xs text-muted">0{guides.indexOf(guide)+1} /</span><h2 className="mt-3 text-xl font-semibold tracking-tight">{guide.title}</h2><p className="mt-3 flex-1 text-sm leading-6 text-muted">{guide.description}</p><span className="mt-6 text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span></Link>)}</div>
    {visible.length === 0 && <div className="py-20 text-center"><h2 className="text-xl font-semibold">No guides found</h2><p className="mt-3 text-sm text-muted">Try a different topic or search term.</p><button onClick={() => { setQuery(''); setCategory('All guides') }} className="mt-6 text-sm font-semibold text-accent">Show all guides →</button></div>}
  </div>
}
