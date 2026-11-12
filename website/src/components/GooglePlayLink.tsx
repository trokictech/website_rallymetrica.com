import clsx from 'clsx'
import { googlePlayUrl } from '@/lib/site'

function GooglePlayIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true"><path d="M3 2.5v19l9.2-9.5L3 2.5Zm1.5-.7L16 8.4l-3.1 3.1L4.5 1.8Zm12.4 7.1 4 2.3a.9.9 0 0 1 0 1.6l-4 2.3-3-3.1 3-3.1Zm-.9 6.7L4.5 22.2l8.4-9.7 3.1 3.1Z" /></svg>
}

export function GooglePlayLink({ className, variant = 'badge' }: { className?: string; variant?: 'badge' | 'plain' }) {
  return <a href={googlePlayUrl} className={clsx('inline-flex items-center text-ink transition-colors', variant === 'badge' ? 'min-h-[54px] gap-3 rounded-xl border border-line bg-ink/5 px-4 py-2.5 hover:bg-ink/10' : 'min-h-12 gap-[9px] hover:opacity-80 [&>svg]:w-[25px]', className)} target="_blank" rel="noopener noreferrer" aria-label="Get Rallymetrica on Google Play"><GooglePlayIcon /><span className="text-left"><span className={clsx('block leading-4 text-muted', variant === 'badge' ? 'text-[10px]' : 'text-[11px]')}>Get it on</span><span className={clsx('block text-lg', variant === 'badge' ? 'font-semibold leading-5' : 'font-medium leading-6 tracking-[-.02em]')}>Google Play</span></span></a>
}
