import Image from 'next/image'
import { PhoneFrame } from '@/components/PhoneFrame'
import { lightScreens } from '@/lib/screens'

const croppedScreens = new Set(['aggression', 'choose-plan', 'coach-link', 'coop-court', 'forecast', 'forecast-card', 'forecast-cover', 'forecast-flip', 'home', 'landings', 'live', 'live-counter', 'live-score', 'matches', 'momentum', 'new-match', 'pattern-editor', 'patterns', 'players', 'point-end', 'pressure', 'profile', 'profile-patterns', 'profile-zones', 'rally-court', 'rally-report', 'report-cover', 'report-points', 'report-summary', 'report-timeline', 'runs', 'serve-court', 'serve-report', 'sessions', 'settings', 'stats', 'stats-trend', 'students'])

export function AppScreenshot({ name, alt, className, priority = false }: { name: string; alt: string; className?: string; priority?: boolean }) {
  const isCroppedScreen = croppedScreens.has(name)
  const w = name === 'replay' ? 402 : isCroppedScreen ? 804 : 1179, h = name === 'replay' ? 812 : isCroppedScreen ? (name === 'choose-plan' || name === 'report-summary' ? 1556 : 1624) : 2277   /* 2× captures with the status bar cropped (124) and the home indicator kept — the bottom row of a court or a sheet sits inside the indicator's zone, so cropping it cut them */
  const dark = <Image src={`/screens/${name}.png`} alt={alt} width={w} height={h} priority={priority} loading={priority ? 'eager' : 'lazy'} sizes="(max-width: 768px) 260px, 340px" className={lightScreens.has(name) ? 'theme-dark-only' : undefined} />
  /* the light twin, when the screen has one (lib/screens.ts); CSS under html[data-theme] picks which of the two shows */
  const light = lightScreens.has(name) ? <Image src={`/screens/${name}-light.png`} alt={alt} width={w} height={h} loading="lazy" sizes="(max-width: 768px) 260px, 340px" className="theme-light-only" /> : null
  return <PhoneFrame className={className}>{dark}{light}</PhoneFrame>
}
