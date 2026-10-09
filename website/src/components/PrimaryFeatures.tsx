'use client'

import Link from 'next/link'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Container } from '@/components/Container'
import { AppScreenshot } from '@/components/AppScreenshot'
import { ReplayLoop } from '@/components/ReplayLoop'

type Shot = { screen: string; alt: string; caption: string; replay?: boolean }

const features: { name: string; title: string; description: string; guide: string; items: string[]; shots: Shot[] }[] = [
  {
    name: 'Record', title: 'Be there for every point.', guide: 'tracking-modes',
    description: 'Keep the score, count the rally, or tap every landing. Choose the detail that fits the match, with undo and resume when you need them.',
    items: ['Three levels of tracking: Score, Counter, Detailed', 'Live scoring and point endings', 'Undo, leave, and resume'],
    shots: [
      { screen: 'live-score', alt: 'The live court in Score mode: tap the side that won the point', caption: 'Score · the point winners' },
      { screen: 'live-counter', alt: 'The live court in Counter mode: one tap per shot, then the ending', caption: 'Counter · shots and endings' },
      { screen: 'live', alt: 'The live court in Detailed mode: every landing on the court', caption: 'Detailed · every landing' },
      { screen: 'point-end', alt: 'The point sheet: how the point ended, the wing and the direction', caption: 'The point sheet · ending, wing, direction' },
    ],
  },
  {
    name: 'Analyze', title: 'Find the moments that mattered.', guide: 'reports-and-replay',
    description: 'Look beyond the result. Momentum shows who was ahead and where it swung; aggression shows how they got there — points built against points given away, game by game.',
    items: ['Momentum with its biggest swings', 'Aggressive margin and efficiency, game by game', 'Serve, return, pressure and landings, with situation and score filters'],
    shots: [
      { screen: 'momentum', alt: 'The report’s Momentum page with the win chance curve and its swings', caption: 'Momentum · who was ahead, and where it swung' },
      { screen: 'aggression', alt: 'The report’s Aggression page with the margin per game', caption: 'Aggression · built against given away' },
      { screen: 'replay', alt: 'Rally replay animating a recorded point', caption: 'Replay · the recorded rally, shot by shot', replay: true },
      { screen: 'landings', alt: 'The report’s Landings page: where the balls went', caption: 'Landings · where the balls went' },
    ],
  },
  {
    name: 'Improve', title: 'Put your progress in perspective.', guide: 'stats-and-trends',
    description: 'Follow every metric across your last 3, 7, 10 or all matches, with a moving average and a trend line, and open the match behind any dot.',
    items: ['Player profiles and match history', 'Every metric over a match window', 'Moving averages and trends'],
    shots: [
      { screen: 'stats', alt: 'Stats: one metric charted across a window of matches, with its trend', caption: 'Stats · one metric, match after match' },
      { screen: 'profile', alt: 'A player profile with the record and the trends', caption: 'Profile · the record and the trends' },
      { screen: 'profile-zones', alt: 'A player’s Zones tab: where deep, middle and the forehand zone begin', caption: 'Zones · the player’s own court' },
      { screen: 'matches', alt: 'The Matches tab: every result with its report', caption: 'Matches · every result, with its report' },
    ],
  },
]

export function PrimaryFeatures() {
  return <section id="features" className="border-y border-white/10 bg-surface/50 py-20 sm:py-28">
    <Container><div className="mx-auto max-w-2xl text-center"><p className="eyebrow text-accent">The game, in focus</p><h2 className="section-heading mt-5">More understanding.<br /><span className="text-accent">From every match.</span></h2><p className="mt-5 text-base leading-7 text-muted">A simple way to record. A deeper way to look back.</p></div>
      <TabGroup className="mt-12"><TabList className="mx-auto flex max-w-md gap-2 rounded-full border border-white/10 bg-ground p-1.5">{features.map((feature, index) => <Tab key={feature.name} className="flex-1 rounded-full px-4 py-3 text-sm font-semibold text-muted transition-colors outline-offset-4 data-selected:bg-accent data-selected:text-ground"><span className="mr-2 opacity-50">0{index + 1}</span>{feature.name}</Tab>)}</TabList>
        <TabPanels className="mt-12">{features.map(feature => <TabPanel key={feature.name} className="outline-none"><div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="lg:pl-14"><p className="eyebrow text-muted">{feature.name} your game</p><h3 className="mt-5 max-w-md text-3xl leading-tight font-semibold tracking-[-.04em] sm:text-4xl">{feature.title}</h3><p className="mt-5 max-w-md leading-7 text-muted">{feature.description}</p><ul className="mt-7 space-y-3">{feature.items.map(item => <li key={item} className="flex gap-3 text-sm text-ink"><span className="text-accent" aria-hidden="true">✓</span>{item}</li>)}</ul><Link href={`/learn/${feature.guide}`} className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-accent">See how it works <span aria-hidden="true">↗</span></Link></div>
          <div className="relative mx-auto grid w-full max-w-[520px] grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-6"><div className="absolute -inset-10 -z-10 rounded-full bg-accent/5 blur-3xl" aria-hidden="true" />{feature.shots.map(shot => <figure key={shot.screen}>{shot.replay ? <ReplayLoop alt={shot.alt} /> : <AppScreenshot name={shot.screen} alt={shot.alt} />}<figcaption className="mt-3 text-center text-xs leading-5 text-muted">{shot.caption}</figcaption></figure>)}</div>
        </div></TabPanel>)}</TabPanels>
      </TabGroup><div className="mt-12 text-center"><Link href="/features" className="text-sm text-muted transition-colors hover:text-accent">Explore all features <span aria-hidden="true">→</span></Link></div>
    </Container>
  </section>
}
