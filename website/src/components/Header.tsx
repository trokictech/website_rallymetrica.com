'use client'

import Link from 'next/link'
import { Popover, PopoverButton, PopoverBackdrop, PopoverPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { navigation, appStoreUrl } from '@/lib/site'

export function Header() {
  return <header className="relative z-50 border-b border-white/[.07]">
    <nav aria-label="Main navigation"><Container className="flex h-24 items-center justify-between">
      <Link href="/" aria-label="Rallymetrica home"><Logo /></Link>
      <div className="hidden items-center gap-9 md:flex"><NavLinks />{appStoreUrl ? <a href={appStoreUrl} className="rounded-full border border-accent/20 px-4 py-2 text-[11px] font-medium text-accent">Get the app ↗</a> : <span className="rounded-full border border-accent/20 px-4 py-2 text-[11px] font-medium text-accent">App Store · Coming soon</span>}</div>
      <Popover className="md:hidden">{({ open }) => <>
        <PopoverButton aria-label="Toggle navigation" className="relative z-10 rounded-lg p-2 text-ink">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true"><path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} /></svg>
        </PopoverButton>
        <AnimatePresence>{open && <>
          <PopoverBackdrop static as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          <PopoverPanel static as={motion.div} initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="absolute inset-x-4 top-24 rounded-2xl border border-white/10 bg-surface p-6">
            {navigation.map(link => <PopoverButton as={Link} href={link.href} key={link.href} className="block border-b border-white/10 py-4 text-lg">{link.label}</PopoverButton>)}
            <p className="mt-6 text-sm text-accent">{appStoreUrl ? <a href={appStoreUrl}>Download on the App Store ↗</a> : 'Coming soon to the App Store'}</p>
          </PopoverPanel>
        </>}</AnimatePresence>
      </>}</Popover>
    </Container></nav>
  </header>
}
