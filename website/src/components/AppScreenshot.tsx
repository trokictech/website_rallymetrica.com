import Image from 'next/image'
import { PhoneFrame } from '@/components/PhoneFrame'
import { lightScreens } from '@/lib/screens'

const croppedScreens = new Set(['aggression', 'choose-plan', 'coach-link', 'coop-between-runs', 'coop-court', 'coop-placement-court', 'edge-map-direction', 'edge-map-rate', 'edge-map-return', 'edge-map-serve', 'edge-map-stroke', 'forecast', 'forecast-card', 'forecast-cover', 'forecast-flip', 'home', 'landings', 'live', 'live-counter', 'live-half-return', 'live-score', 'live-turned', 'matches', 'momentum', 'momentum-aggression', 'new-match', 'notifications', 'pattern-editor', 'patterns', 'placement-court-depth', 'placement-court-lanes', 'placement-court-serve', 'placement-court-width', 'placement-depth', 'placement-width', 'players', 'point-end', 'pressure', 'profile', 'profile-patterns', 'profile-zones', 'quick-stats-placement', 'rally-court', 'rally-report', 'report-cover', 'report-points', 'report-summary', 'report-timeline', 'runs', 'serve-court', 'serve-court-receiver', 'serve-report', 'sessions', 'settings', 'settings-zones', 'setup-zones', 'stats', 'stats-edge-map', 'stats-placement', 'stats-trend', 'students'])

export function AppScreenshot({ name, alt, className, priority = false }: { name: string; alt: string; className?: string; priority?: boolean }) {
  const isCroppedScreen = croppedScreens.has(name)
  const w = name === 'replay' ? 402 : isCroppedScreen ? 804 : 1179, h = name === 'replay' ? 812 : isCroppedScreen ? (name === 'choose-plan' || name === 'report-summary' ? 1556 : 1748) : 2277   /* the app's captures whole at 804 wide — 804 × 1748, the status bar and the home indicator kept, as the store pages keep them (Nov 4, 2026; the Oct 18 cut took 124 off the top and the header sat flush against the bezel). Cut by scripts/cut-screens.mjs from app/docs/captures. */
  const dark = <Image src={`/screens/${name}.png`} alt={alt} width={w} height={h} priority={priority} loading={priority ? 'eager' : 'lazy'} sizes="(max-width: 768px) 260px, 340px" className={lightScreens.has(name) ? 'theme-dark-only' : undefined} />
  /* the light twin, when the screen has one (lib/screens.ts); CSS under html[data-theme] picks which of the two shows */
  const light = lightScreens.has(name) ? <Image src={`/screens/${name}-light.png`} alt={alt} width={w} height={h} loading="lazy" sizes="(max-width: 768px) 260px, 340px" className="theme-light-only" /> : null
  return <PhoneFrame className={className}>{dark}{light}</PhoneFrame>
}
