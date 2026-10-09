import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'

export default function NotFound() {
  return <Layout><Container className="py-24 text-center"><p className="eyebrow text-accent">404 / Out of bounds</p><h1 className="mt-6 text-4xl font-semibold tracking-tight">Let’s get back on court.</h1><p className="mt-5 text-muted">This page isn’t here. The features and guides are a good place to start.</p><div className="mt-8 flex justify-center gap-4"><Button href="/">Home</Button><Button href="/learn" variant="outline">Explore the guides</Button></div></Container></Layout>
}
