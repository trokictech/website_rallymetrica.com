import clsx from 'clsx'

export function PhoneFrame({ className, children, priority: _priority, ...props }: React.ComponentPropsWithoutRef<'div'> & { priority?: boolean }) {
  return <div className={clsx('phone-shell', className)} {...props}><div className="phone-screen">{children}</div></div>
}
