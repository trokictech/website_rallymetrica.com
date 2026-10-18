import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  variant?: 'solid' | 'outline'
  color?: 'gray' | 'white' | 'cyan'
} & (React.ComponentPropsWithoutRef<typeof Link> | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined }))

export function Button({ className, variant = 'solid', color: _color, ...props }: ButtonProps) {
  const styles = clsx('inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors disabled:cursor-default', variant === 'solid' ? 'bg-accent text-on-accent hover:bg-accent/85 disabled:hover:bg-accent' : 'border border-line text-ink hover:border-accent/50 hover:bg-ink/5', className)
  return typeof props.href === 'undefined' ? <button className={styles} {...props} /> : <Link className={styles} {...props} />
}
