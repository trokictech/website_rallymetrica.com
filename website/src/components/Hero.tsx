import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { AppScreenshot } from '@/components/AppScreenshot'
import { Mark } from '@/components/Mark'

export function Hero() {
  return <section className="overflow-hidden">
    <Container className="relative grid gap-14 pt-16 pb-16 lg:min-h-[760px] lg:grid-cols-2 lg:gap-8 lg:pt-28 lg:pb-20">
      <div className="relative z-10 lg:pt-7">
        <div className="eyebrow mb-7 flex items-center gap-3 text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" />Tennis match and practice tracking for players and coaches</div>
        <h1 className="max-w-xl text-[clamp(3.5rem,6vw,5.4rem)] leading-[1.04] font-semibold tracking-[-.065em]">Record. Analyze.<br /><span className="text-accent">Improve.</span></h1>
        <p className="mt-7 max-w-[440px] text-base leading-7 text-muted">Tap the points as they are played — in a match, a rally game or a serve session. Rallymetrica turns them into a report, a replay and a season of stats.</p>
        <div className="mt-6 max-w-[440px] border-l-2 border-accent pl-4"><p className="text-base font-semibold">Your match. <span className="text-accent">Live on your coach’s phone.</span></p><p className="mt-2 text-sm leading-6 text-muted">Link once by scanning a code. From then on every point you save reaches your coach as it lands, with a notification every set, game or point — their choice.</p></div>
        <div className="mt-9 flex flex-wrap items-start gap-4">
          <div className="flex flex-col items-start gap-3"><AppStoreLink /><Button href="/#pricing" variant="outline">See the plans <span aria-hidden="true">↗</span></Button><a href="/get/android/" className="text-xs text-muted hover:text-ink sm:hidden">Google Play · Coming soon</a></div>
          {/* Fixed QR destinations keep printed codes usable when store links change. White tiles stay readable in both themes; phone widths use links instead. */}
          <a href="/get" className="hidden flex-col items-center gap-2 sm:flex" aria-label="App Store: scan to install"><img src="/qr-get.svg" alt="" width={128} height={128} className="h-32 w-32" /><span className="text-center text-sm font-semibold text-ink">App Store<span className="block text-xs font-normal text-muted">Scan to install</span></span></a>
          <a href="/get/android/" className="hidden flex-col items-center gap-2 sm:flex" aria-label="Google Play: coming soon"><img src="/qr-google-play.svg" alt="" width={128} height={128} className="h-32 w-32" /><span className="text-center text-sm font-semibold text-ink">Google Play<span className="block text-xs font-semibold text-accent">Coming soon</span></span></a></div>
        <p className="mt-5 text-xs leading-5"><a href="#privacy" className="text-ink hover:underline">It’s your data. <span className="font-semibold text-accent">You own it.</span> ↗</a><span className="block text-muted">Matches live on your phone. Sharing is end-to-end encrypted.</span></p>
      </div>
      <div className="relative mx-auto flex w-full max-w-[560px] items-start justify-between gap-4 sm:gap-6 lg:-mt-2">
        <div className="hero-glow pointer-events-none absolute -inset-x-16 top-10 bottom-0" aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-start gap-5 pt-8 sm:pt-16">
          <Mark className="h-[96px] w-[96px] sm:h-[176px] sm:w-[176px]" />
          <p className="hidden max-w-[200px] text-sm leading-6 text-muted sm:block">The score, the shots and the rallies — recorded from the side of the court, one tap per ball.</p>
        </div>
        <AppScreenshot name="live" alt="Rallymetrica live court with the score and detailed shot tracking" priority className="relative z-10 w-[min(230px,56vw)] shrink-0 sm:w-[285px]" />
      </div>
    </Container>
  </section>
}
