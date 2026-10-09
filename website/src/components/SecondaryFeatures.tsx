import Link from 'next/link'
import { Container } from '@/components/Container'

const features = [
  { number: '01', name: 'A history worth keeping', description: 'Players, matches, and the context behind each result. Return to a player profile to see the bigger picture.', href: '/learn/stats-and-trends' },
  { number: '02', name: 'Pressure has a pattern', description: 'Use situation and score filters to examine the points that ask the most of your game.', href: '/learn/reports-and-replay' },
  { number: '03', name: 'A plan for the next point', description: 'Coaches can draw shot patterns, assign them to players, and include them in Detailed tracking.', href: '/learn/coaching-patterns' },
]

export function SecondaryFeatures() {
  return <section className="py-20 sm:py-24"><Container><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow text-accent">Built around the game</p><h2 className="section-heading mt-5">The details add up.</h2></div><p className="max-w-sm leading-7 text-muted">From a player’s first match to a coach’s next session, keep your tennis connected.</p></div><div className="mt-12 grid gap-8 md:grid-cols-3">{features.map(feature => <Link key={feature.number} href={feature.href} className="group border-t border-white/15 pt-7"><span className="eyebrow text-accent/70">{feature.number} /</span><h3 className="mt-7 text-xl font-semibold tracking-tight">{feature.name}</h3><p className="mt-4 text-sm leading-7 text-muted">{feature.description}</p><span className="mt-6 inline-block text-sm text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span></Link>)}</div></Container></section>
}
