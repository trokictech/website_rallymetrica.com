import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return <><a href="#main-content" className="sr-only z-[100] rounded-lg bg-accent p-3 text-ground focus:not-sr-only focus:fixed focus:top-4 focus:left-4">Skip to content</a><Header /><main id="main-content" className="flex-auto">{children}</main><Footer /></>
}
