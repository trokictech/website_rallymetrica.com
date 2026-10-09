import Link from 'next/link'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { guides } from '@/lib/guides'

export function LearnPreview() {
  return <section id="learn" className="border-y border-white/10 bg-surface/40 py-20 sm:py-24"><Container><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="eyebrow text-accent">Learn Rallymetrica</p><h2 className="section-heading mt-5">Less guessing.<br /><span className="text-accent">More playing.</span></h2><p className="mt-6 max-w-sm leading-7 text-muted">Start with your first match. Then learn to read the moments, metrics, and patterns behind your game.</p><Button href="/learn" variant="outline" className="mt-8">Explore the guides <span aria-hidden="true">↗</span></Button></div><div>{guides.slice(0,3).map((guide,index) => <Link href={`/learn/${guide.slug}`} key={guide.slug} className="group flex items-center gap-5 border-b border-white/10 py-7 first:border-t"><span className="text-xs text-muted">0{index+1}</span><div className="flex-1"><span className="eyebrow text-accent/70">{guide.duration} read</span><h3 className="mt-2 text-lg font-semibold">{guide.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{guide.description}</p></div><span className="text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span></Link>)}</div></div></Container></section>
}
