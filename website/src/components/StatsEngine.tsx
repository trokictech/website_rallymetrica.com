import Link from 'next/link'
import { AppScreenshot } from '@/components/AppScreenshot'
import { Container } from '@/components/Container'

const cards = [
  { id: 'momentum', number: '01', title: 'Momentum', description: 'The chance of winning the match after every point, from the exact score — and the swings that moved it most.' },
  { id: 'aggression', number: '02', title: 'Aggression', description: 'Points built — winners, aces, errors forced — against points given away, as a signed margin and an efficiency.' },
  { id: 'pressure', number: '03', title: 'Pressure', description: 'Break points, 30–30, deuce, set and match points, breaks consolidated and broken back. Twelve rows, each read before the point.' },
  { id: 'patterns', number: '04', title: 'Patterns', description: 'Attempts, completions and the points won after a completed sequence, from the landings you tapped.' },
]

const frames = [
  { screen: 'forecast-card', alt: 'A live match card with the FORECAST chip in its footer', caption: 'On the card — the leader and the chance, moving with every point.' },
  { screen: 'forecast-flip', alt: 'The live match card flipped to its forecast face', caption: 'Tap it — the card flips: both players’ serve points won and errors so far.' },
  { screen: 'forecast-cover', alt: 'The live report’s cover with the FORECAST section', caption: 'On the live cover — every statistic now, against its forecast and its pace.' },
]

export function StatsEngine() {
  return <section className="py-20 sm:py-24"><Container><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow text-accent">The stats engine</p><h2 className="section-heading mt-5">Every number,<br /><span className="text-accent">defined.</span></h2></div><p className="max-w-sm leading-7 text-muted">Nothing is estimated. A metric exists only when the points behind it were recorded, and each one is written down: what it needs, and how it is counted.</p></div>
    <div className="mt-14 grid gap-10 border-t border-white/15 pt-10 lg:grid-cols-[1fr_1.4fr] lg:items-start"><div><span className="eyebrow text-accent/70">00 / Forecast</span><h3 className="mt-7 text-2xl font-semibold tracking-tight sm:text-3xl">A forecast that moves<br />with every point.</h3><p className="mt-5 leading-7 text-muted">Before a match, Rally gives each player a chance to win — always with its range, built from both players’ serve rates run through the arithmetic of the scoring system, never a rule of thumb. From the first point that number lives on the card and the report’s cover, updated from the exact score, beside every statistic set against its own forecast: first serves in, errors, winners — now, expected, and the pace they are on.</p><p className="mt-4 leading-7 text-muted">Every statistic you track gets the same treatment on the Stats tab: the forecast as it stood before each match, made from the matches before it alone, so a result is judged against what was expected rather than against a wish. Nothing is said without its range, and nothing is forecast from fewer than five matches.</p><Link href="/learn/stats-engine#forecast" className="mt-7 inline-block text-sm font-semibold text-accent">How the forecast is built <span aria-hidden="true">→</span></Link></div>
      <div className="grid gap-6 sm:grid-cols-3">{frames.map(f => <figure key={f.screen} className="mx-auto w-full max-w-[200px]"><AppScreenshot name={f.screen} alt={f.alt} /><figcaption className="mt-4 text-center text-xs leading-5 text-muted">{f.caption}</figcaption></figure>)}</div></div>
    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{cards.map(card => <Link key={card.id} href={`/learn/stats-engine#${card.id}`} className="group border-t border-white/15 pt-7"><span className="eyebrow text-accent/70">{card.number} /</span><h3 className="mt-7 text-xl font-semibold tracking-tight">{card.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{card.description}</p><span className="mt-6 inline-block text-sm text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span></Link>)}</div><div className="mt-10"><Link href="/learn/stats-engine" className="text-sm font-semibold text-accent">Read the full reference <span aria-hidden="true">→</span></Link></div></Container></section>
}
