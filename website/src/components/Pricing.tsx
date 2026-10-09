import { Container } from '@/components/Container'
import { plans } from '@/lib/site'

export function Pricing() {
  return <section id="pricing" className="border-y border-white/10 bg-surface/50 py-20 sm:py-28">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-accent">Plans</p>
        <h2 className="section-heading mt-5">Free to start.<br /><span className="text-accent">Pay for the detail.</span></h2>
        <p className="mt-5 text-base leading-7 text-muted">Every plan scores every match. Player and Coach add detailed tracking, the full stats engine and the live link — each with a 7-day free trial through the App Store.</p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map(plan => <div key={plan.id} className={`flex flex-col rounded-3xl border p-7 ${plan.id === 'player' ? 'border-accent/40 bg-ground' : 'border-white/10 bg-ground/60'}`}>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-sm font-semibold tracking-[.12em] uppercase">{plan.name}</h3>
            <p className="text-right"><span className="text-2xl font-semibold tracking-tight">{plan.price}</span>{plan.per && <span className="ml-1.5 text-sm text-muted">{plan.per}</span>}</p>
          </div>
          <p className="mt-2 text-xs leading-5 text-muted">{plan.note}</p>
          <ul className="mt-6 space-y-3">{plan.items.map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-ink"><span className="text-accent" aria-hidden="true">✓</span>{item}</li>)}</ul>
        </div>)}
      </div>
      <p className="mt-8 text-center text-xs leading-5 text-muted">Subscriptions renew through the App Store and can be changed or cancelled any time in Settings › Plan. Your matches stay on your phone whichever plan you are on.</p>
    </Container>
  </section>
}
