import { type Metadata } from 'next'
import { Manrope } from 'next/font/google'
import '@/styles/tailwind.css'

const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-manrope' })

export const metadata: Metadata = {
  title: { template: '%s · Rallymetrica', default: 'Rallymetrica · Know your game' },
  description: 'Track tennis matches, connect players and coaches with live updates, and measure assigned patterns of play. Explore Rallymetrica and learn how to use it.',
  icons: { icon: '/brand/rallymetrica.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={manrope.variable}><body>{children}</body></html>
}
