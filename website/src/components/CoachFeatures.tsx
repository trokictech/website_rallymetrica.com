import Image from 'next/image'
import { AppScreenshot } from '@/components/AppScreenshot'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const steps = [
  { number: '01', title: 'Connect', description: 'The player opens Settings → Coach to show their QR code. The coach scans it from Settings → Students → Add student, then the player approves the link. Their profile, match history, and any match in progress sync to the coach’s phone.' },
  { number: '02', title: 'Track', description: 'Open a linked student to see their profile and shared matches. During a match, open Report or Replay so far on the coach’s phone to follow the score, refreshed match stats, and recorded point replays after every score update. The player records; the coach follows.' },
]

export function CoachFeatures() {
  return <section id="coaching" className="py-20 sm:py-28">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-accent">Player and coach, connected</p>
        <h2 className="section-heading mt-5">Coach the player.<br /><span className="text-accent">Follow the match.</span></h2>
        <p className="mt-5 text-base leading-7 text-muted">Link the two phones with the player’s approval. Then follow your student’s matches live on your own phone, with the score, match stats, and recorded point replays.</p>
      </div>
      <div className="mt-12 grid items-center gap-14 lg:grid-cols-2 lg:gap-14">
        <div>
          <ol className="space-y-6">{steps.map(step => <li key={step.number} className="flex gap-5"><span className="eyebrow shrink-0 pt-1 whitespace-nowrap text-accent/70" aria-hidden="true">{step.number} /</span><div><h3 className="text-base font-semibold">{step.title}</h3><p className="mt-2 max-w-lg text-sm leading-6 text-muted">{step.description}</p>
            {step.number === '01' && <figure className="mt-5 max-w-[280px]">
              <div className="relative aspect-[804/488] overflow-hidden rounded-2xl border border-white/10">
                <Image src="/screens/coach-qr.png" alt="Example player QR code shown in the app’s Coach screen" fill sizes="280px" className="object-cover object-[50%_85.714%]" />
              </div>
              <figcaption className="mt-3 text-xs leading-5 text-muted">Player QR code · example app preview</figcaption>
            </figure>}
          </div></li>)}</ol>
          <p className="mt-6 text-xs leading-5 text-muted">Keep the coach’s app open and connected to receive live updates.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/learn/coach-player-link" variant="outline">See how linking works ↗</Button>
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-[540px] gap-8 sm:grid-cols-2 sm:gap-6">
          <figure className="mx-auto w-full max-w-[260px] sm:max-w-[250px]">
            <AppScreenshot name="coach-link-approval" alt="Player’s Coach screen showing a link request with Link and Decline controls" />
            <figcaption className="mt-5 text-center text-xs leading-5 text-muted">Connect: the player approves the coach’s request.</figcaption>
          </figure>
          <figure className="mx-auto w-full max-w-[260px] sm:max-w-[250px]">
            <AppScreenshot name="coach-student" alt="Coach’s student screen showing shared matches, a live match, last sync, and Open profile" />
            <figcaption className="mt-5 text-center text-xs leading-5 text-muted">Track: see the student’s shared matches and live sync.</figcaption>
          </figure>
        </div>
      </div>
    </Container>
  </section>
}
