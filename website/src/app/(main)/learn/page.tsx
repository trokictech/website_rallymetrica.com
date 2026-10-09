import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { GuideGrid } from '@/components/GuideGrid'

export const metadata: Metadata = { title: 'Learn', description: 'Practical Rallymetrica guides: track tennis matches, link a coach and player, follow live updates, assign patterns of play, and understand execution results.' }

export default function Learn() {
  return <><section className="border-b border-white/10"><Container className="py-16 sm:py-24"><p className="eyebrow text-accent">The Rallymetrica playbook</p><div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h1 className="max-w-xl text-5xl leading-[1.08] font-semibold tracking-[-.055em] sm:text-6xl">Get to know<br /><span className="text-accent">your game.</span></h1><p className="max-w-md leading-7 text-muted">Clear steps, real screens, and a little context. Everything you need to go from your first match to your next insight.</p></div></Container></section><Container className="py-12 sm:py-16"><Link href="/learn/your-first-match" className="mb-12 flex flex-col justify-between gap-5 rounded-2xl border border-accent/20 bg-accent/[.05] p-7 sm:flex-row sm:items-center"><div><p className="eyebrow text-accent">New here? Start here.</p><h2 className="mt-3 text-xl font-semibold">Your first match, step by step.</h2><p className="mt-2 text-sm text-muted">Players, rules, tracking. You’re ready to go.</p></div><span className="text-sm font-semibold text-accent">Open the guide ↗</span></Link><GuideGrid /></Container></>
}
