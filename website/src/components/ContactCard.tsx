import { Button } from '@/components/Button'

/* The support page's contact card (Oct 18): the address is the headline, the one-line ask beneath, one button that opens a pre-addressed mail.
   The card is the CallToAction surface (the accent-tinted panel with the accent/15 hairline) so the two read as one family; no underline, no second colour. */
export function ContactCard({ email, eyebrow, ask, subject }: { email: string; eyebrow: string; ask: string; subject?: string }) {
  const href = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`
  return <section aria-labelledby="contact-heading" className="relative overflow-hidden rounded-3xl border border-accent/15 bg-linear-to-br from-accent/10 via-surface to-surface px-7 py-10 sm:px-10 sm:py-12">
    <p id="contact-heading" className="eyebrow text-muted">{eyebrow}</p>
    <a href={href} className="mt-5 block break-all text-[clamp(1.6rem,4.2vw,2.75rem)] leading-[1.1] font-semibold tracking-[-.04em] text-ink hover:text-accent">{email}</a>
    <p className="mt-5 max-w-xl text-base leading-7 text-muted">{ask}</p>
    <div className="mt-8"><Button href={href}>Write an email <span aria-hidden="true">↗</span></Button></div>
  </section>
}
