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
        <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-white/10 pt-7 text-[10px] font-semibold tracking-[.08em] text-muted"><span>RECORD THE MATCH</span><span className="text-accent/50" aria-hidden="true">/</span><span>ANALYZE THE POINTS</span><span className="text-accent/50" aria-hidden="true">/</span><span>IMPROVE THE GAME</span></div>
      </div>
      <div className="hero-glow relative mx-auto h-[540px] w-full max-w-[580px] sm:h-[620px] lg:-mt-4">
        <div className="hero-orbit" aria-hidden="true" />
        <AppScreenshot name="momentum" alt="Rallymetrica match report showing momentum and its biggest swings" className="absolute top-14 right-0 w-[205px] rotate-[8deg] opacity-90 sm:right-2 sm:w-[255px]" />
        <AppScreenshot name="live" alt="Rallymetrica live court with the score and detailed shot tracking" priority className="absolute top-0 left-1 w-[230px] -rotate-[7deg] sm:left-8 sm:w-[285px]" />
        <div className="absolute bottom-0 left-0 h-20 w-full bg-linear-to-t from-ground to-transparent" aria-hidden="true" />
        <div className="absolute right-2 bottom-7 flex items-center gap-3 rounded-xl border border-white/10 bg-surface/95 px-4 py-3 shadow-xl sm:right-0 sm:bottom-5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent" aria-hidden="true">↗</span><div><p className="text-xs font-semibold">Live on the coach’s phone.</p><p className="mt-1 text-[10px] text-muted">Score. Stats. Point replays.</p></div></div>
      </div>
    </Container>
  </section>
}
