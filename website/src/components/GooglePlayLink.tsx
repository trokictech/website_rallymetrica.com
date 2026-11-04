import clsx from 'clsx'

function GooglePlayIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true"><path d="M3 2.5v19l9.2-9.5L3 2.5Zm1.5-.7L16 8.4l-3.1 3.1L4.5 1.8Zm12.4 7.1 4 2.3a.9.9 0 0 1 0 1.6l-4 2.3-3-3.1 3-3.1Zm-.9 6.7L4.5 22.2l8.4-9.7 3.1 3.1Z" /></svg>
}

export function GooglePlayLink({ className }: { className?: string }) {
  return <a href="/get/android/" className={clsx('inline-flex min-h-[54px] items-center gap-3 rounded-xl border border-line bg-ink/5 px-4 py-2.5 text-ink transition-colors hover:bg-ink/10', className)} aria-label="Rallymetrica is coming soon to Google Play"><GooglePlayIcon /><span className="text-left"><span className="block text-[10px] leading-4 text-accent">Coming soon to</span><span className="block text-lg font-semibold leading-5">Google Play</span></span></a>
}
