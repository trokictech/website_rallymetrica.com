import { AppScreenshot } from '@/components/AppScreenshot'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const steps = [
  { number: '01', title: 'Connect', description: 'The player opens Settings → Coach link to show their Rallymetrica code. The coach scans it from Settings → Students → Add student, and the player taps Link. Their profile, match history and any match in progress arrive on the coach’s phone.' },
  { number: '02', title: 'Follow', description: 'From then on every point the player saves reaches the coach as it lands — in the background, with a notification every set, game or point, set per student. Open the live card for the score, the report so far and the replay.' },
]

export function CoachFeatures() {
  return <section id="coaching" className="py-20 sm:py-28">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-accent">Player and coach, connected</p>
        <h2 className="section-heading mt-5">Coach the player.<br /><span className="text-accent">Follow the match.</span></h2>
        <p className="mt-5 text-base leading-7 text-muted">Link the two phones once. Then follow your students’ matches live on your own phone — up to 5 on Coach, 25 on Academy — with the score, the stats and the recorded rallies.</p>
      </div>
      <div className="mt-12 grid items-center gap-14 lg:grid-cols-2 lg:gap-14">
        <div>
          <ol className="space-y-6">{steps.map(step => <li key={step.number} className="flex gap-5"><span className="eyebrow shrink-0 pt-1 whitespace-nowrap text-accent/70" aria-hidden="true">{step.number} /</span><div><h3 className="text-base font-semibold">{step.title}</h3><p className="mt-2 max-w-lg text-sm leading-6 text-muted">{step.description}</p></div></li>)}</ol>
          <p className="mt-6 text-xs leading-5 text-muted">Points sent while a phone is offline queue up and arrive in order when it reconnects.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/learn/coach-player-link" variant="outline">See how linking works ↗</Button>
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-[540px] gap-8 sm:grid-cols-2 sm:gap-6">
          <figure className="mx-auto w-full max-w-[260px] sm:max-w-[250px]">
            <AppScreenshot name="players" alt="A coach’s roster with linked students" />
            <figcaption className="mt-5 text-center text-xs leading-5 text-muted">The roster: every student, the live ones marked.</figcaption>
          </figure>
          <figure className="mx-auto w-full max-w-[260px] sm:max-w-[250px]">
            <AppScreenshot name="home" alt="A student’s live match on the coach’s Home screen" />
            <figcaption className="mt-5 text-center text-xs leading-5 text-muted">Home: a student’s match, live, one tap from the report.</figcaption>
          </figure>
        </div>
      </div>
    </Container>
  </section>
}
