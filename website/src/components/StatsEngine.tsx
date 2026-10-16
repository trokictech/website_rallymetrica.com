'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { AppScreenshot } from '@/components/AppScreenshot'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const engines = [
  {
    name: 'Forecast', title: 'A forecast that moves with every point.',
    description: 'Before a match, Rallymetrica forecasts each player’s serve-point rate from their own history — an exponential-smoothing model fitted and refitted per player, shrunk toward the roster while a history is short — and runs the two rates through the exact arithmetic of games, tiebreaks and sets under the match’s format. Out comes a chance to win with an honest range, pushed through the scoring model rather than approximated. From the first point the same model re-reads the chance from the live score, beside every statistic set against its own forecast and the pace it is on. The model keeps learning: first and second serves, unforced errors, winners and aggression are tested next as inputs, and each one earns its place only by forecasting real matches better. Nothing is forecast from fewer than five matches, and nothing is stated without its range.',
    items: ['On the live card: the leader and the chance, moving with every point — tap to flip the card for both players’ serve points and errors', 'On the live cover: first serves in, serve points won, errors, winners, double faults — now, expected, on pace', 'On the Stats tab: every statistic’s forecast as it stood before each match, never with hindsight'],
    screen: 'forecast-cover', alt: 'The live report’s cover with the FORECAST section', caption: 'The live cover: the chance to win and every statistic against its forecast.',
    link: '/learn/stats-engine#forecast', linkLabel: 'How the forecast is built ↗',
  },
  {
    name: 'Momentum', title: 'Where the match turned.',
    description: 'The chance of winning the match after every point, read from the exact score and the rules — so a point at 30–40 in the fifth game weighs what it should. The curve shows the shape of the match; the swings mark the points that moved it most.',
    items: ['A win-probability curve from the first point to the last', 'The biggest swings, each with the point that caused it', 'Serve rates learned from each player’s own history, updated as the match goes'],
    screen: 'momentum', alt: 'The Momentum page: the win-probability curve with its swings marked', caption: 'Momentum: the chance after every point, and where it swung.',
    link: '/learn/stats-engine#momentum', linkLabel: 'How momentum is read ↗',
  },
  {
    name: 'Aggression', title: 'How the points were built.',
    description: 'Points built — winners, aces, errors forced — against points given away, as a signed margin and an efficiency. One number says whether a player is taking the match or waiting for it; the band says whether that is their usual.',
    items: ['A signed margin per player, with the usual range around it', 'The efficiency: points built per point given away', 'Read under any cut — a set, a situation, a score'],
    screen: 'aggression', alt: 'The Aggression page: the margin over the match with its band', caption: 'Aggression: built against given away, over the match.',
    link: '/learn/stats-engine#aggression', linkLabel: 'How aggression is counted ↗',
  },
  {
    name: 'Pressure', title: 'Twelve rows, each read before the point.',
    description: 'Break points, 30–30, deuce, set and match points, breaks consolidated and broken back. Every row is decided by the score before the point was played, never after — so the table says how a player handles the moments that decide matches.',
    items: ['Break points faced and saved, created and taken', 'Set and match points, both sides', 'Breaks consolidated and broken back'],
    screen: 'pressure', alt: 'The Pressure page: twelve rows of pressure points for both players', caption: 'Pressure: the moments that decide matches, both sides.',
    link: '/learn/stats-engine#pressure', linkLabel: 'How pressure is defined ↗',
  },
]

export function StatsEngine() {
  return <section id="stats-engine" className="py-20 sm:py-28">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <p id="engine-heading" className="eyebrow text-accent">The stats engine</p>
        <h2 className="section-heading mt-5">Every number,<br /><span className="text-accent">defined.</span></h2>
        <p className="mt-5 text-base leading-7 text-muted">Nothing is estimated. A metric exists only when the points behind it were recorded, and each one is written down: what it needs, and how it is counted.</p>
      </div>
      <TabGroup className="mt-12">
        <TabList aria-labelledby="engine-heading" className="mx-auto grid max-w-xl grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-ground p-1.5 sm:flex sm:rounded-full">
          {engines.map((engine, index) => <Tab key={engine.name} className="flex-1 rounded-full px-2 py-3 text-sm font-semibold text-muted transition-colors outline-offset-4 data-selected:bg-accent data-selected:text-ground sm:px-4"><span className="mr-2 opacity-50">0{index + 1}</span>{engine.name}</Tab>)}
        </TabList>
        <TabPanels className="mt-12">
          {engines.map(engine => <TabPanel key={engine.name} className="outline-none">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="lg:pl-14">
                <p className="eyebrow text-muted">{engine.name}</p>
                <h3 className="mt-5 max-w-md text-3xl leading-tight font-semibold tracking-[-.04em] sm:text-4xl">{engine.title}</h3>
                <p className="mt-5 max-w-md leading-7 text-muted">{engine.description}</p>
                <ul className="mt-7 space-y-3">{engine.items.map(item => <li key={item} className="flex gap-3 text-sm text-ink"><span className="text-accent" aria-hidden="true">✓</span>{item}</li>)}</ul>
                <Button href={engine.link} variant="outline" className="mt-9">{engine.linkLabel}</Button>
              </div>
              <div className="mx-auto w-[260px] sm:w-[290px]">
                <AppScreenshot name={engine.screen} alt={engine.alt} />
                <p className="mt-5 text-center text-xs leading-5 text-muted">{engine.caption}</p>
              </div>
            </div>
          </TabPanel>)}
        </TabPanels>
      </TabGroup>
    </Container>
  </section>
}
