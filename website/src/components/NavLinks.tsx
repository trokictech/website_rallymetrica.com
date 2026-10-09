import Link from 'next/link'
import { navigation } from '@/lib/site'

export function NavLinks() {
  return navigation.map(link => <Link key={link.href} href={link.href} className="text-sm text-muted transition-colors hover:text-ink">{link.label}</Link>)
}
