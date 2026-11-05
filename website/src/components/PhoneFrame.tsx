import clsx from 'clsx'

/* THE STATUS BAR (Nov 4, 2026): the app's captures are taken on a web build whose status-bar rows are blank, so the frame draws the clock and the three glyphs
   over that band — the store composer's own recipe (store_marketing/screens/template.svg), scaled to the site's 804-wide picture: 9:41, the signal, the wifi,
   the battery, in the theme's ink. Phone pictures only (the 804 × 1748 cut); the paper sheets and the replay strip pass statusBar={false}. */
function StatusBar() {
  return <svg className="phone-status" viewBox="0 0 804 124" aria-hidden="true" fill="currentColor">
    <text x="100" y="54.5" fontSize="26.7" fontWeight="700" letterSpacing="-0.27" fontFamily="Manrope, system-ui, sans-serif">9:41</text>
    <svg x="602" y="36" width="24" height="16.7" viewBox="0 0 20 14"><rect x="0" y="9" width="3.5" height="5" rx="1" /><rect x="5.5" y="6.5" width="3.5" height="7.5" rx="1" /><rect x="11" y="3.5" width="3.5" height="10.5" rx="1" /><rect x="16.5" y="0" width="3.5" height="14" rx="1" /></svg>
    <svg x="635" y="35.7" width="22.7" height="17.3" viewBox="-1 0 20 15"><path d="M9 11.6a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM9 7.2c-1.9 0-3.6.75-4.85 1.95l1.5 1.5A4.9 4.9 0 0 1 9 9.3c1.3 0 2.5.5 3.35 1.35l1.5-1.5A6.85 6.85 0 0 0 9 7.2zm0-3.6c-2.9 0-5.5 1.15-7.4 3.05l1.5 1.5A8.5 8.5 0 0 1 9 5.65c2.3 0 4.4.9 5.9 2.5l1.5-1.5A10.45 10.45 0 0 0 9 3.6zM9 0C5.3 0 1.95 1.5-.45 3.9l1.5 1.5A12.6 12.6 0 0 1 9 2.1c3.1 0 5.9 1.3 7.95 3.3l1.5-1.5C16.05 1.5 12.7 0 9 0z" /></svg>
    <svg x="667" y="35.7" width="37.3" height="17.3" viewBox="0 0 30 14"><rect x="0.75" y="0.75" width="25" height="12.5" rx="3.5" fill="none" stroke="currentColor" strokeOpacity=".5" strokeWidth="1.5" /><rect x="2.5" y="2.5" width="21.5" height="9" rx="2" /><path d="M27.5 4.5v5a2.5 2.5 0 0 0 0-5z" fillOpacity=".5" /></svg>
  </svg>
}

export function PhoneFrame({ className, children, priority: _priority, statusBar = false, ...props }: React.ComponentPropsWithoutRef<'div'> & { priority?: boolean; statusBar?: boolean }) {
  return <div className={clsx('phone-shell', className)} {...props}><div className="phone-screen">{children}{statusBar ? <StatusBar /> : null}</div></div>
}
