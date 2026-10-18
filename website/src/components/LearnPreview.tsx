import Link from 'next/link'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { guides } from '@/lib/guides'

export function LearnPreview() {
  return <section id="learn" className="border-y border-line bg-surface/40 py-20 sm:py-24"><Container><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow text-accent">Learn Rallymetrica</p><h2 className="section-heading mt-5">Less guessing.<br /><span className="text-accent">More playing.</span></h2></div><p className="max-w-sm leading-7 text-muted">Start with your first match. Then learn to read the moments, metrics, and patterns behind your game.</p></div><div className="mt-12 grid gap-8 sm:grid-cols-3">{guides.slice(0, 3).map((guide, index) => <Link href={`/learn/${guide.slug}`} key={guide.slug} className="group border-t border-line pt-7"><div className="flex items-baseline justify-between gap-4"><span className="eyebrow text-accent/70">0{index + 1} /</span><span className="eyebrow text-muted">{guide.duration} read</span></div><h3 className="mt-7 text-xl font-semibold tracking-tight">{guide.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{guide.description}</p><span className="mt-6 inline-block text-sm text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span></Link>)}</div><div className="mt-10"><Button href="/learn" variant="outline">Explore the guides <span aria-hidden="true">↗</span></Button></div></Container></section>
}
