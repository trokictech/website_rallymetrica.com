import { type Metadata } from 'next'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Mark } from '@/components/Mark'

export const metadata: Metadata = { title: 'Rallymetrica for Android', description: 'Rallymetrica is coming soon to Google Play.', robots: { index: false } }

export default function GetAndroid() {
  return <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
    <Mark className="h-20 w-20" />
    <p className="eyebrow mt-8 text-accent">Rallymetrica for Android</p>
    <h1 className="mt-5 max-w-md text-4xl leading-[1.1] font-semibold tracking-[-.05em]">Coming soon to <span className="text-accent">Google Play.</span></h1>
    <p className="mt-5 max-w-sm text-sm leading-6 text-muted">Rallymetrica for Android is on the way. Check this page for the Google Play link when it’s available.</p>
    <div className="mt-9"><Button href="/" variant="outline">Explore Rallymetrica <span aria-hidden="true">↗</span></Button></div>
  </Container>
}
