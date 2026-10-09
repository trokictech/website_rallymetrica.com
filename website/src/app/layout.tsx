import { type Metadata } from 'next'
import { Manrope } from 'next/font/google'
import '@/styles/tailwind.css'
import { siteUrl } from '@/lib/site'

const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-manrope' })
const title = 'Rallymetrica · Record. Analyze. Improve.'
const description = 'Tennis match tracking for players and coaches. Tap the points as they are played; Rallymetrica turns them into a report, a replay and a season of stats — and sends every point to your coach, live.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { template: '%s · Rallymetrica', default: title },
  description,
  applicationName: 'Rallymetrica',
  icons: { icon: [{ url: '/mark.svg', type: 'image/svg+xml' }], apple: '/apple-touch-icon.png' },
  openGraph: { type: 'website', siteName: 'Rallymetrica', url: '/', title, description, images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rallymetrica' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`h-full ${manrope.variable}`}><body className="flex min-h-full flex-col">{children}</body></html>
}
