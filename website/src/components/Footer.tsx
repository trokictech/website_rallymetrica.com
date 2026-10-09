import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { companyName, supportEmail } from '@/lib/site'

export function Footer() {
  return <footer className="border-t border-white/10"><Container className="py-10"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center"><Link href="/" aria-label="Rallymetrica home"><Logo /></Link><nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-4"><NavLinks /><Link href="/learn/stats-engine" className="text-sm text-muted transition-colors hover:text-ink">Stats engine</Link><Link href="/privacy" className="text-sm text-muted transition-colors hover:text-ink">Privacy</Link><Link href="/terms" className="text-sm text-muted transition-colors hover:text-ink">Terms</Link><a href={`mailto:${supportEmail}`} className="text-sm text-muted transition-colors hover:text-ink">{supportEmail}</a></nav></div><div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/[.07] pt-6 text-xs text-muted sm:flex-row"><p>© {new Date().getFullYear()} {companyName} · Rallymetrica</p><p>Record. Analyze. Improve.</p></div></Container></footer>
}
