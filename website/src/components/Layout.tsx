import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return <><a href="#main-content" className="sr-only z-[100] rounded-lg bg-accent p-3 text-on-accent focus:not-sr-only focus:fixed focus:top-4 focus:left-4">Skip to content</a>
    <a href="https://rallymetrica.com/player/try-apple" className="block bg-accent px-4 py-2 text-center text-[11px] leading-5 font-medium text-on-accent transition-opacity hover:opacity-90 sm:text-xs [html[data-theme=light]_&]:text-white">
      <span><svg viewBox="0 0 24 24" fill="currentColor" className="mr-1.5 inline-block h-3.5 w-3.5 align-[-2px]" aria-hidden="true"><path d="M16.37 1.4c.15 1.28-.38 2.56-1.13 3.44-.8.93-2.03 1.64-3.28 1.54-.16-1.23.46-2.56 1.18-3.36.8-.92 2.14-1.56 3.23-1.62ZM20.53 17.44c-.54 1.2-.8 1.73-1.5 2.79-.97 1.45-2.35 3.26-4.04 3.28-1.5.02-1.89-.97-3.92-.96-2.03.01-2.46.98-3.96.96-1.7-.02-3-1.65-3.97-3.1C.43 16.38.2 10.63 1.86 8.07c1.18-1.82 3.05-2.89 4.81-2.89 1.79 0 2.9.98 4.38.98 1.44 0 2.32-.98 4.36-.98 1.57 0 3.24.86 4.41 2.35-3.88 2.14-3.25 7.7.71 9.91Z" /></svg>App Store Annual Player Offer: <strong className="offer-pulse inline-block font-bold">2 Months Free</strong></span>{' '}<span className="block sm:inline"><span className="hidden sm:inline">· </span>Redeem by Dec 31, 2026 <span aria-hidden="true">↗</span></span>
    </a>
    <Header /><main id="main-content" className="flex-auto">{children}</main><Footer /></>
}
