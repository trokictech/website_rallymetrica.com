/* Set the verified Apple listing URL here when Rallymetrica launches. */
export const appStoreUrl: string | null = null

/* Prices as set in App Store Connect (Oct 2026). The 7-day free trial applies to every subscription. */
export const plans = [
  { id: 'free', name: 'Free', price: 'Free', per: '', note: 'No account, no card', items: ['Score every match, point by point', 'Two detailed matches to try: shots, landings, replays, the full stats report'] },
  { id: 'player', name: 'Player', price: '$69.99', per: 'a year', note: 'or $6.99 a month · 7-day free trial', items: ['Detailed match tracking: shots, landings, replays', 'Full stats engine with momentum and aggression', 'Link to a coach: they follow your matches live and assign play patterns'] },
  { id: 'coach', name: 'Coach', price: '$99.99', per: 'a year', note: 'Coach · 5 students, or Academy · 25 · 7-day free trial', items: ['Every player you coach in one roster — link your students and their matches arrive live', 'Full stats engine: not only per student, but compared across students', 'Draw play patterns, assign them, and track how often each one is played and won', 'Notifications per student: live scores by set, game or point; match start and end'] },
]

export const supportEmail = 'help@rallymetrica.com'

export const navigation = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Learn', href: '/learn' },
  { label: 'FAQs', href: '/#faqs' },
]
