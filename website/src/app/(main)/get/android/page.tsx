import { type Metadata } from 'next'
import { GooglePlayLink } from '@/components/GooglePlayLink'
import { Container } from '@/components/Container'
import { Mark } from '@/components/Mark'
import { googlePlayUrl } from '@/lib/site'

export const metadata: Metadata = { title: 'Rallymetrica for Android', description: 'Download Rallymetrica for Android from Google Play.', robots: { index: false } }

export default function GetAndroid() {
  return <>
    <meta httpEquiv="refresh" content={`0;url=${googlePlayUrl}`} />
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
    <Mark className="h-20 w-20" />
    <p className="eyebrow mt-8 text-accent">Rallymetrica for Android</p>
    <h1 className="mt-5 max-w-md text-4xl leading-[1.1] font-semibold tracking-[-.05em]">Opening Google Play…</h1>
    <p className="mt-5 max-w-sm text-sm leading-6 text-muted">If nothing happens, <a href={googlePlayUrl} className="font-semibold text-accent">open the listing</a>.</p>
    <div className="mt-9"><GooglePlayLink /></div>
    </Container>
  </>
}
