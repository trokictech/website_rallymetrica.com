'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { AppScreenshot } from '@/components/AppScreenshot'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const patterns = [
  {
    name: 'Create',
    title: 'Draw your pattern of play.',
    description: 'Turn a coaching idea into a sequence on the court. Start from a blank court or a template, then draw the landing zones you want your player to target.',
    items: ['Name the pattern and draw two to four ball landings', 'Adjust the landing balls and shot sequence', 'Save the pattern in your coaching library'],
    screen: 'pattern-editor',
    alt: 'Coach pattern editor with a drawn shot sequence and Save pattern control',
    caption: 'Turn the plan into a sequence your player can follow.',
    link: 'Learn how to create a pattern ↗',
  },
  {
    name: 'Assign',
    title: 'Give each player a focus.',
    description: 'Choose the players you want to work on a pattern. Linked players receive their assigned patterns at the next sync, ready to bring the plan into their match.',
    items: ['Choose players with Assign to', 'Save new patterns with their assignments', 'Pick up to three patterns per player in Detailed setup'],
    screen: 'profile-patterns',
    alt: 'A player profile’s Patterns tab listing the patterns the coach assigned',
    caption: 'Assign the pattern. Give the match a clear focus.',
    link: 'Learn how to assign patterns ↗',
  },
  {
    name: 'Track',
    title: 'Measure the execution.',
    description: 'Record the landing zones in Detailed tracking, then see how often your player completes the pattern—and how often those completed patterns win points.',
    items: ['Review completed sequences out of attempts', 'See point win rate after a completed pattern', 'Follow pattern results across matches in player profiles'],
    screen: 'patterns',
    alt: 'The pattern library: each pattern with its players and how often it was completed',
    caption: 'Counts come from manually recorded landing zones.',
    link: 'Learn how to read pattern results ↗',
  },
]

export function PatternFeatures() {
  return <section id="patterns" className="border-y border-white/10 bg-surface/50 py-20 sm:py-28">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <p id="patterns-heading" className="eyebrow text-accent">Patterns of play</p>
        <h2 className="section-heading mt-5">Create the plan.<br /><span className="text-accent">Measure the execution.</span></h2>
        <p className="mt-5 text-base leading-7 text-muted">Create a sequence, assign it to players, and see how it was executed on court.</p>
      </div>
      <TabGroup className="mt-12">
        <TabList aria-labelledby="patterns-heading" className="mx-auto flex max-w-md gap-2 rounded-full border border-white/10 bg-ground p-1.5">
          {patterns.map((pattern, index) => <Tab key={pattern.name} className="flex-1 rounded-full px-4 py-3 text-sm font-semibold text-muted transition-colors outline-offset-4 data-selected:bg-accent data-selected:text-ground"><span className="mr-2 opacity-50">0{index + 1}</span>{pattern.name}</Tab>)}
        </TabList>
        <TabPanels className="mt-12">
          {patterns.map(pattern => <TabPanel key={pattern.name} className="outline-none">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="lg:pl-14">
                <p className="eyebrow text-muted">{pattern.name} patterns</p>
                <h3 className="mt-5 max-w-md text-3xl leading-tight font-semibold tracking-[-.04em] sm:text-4xl">{pattern.title}</h3>
                <p className="mt-5 max-w-md leading-7 text-muted">{pattern.description}</p>
                <ul className="mt-7 space-y-3">{pattern.items.map(item => <li key={item} className="flex gap-3 text-sm text-ink"><span className="text-accent" aria-hidden="true">✓</span>{item}</li>)}</ul>
                <Button href="/learn/coaching-patterns" variant="outline" className="mt-9">{pattern.link}</Button>
              </div>
              <div className="mx-auto w-[260px] sm:w-[290px]">
                <AppScreenshot name={pattern.screen} alt={pattern.alt} />
                <p className="mt-5 text-center text-xs leading-5 text-muted">{pattern.caption}</p>
              </div>
            </div>
          </TabPanel>)}
        </TabPanels>
      </TabGroup>
    </Container>
  </section>
}
