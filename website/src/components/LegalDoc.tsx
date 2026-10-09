import Link from 'next/link'
import { Container } from '@/components/Container'

export type LegalSection = { id: string; title: string; paragraphs?: string[]; bullets?: string[]; after?: string[] }

export function LegalDoc({ eyebrow, title, updated, intro, sections }: { eyebrow: string; title: string; updated: string; intro: string; sections: LegalSection[] }) {
  return <Container className="py-12 sm:py-16">
    <Link href="/" className="text-sm text-muted hover:text-accent">← Home</Link>
    <div className="mt-10 grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-14">
      <aside className="hidden lg:block"><nav aria-label="On this page" className="sticky top-8"><p className="eyebrow mb-6 text-accent">On this page</p>{sections.map(section => <a href={`#${section.id}`} key={section.id} className="block border-l border-white/15 py-2.5 pl-4 text-sm leading-6 text-muted hover:text-ink">{section.title}</a>)}</nav></aside>
      <article className="max-w-3xl">
        <header><p className="eyebrow text-accent">{eyebrow}</p><h1 className="mt-5 text-4xl leading-[1.12] font-semibold tracking-[-.05em] sm:text-5xl">{title}</h1><p className="mt-4 text-xs text-muted">Effective {updated}</p><p className="mt-6 text-lg leading-8 text-muted">{intro}</p></header>
        <div className="guide-copy mt-12 space-y-10">{sections.map(section => <section id={section.id} key={section.id} className="scroll-mt-8 border-t border-white/10 pt-7"><h2 className="text-xl font-semibold leading-7 text-ink">{section.title}</h2>{section.paragraphs?.map(paragraph => <p key={paragraph} className="mt-4 text-sm">{paragraph}</p>)}{section.bullets && <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}{section.after?.map(paragraph => <p key={paragraph} className="mt-4 text-sm">{paragraph}</p>)}</section>)}</div>
      </article>
    </div>
  </Container>
}
