import Image from 'next/image'
import { PhoneFrame } from '@/components/PhoneFrame'

const practiceScreens = new Set(['sessions', 'rally-court', 'coop-court', 'serve-court', 'serve-report', 'runs', 'rally-report', 'forecast', 'forecast-card', 'forecast-cover', 'forecast-flip'])

export function AppScreenshot({ name, alt, className, priority = false }: { name: string; alt: string; className?: string; priority?: boolean }) {
  const isPracticeScreen = practiceScreens.has(name)
  return <PhoneFrame className={className}><Image src={`/screens/${name}.png`} alt={alt} width={isPracticeScreen ? 804 : 1179} height={isPracticeScreen ? 1748 : 2277} priority={priority} loading={priority ? 'eager' : 'lazy'} sizes="(max-width: 768px) 260px, 340px" /></PhoneFrame>
}
