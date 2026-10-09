import clsx from 'clsx'
import { appStoreUrl } from '@/lib/site'

function AppleIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true"><path d="M16.37 1.4c.15 1.28-.38 2.56-1.13 3.44-.8.93-2.03 1.64-3.28 1.54-.16-1.23.46-2.56 1.18-3.36.8-.92 2.14-1.56 3.23-1.62ZM20.53 17.44c-.54 1.2-.8 1.73-1.5 2.79-.97 1.45-2.35 3.26-4.04 3.28-1.5.02-1.89-.97-3.92-.96-2.03.01-2.46.98-3.96.96-1.7-.02-3-1.65-3.97-3.1C.43 16.38.2 10.63 1.86 8.07c1.18-1.82 3.05-2.89 4.81-2.89 1.79 0 2.9.98 4.38.98 1.44 0 2.32-.98 4.36-.98 1.57 0 3.24.86 4.41 2.35-3.88 2.14-3.25 7.7.71 9.91Z" /></svg>
}

export function AppStoreLink({ className }: { className?: string }) {
  const styles = clsx('inline-flex min-h-[54px] items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-ink', className)
  const content = <><AppleIcon /><span className="text-left"><span className="block text-[10px] leading-4 text-muted">{appStoreUrl ? 'Download on the' : 'Coming soon to the'}</span><span className="block text-lg font-semibold leading-5">App Store</span></span></>
  return appStoreUrl ? <a href={appStoreUrl} className={clsx(styles, 'transition-colors hover:bg-white/10')} target="_blank" rel="noopener noreferrer">{content}</a> : <span className={styles} aria-label="Rallymetrica is coming soon to the App Store">{content}</span>
}
