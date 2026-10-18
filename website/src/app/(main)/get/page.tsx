import { type Metadata } from 'next'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Container } from '@/components/Container'
import { Mark } from '@/components/Mark'
import { appStoreUrl } from '@/lib/site'

/* rallymetrica.com/get — the address the hero's QR code carries (public/qr-get.svg; DECISIONS › A QR code in the hero, Oct 18). The code never changes;
   this page does: once appStoreUrl is set in lib/site.ts it forwards to the listing at once (a meta refresh — the site is static), and until then it
   says so and shows the same App Store button the rest of the site shows. */
export const metadata: Metadata = { title: 'Get the app', description: 'Download Rallymetrica for iPhone and iPad.', robots: { index: false } }

export default function Get() {
  return <>
    {appStoreUrl && <meta httpEquiv="refresh" content={`0;url=${appStoreUrl}`} />}
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Mark className="h-20 w-20" />
      <p className="eyebrow mt-8 text-accent">Rallymetrica for iPhone and iPad</p>
      <h1 className="mt-5 max-w-md text-4xl leading-[1.1] font-semibold tracking-[-.05em]">{appStoreUrl ? 'Opening the App Store…' : 'Coming soon to the App Store.'}</h1>
      <p className="mt-5 max-w-sm text-sm leading-6 text-muted">{appStoreUrl ? <>If nothing happens, <a href={appStoreUrl} className="font-semibold text-accent">open the listing</a>.</> : 'The app is in its last round of testing. Keep this page: the same code will open the listing on launch day.'}</p>
      <div className="mt-9"><AppStoreLink /></div>
    </Container>
  </>
}
