import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/Container'
import { AppScreenshot } from '@/components/AppScreenshot'
import { guides } from '@/lib/guides'

export function generateStaticParams() { return guides.map(guide => ({ slug: guide.slug })) }
export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = guides.find(item => item.slug === slug)
  return guide ? { title: guide.title, description: guide.description } : { title: 'Guide not found' }
}

function RichText({ text }: { text: string }) {
  return <>{text.split(/(\*\*.*?\*\*)/g).map((part,index) => part.startsWith('**') ? <strong key={index}>{part.slice(2,-2)}</strong> : part)}</>
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = guides.find(item => item.slug === slug)
  if (!guide) notFound()
  const related = guides.filter(item => item.slug !== slug && item.category === guide.category).concat(guides.filter(item => item.slug !== slug && item.category !== guide.category)).slice(0,2)
  return <Container className="py-12 sm:py-16">
    <Link href="/learn" className="text-sm text-muted hover:text-accent">← All guides</Link>
    <div className="mt-10 grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-14">
      <aside className="hidden lg:block"><nav aria-label="Guide navigation" className="sticky top-8"><p className="eyebrow mb-6 text-accent">The playbook</p>{guides.map(item => <Link href={`/learn/${item.slug}`} key={item.slug} aria-current={slug === item.slug ? 'page' : undefined} className={`block border-l py-3 pl-4 text-sm leading-6 ${slug === item.slug ? 'border-accent text-accent' : 'border-white/15 text-muted hover:text-ink'}`}>{item.title}</Link>)}<p className="eyebrow mt-8 mb-4 text-accent">Reference</p><Link href="/learn/stats-engine" className="block border-l border-white/15 py-3 pl-4 text-sm leading-6 text-muted hover:text-ink">The stats engine</Link></nav></aside>
      <article><header className="max-w-3xl"><div className="eyebrow flex gap-4 text-accent"><span>{guide.category}</span><span className="text-muted">{guide.duration} read</span></div><h1 className="mt-5 text-4xl leading-[1.12] font-semibold tracking-[-.05em] sm:text-5xl">{guide.title}</h1><p className="mt-6 text-lg leading-8 text-muted">{guide.intro}</p></header>
        <div className="mt-12 grid gap-12 xl:grid-cols-[1fr_255px]"><div className="guide-copy"><nav aria-label="On this page" className="mb-10 rounded-2xl border border-white/10 bg-surface p-6"><p className="eyebrow mb-4 text-accent">In this guide</p><ol className="space-y-2">{guide.steps.map((step,index) => <li key={step.title}><a href={`#step-${index+1}`} className="text-sm text-muted hover:text-accent">{index+1}. {step.title}</a></li>)}</ol></nav>
          <ol className="space-y-10">{guide.steps.map((step,index) => <li id={`step-${index+1}`} key={step.title} className="scroll-mt-8 border-t border-white/10 pt-7"><div className="flex items-start gap-4"><span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">{index+1}</span><div><h2 className="text-xl font-semibold leading-7 text-ink">{step.title}</h2><p className="mt-4 text-sm"><RichText text={step.body} /></p></div></div></li>)}</ol>
          <section className="mt-12 rounded-2xl border border-accent/15 bg-accent/[.04] p-6"><h2 className="eyebrow text-accent">Good to know</h2><ul className="mt-4 list-disc space-y-3 pl-4 text-sm">{guide.notes.map(note => <li key={note}>{note}</li>)}</ul></section>
        </div><figure className="mx-auto w-[255px] xl:mx-0"><div className="xl:sticky xl:top-8"><AppScreenshot name={guide.screen} alt={guide.screenAlt} /><figcaption className="mt-5 text-center text-xs leading-5 text-muted">Preview screen. Appearance may change before launch.</figcaption></div></figure></div>
        <section className="mt-16 border-t border-white/10 pt-8"><p className="eyebrow text-accent">Keep exploring</p><div className="mt-6 grid gap-4 sm:grid-cols-2">{related.map(item => <Link href={`/learn/${item.slug}`} key={item.slug} className="rounded-2xl border border-white/10 p-6 transition-colors hover:border-accent/30"><p className="text-xs text-muted">{item.duration} read</p><h2 className="mt-3 text-lg font-semibold">{item.title}</h2><p className="mt-3 text-sm text-accent">Read the guide ↗</p></Link>)}</div></section>
      </article>
    </div>
  </Container>
}
