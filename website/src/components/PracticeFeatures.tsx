'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { AppScreenshot } from '@/components/AppScreenshot'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const kinds = [
  {
    name: 'Rally', title: 'A game with a score, without a match’s length.',
    description: 'First to 11, 15 or 21 — in one block or up to five — timed, or open. Start each rally with a serve or a feed; the rotation is set once and the board says who starts next. Every rally is a point: the same taps, the same report.',
    items: ['Serve or feed start; two serves or one (the second-serves-only drill)', 'Blocks as sets: B1 · B2 on the board, a block speaks when it is won', 'The match report on a rally: momentum, aggression, points, placement, patterns'],
    screen: 'rally-court', alt: 'The live court on a VS rally session: blocks on the board and the tally', caption: 'VS · one rally, one point, the tally under SCORE.',
  },
  {
    name: 'Co-op', title: 'Keep the ball in play. Count the run.',
    description: 'Two players, one count. Any miss ends the run, and the run is recorded with its length and how it ended. Timed or open; the feed starts every run.',
    items: ['RUNS · BEST and the run in progress on the board', 'Every run as a bar, with the average and the median', 'Endings by place — into the net, long, wide, unplayable — and balls hit, for each player'],
    screen: 'coop-court', alt: 'The live court on a co-op session: the run in progress and the best run', caption: 'CO-OP · the run in progress, the best so far.',
  },
  {
    name: 'Serve', title: 'A basket of serves, judged against a target.',
    description: 'One server, blocks of 5, 10 or 20 — pairs with a second serve after a fault, first serves only, or second serves only. Pick the side and the target on the court, tap where each serve lands, and read two numbers: in, and on target.',
    items: ['DEUCE · AD and T · MID · WIDE picked per block on the court', 'IN % and ON TARGET % running as you serve; the block closes on its count', 'The report: the serve table, the placement map, streaks and accuracy over the session'],
    screen: 'serve-court', alt: 'The serve court: the side and target strips, the running in and on-target shares', caption: 'SERVE · the target strip, the running in % and on target %.',
  },
]

export function PracticeFeatures() {
  return <section id="practice" className="py-20 sm:py-28">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <p id="practice-heading" className="eyebrow text-accent">Practice sessions</p>
        <h2 className="section-heading mt-5">Practice with a score.<br /><span className="text-accent">Rally games, co-op runs, serve blocks.</span></h2>
        <p className="mt-5 text-base leading-7 text-muted">The Sessions tab holds your matches, rally sessions and serve sessions side by side. A session is tracked like a Detailed match — every landing — and opens its own report. On the Player plan and up.</p>
      </div>
      <TabGroup className="mt-12">
        <TabList aria-labelledby="practice-heading" className="mx-auto flex max-w-md gap-2 rounded-full border border-white/10 bg-ground p-1.5">
          {kinds.map((kind, index) => <Tab key={kind.name} className="flex-1 rounded-full px-4 py-3 text-sm font-semibold text-muted transition-colors outline-offset-4 data-selected:bg-accent data-selected:text-ground"><span className="mr-2 opacity-50">0{index + 1}</span>{kind.name}</Tab>)}
        </TabList>
        <TabPanels className="mt-12">
          {kinds.map(kind => <TabPanel key={kind.name} className="outline-none">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="lg:pl-14">
                <p className="eyebrow text-muted">{kind.name} sessions</p>
                <h3 className="mt-5 max-w-md text-3xl leading-tight font-semibold tracking-[-.04em] sm:text-4xl">{kind.title}</h3>
                <p className="mt-5 max-w-md leading-7 text-muted">{kind.description}</p>
                <ul className="mt-7 space-y-3">{kind.items.map(item => <li key={item} className="flex gap-3 text-sm text-ink"><span className="text-accent" aria-hidden="true">✓</span>{item}</li>)}</ul>
                <Button href="/learn/practice-sessions" variant="outline" className="mt-9">How sessions work ↗</Button>
              </div>
              <div className="mx-auto w-[260px] sm:w-[290px]">
                <AppScreenshot name={kind.screen} alt={kind.alt} />
                <p className="mt-5 text-center text-xs leading-5 text-muted">{kind.caption}</p>
              </div>
            </div>
          </TabPanel>)}
        </TabPanels>
      </TabGroup>
    </Container>
  </section>
}
