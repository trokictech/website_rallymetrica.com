import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

export function Footer() {
  return <footer className="border-t border-white/10"><Container className="py-10"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center"><Link href="/" aria-label="Rallymetrica home"><Logo /></Link><nav aria-label="Footer navigation" className="flex gap-8"><NavLinks /></nav></div><div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/[.07] pt-6 text-xs text-muted sm:flex-row"><p>© {new Date().getFullYear()} Rallymetrica</p><p>Know your game. One point at a time.</p></div></Container></footer>
}
