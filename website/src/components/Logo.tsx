/* The site's logo: the RM mark with the wordmark, as the app's splash draws it (RALLY in ink, METRICA in the accent).
   The Header and the Footer render <Logo /> — the template's own Logo.tsx is replaced by this file. */
export function Logo({ className = '' }: { className?: string }) {
  return <span className={`inline-flex items-center gap-3 ${className}`}>
    <img src="/mark.svg" alt="" width={36} height={36} className="h-9 w-9 shrink-0" />
    <span className="text-[15px] font-bold tracking-[.2em] uppercase leading-none"><span className="text-ink">Rally</span><span className="text-accent">metrica</span></span>
  </span>
}
