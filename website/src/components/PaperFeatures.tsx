import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const ways = [
  { number: '01', title: 'One sheet, three ways', description: 'Share on any report opens the sheet: send the PDF to a parent or a coach, save it to Files, or print it. The pages are the app’s own — the cover with the winner’s band, Momentum, Aggression, every table, the landing maps with their placement tables, the patterns and the timeline.' },
  { number: '02', title: 'The data too', description: 'The same sheet exports a CSV: one row per ball, with every recorded fact beside it, ready for a spreadsheet or a pivot table. Settings → Data writes the whole season as one file — a row per match and player, every statistic with its fraction.' },
  { number: '03', title: 'Every session kind', description: 'A match, a rally session, a co-op, a serve session — each has its report on paper in its own order: a co-op’s Runs page, a serve session’s Placement with the accuracy table.' },
]

/* The report on paper — the one picture on the home page that is not a phone, because this is the one feature that leaves it (Oct 18). The composite is three Letter pages rendered from the design prototype's Report PDF on a TRANSPARENT ground (owner, Oct 18 — no painted backdrop): the cover upright and largest in front, Landings at the left and Aggression at the right behind it, turned outward — the phone-trio arrangement; ASSETS.md names the file. */
export function PaperFeatures() {
  return <section id="paper" className="overflow-hidden border-t border-line py-20 sm:py-28">
    <Container>
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-12">
        <div>
          <p className="eyebrow text-accent">The report, on paper</p>
          <h2 className="section-heading mt-5">Take the match<br /><span className="text-accent">off the phone.</span></h2>
          <p className="mt-5 text-base leading-7 text-muted">Share any report as a PDF — page for page as the app draws it. Print it for the car ride home, send it to a parent, keep the season in a folder.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href="/learn/reports-and-replay#step-13" variant="outline">How sharing works ↗</Button><Button href="/support#data" variant="outline">PDF and CSV, in detail ↗</Button></div>
        </div>
        <figure className="relative mx-auto w-full max-w-[820px] lg:-mr-6">
          <div className="absolute inset-x-[15%] inset-y-[10%] -z-10 rounded-full bg-accent/[.06] blur-3xl" aria-hidden="true" />
          <Image src="/screens/paper.png" alt="Three pages of a Rallymetrica match report: the cover with the winner’s band in front, a Landings page with the court maps and their tables at the left, the Aggression page with its bars at the right" width={1800} height={1400} sizes="(max-width: 1024px) 94vw, 820px" className="h-auto w-full" />
        </figure>
      </div>
      <div className="mt-14 grid gap-8 sm:grid-cols-3">{ways.map(way => <div key={way.number} className="border-t border-line pt-7"><span className="eyebrow text-accent/70">{way.number} /</span><h3 className="mt-7 text-xl font-semibold tracking-tight">{way.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{way.description}</p></div>)}</div>
    </Container>
  </section>
}
