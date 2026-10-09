import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { AppScreenshot } from '@/components/AppScreenshot'

export function Hero() {
  return <section className="overflow-hidden">
    <Container className="relative grid gap-14 pt-16 pb-16 lg:min-h-[760px] lg:grid-cols-2 lg:gap-8 lg:pt-28 lg:pb-20">
      <div className="relative z-10 lg:pt-7">
        <div className="eyebrow mb-7 flex items-center gap-3 text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" />Tennis match tracking for players and coaches</div>
        <h1 className="max-w-xl text-[clamp(3.5rem,6vw,5.4rem)] leading-[1.04] font-semibold tracking-[-.065em]">Record. Analyze.<br /><span className="text-accent">Improve.</span></h1>
        <p className="mt-7 max-w-[440px] text-base leading-7 text-muted">Tap the points as they are played. Rallymetrica turns them into a match report, a replay and a season of stats.</p>
        <div className="mt-6 max-w-[440px] border-l-2 border-accent pl-4"><p className="text-base font-semibold">Your match. <span className="text-accent">Live on your coach’s phone.</span></p><p className="mt-2 text-sm leading-6 text-muted">Link once by scanning a code. From then on every point you save reaches your coach as it lands, with a notification every set, game or point — their choice.</p></div>
        <div className="mt-9 flex flex-wrap items-center gap-4"><AppStoreLink /><Button href="/#pricing" variant="outline">See the plans <span aria-hidden="true">↗</span></Button></div>
        <p className="mt-5 text-xs leading-5"><a href="#privacy" className="text-ink hover:underline">It’s your data. <span className="font-semibold text-accent">You own it.</span> ↗</a><span className="block text-muted">Matches live on your phone. Sharing is end-to-end encrypted.</span></p>
      </div>
      <div className="relative mx-auto flex w-full max-w-[560px] items-start justify-between gap-4 sm:gap-6 lg:-mt-2">
        <div className="hero-glow pointer-events-none absolute -inset-x-16 top-10 bottom-0" aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-start gap-5 pt-8 sm:pt-16">
          <img src="/mark.svg" alt="" width={176} height={176} className="h-[96px] w-[96px] sm:h-[176px] sm:w-[176px]" />
          <p className="hidden max-w-[200px] text-sm leading-6 text-muted sm:block">The score, the shots and the rallies — recorded from the side of the court, one tap per ball.</p>
        </div>
        <AppScreenshot name="live" alt="Rallymetrica live court with the score and detailed shot tracking" priority className="relative z-10 w-[min(230px,56vw)] shrink-0 sm:w-[285px]" />
      </div>
    </Container>
  </section>
}
