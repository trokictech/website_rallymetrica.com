import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { appStoreUrl } from '@/lib/site'

export function CallToAction() {
  return <section className="py-20 sm:py-24"><Container><div className="relative overflow-hidden rounded-3xl border border-accent/15 bg-linear-to-br from-[#272a22] via-surface to-surface px-7 py-16 text-center sm:px-12"><div className="pointer-events-none absolute -top-44 -right-24 h-96 w-96 rounded-full border border-accent/10" aria-hidden="true" /><p className="eyebrow text-accent">Your next match, with more meaning</p><h2 className="section-heading mt-5">Know your game.<br /><span className="text-accent">One point at a time.</span></h2><p className="mx-auto mt-6 max-w-lg leading-7 text-muted">{appStoreUrl ? 'Get Rallymetrica on the App Store, then explore the guides to make the most of your next match.' : 'Rallymetrica is coming to the App Store. Explore what it can do and get familiar with the court before your first match.'}</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><AppStoreLink /><Button href="/learn/your-first-match" variant="outline">Start with the basics <span aria-hidden="true">↗</span></Button></div></div></Container></section>
}
