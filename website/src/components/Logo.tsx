import Image from 'next/image'
import clsx from 'clsx'

export function Logo({ className }: { className?: string }) {
  return <span className={clsx('inline-flex items-center gap-2.5', className)}>
    <Image src="/brand/rallymetrica.svg" width={42} height={42} alt="" />
    <span className="text-[18px] font-semibold tracking-[-.04em]">rallymetrica<span className="text-accent">.</span></span>
  </span>
}
