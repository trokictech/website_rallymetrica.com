import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { Mark } from '@/components/Mark'

const redemptionUrl = 'https://apps.apple.com/redeem?ctx=offercodes&id=6822543580&code=RM2MONTHS'

export const metadata: Metadata = { title: 'Redeem RM2MONTHS', description: 'Redeem your Rallymetrica Annual Player offer on the App Store.', robots: { index: false } }

export default function TryApple() {
  return <>
    <meta httpEquiv="refresh" content={`0;url=${redemptionUrl}`} />
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Mark className="h-20 w-20" />
      <p className="eyebrow mt-8 text-accent">Annual Player offer</p>
      <h1 className="mt-5 max-w-md text-4xl leading-[1.1] font-semibold tracking-[-.05em]">Opening the App Store…</h1>
      <p className="mt-5 max-w-sm text-sm leading-6 text-muted">If nothing happens, use the button below to redeem RM2MONTHS through Apple.</p>
      <a href={redemptionUrl} className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent/85">Redeem RM2MONTHS ↗</a>
    </Container>
  </>
}
