import { type Metadata } from 'next'
import { Manrope } from 'next/font/google'
import '@/styles/tailwind.css'

const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-manrope' })

export const metadata: Metadata = {
  title: { template: '%s · Rallymetrica', default: 'Rallymetrica · Record. Analyze. Improve.' },
  description: 'Tennis match tracking for players and coaches. Tap the points as they are played; Rallymetrica turns them into a report, a replay and a season of stats — and sends every point to your coach, live.',
  icons: { icon: '/brand/rallymetrica.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={manrope.variable}><body>{children}</body></html>
}
