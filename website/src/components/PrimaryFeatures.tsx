'use client'

import Link from 'next/link'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/Container'
import { AppScreenshot } from '@/components/AppScreenshot'

const features = [
  { name: 'Track', title: 'Be there for every point.', description: 'Keep the score, count the rally, or tap every landing. Choose the detail that fits the match, with undo and resume when you need them.', screen: 'live', alt: 'Detailed live tennis match tracking', guide: 'tracking-modes', items: ['Three levels of tracking', 'Live scoring and point endings', 'Undo, leave, and resume'] },
  { name: 'Review', title: 'Find the moments that mattered.', description: 'Look beyond the result. Explore serving, pressure, placement, and momentum, then revisit a recorded rally on the court.', screen: 'momentum', alt: 'Match report momentum chart', guide: 'reports-and-replay', items: ['Match reports with situation filters', 'Momentum and turning points', 'Replay from recorded point data'] },
  { name: 'Improve', title: 'Put your progress in perspective.', description: 'Follow player metrics across matches. Look at an opponent, a recent match window, or a trend to give the next practice a clearer focus.', screen: 'stats', alt: 'Player statistics and trend chart', guide: 'stats-and-trends', items: ['Player profiles and match history', 'Metric charts and opponent comparisons', 'Moving averages and trends'] },
]

export function PrimaryFeatures() {
  const reducedMotion = useReducedMotion()
  return <section id="features" className="border-y border-white/10 bg-surface/50 py-20 sm:py-28">
    <Container><div className="mx-auto max-w-2xl text-center"><p className="eyebrow text-accent">The game, in focus</p><h2 className="section-heading mt-5">More understanding.<br /><span className="text-accent">From every match.</span></h2><p className="mt-5 text-base leading-7 text-muted">A simple way to record. A deeper way to look back.</p></div>
      <TabGroup className="mt-12"><TabList className="mx-auto flex max-w-md gap-2 rounded-full border border-white/10 bg-ground p-1.5">{features.map((feature, index) => <Tab key={feature.name} className="flex-1 rounded-full px-4 py-3 text-sm font-semibold text-muted transition-colors outline-offset-4 data-selected:bg-accent data-selected:text-ground"><span className="mr-2 opacity-50">0{index + 1}</span>{feature.name}</Tab>)}</TabList>
        <TabPanels className="mt-12">{features.map(feature => <TabPanel key={feature.name} className="outline-none"><div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="lg:pl-14"><p className="eyebrow text-muted">{feature.name} your game</p><h3 className="mt-5 max-w-md text-3xl leading-tight font-semibold tracking-[-.04em] sm:text-4xl">{feature.title}</h3><p className="mt-5 max-w-md leading-7 text-muted">{feature.description}</p><ul className="mt-7 space-y-3">{feature.items.map(item => <li key={item} className="flex gap-3 text-sm text-ink"><span className="text-accent" aria-hidden="true">✓</span>{item}</li>)}</ul><Link href={`/learn/${feature.guide}`} className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-accent">See how it works <span aria-hidden="true">↗</span></Link></div>
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : .3 }} className="relative mx-auto w-[260px] sm:w-[290px]"><div className="absolute -inset-12 -z-10 rounded-full bg-accent/5 blur-3xl" /><AppScreenshot name={feature.screen} alt={feature.alt} /></motion.div>
        </div></TabPanel>)}</TabPanels>
      </TabGroup><div className="mt-12 text-center"><Link href="/features" className="text-sm text-muted transition-colors hover:text-accent">Explore all features <span aria-hidden="true">→</span></Link></div>
    </Container>
  </section>
}
