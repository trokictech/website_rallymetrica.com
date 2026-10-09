import Image from 'next/image'
import { PhoneFrame } from '@/components/PhoneFrame'

export function AppScreenshot({ name, alt, className, priority = false }: { name: string; alt: string; className?: string; priority?: boolean }) {
  return <PhoneFrame className={className}><Image src={`/screens/${name}.png`} alt={alt} width={1179} height={2277} priority={priority} loading={priority ? 'eager' : 'lazy'} sizes="(max-width: 768px) 260px, 340px" /></PhoneFrame>
}
