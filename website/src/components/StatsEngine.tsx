import Link from 'next/link'
import { Container } from '@/components/Container'

const cards = [
  { id: 'momentum', number: '01', title: 'Momentum', description: 'The chance of winning the match after every point, from the exact score — and the swings that moved it most.' },
  { id: 'aggression', number: '02', title: 'Aggression', description: 'Points built — winners, aces, errors forced — against points given away, as a signed margin and an efficiency.' },
  { id: 'pressure', number: '03', title: 'Pressure', description: 'Break points, 30–30, deuce, set and match points, breaks consolidated and broken back. Twelve rows, each read before the point.' },
  { id: 'patterns', number: '04', title: 'Patterns', description: 'Attempts, completions and the points won after a completed sequence, from the landings you tapped.' },
]

export function StatsEngine() {
  return <section className="py-20 sm:py-24"><Container><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow text-accent">The stats engine</p><h2 className="section-heading mt-5">Every number,<br /><span className="text-accent">defined.</span></h2></div><p className="max-w-sm leading-7 text-muted">Nothing is estimated. A metric exists only when the points behind it were recorded, and each one is written down: what it needs, and how it is counted.</p></div><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{cards.map(card => <Link key={card.id} href={`/learn/stats-engine#${card.id}`} className="group border-t border-white/15 pt-7"><span className="eyebrow text-accent/70">{card.number} /</span><h3 className="mt-7 text-xl font-semibold tracking-tight">{card.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{card.description}</p><span className="mt-6 inline-block text-sm text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span></Link>)}</div><div className="mt-10"><Link href="/learn/stats-engine" className="text-sm font-semibold text-accent">Read the full reference <span aria-hidden="true">→</span></Link></div></Container></section>
}
