/* Set the verified Apple listing URL here when Rallymetrica launches. */
export const appStoreUrl: string | null = null

export const siteUrl = 'https://rallymetrica.com'

/* Prices as set in App Store Connect (Oct 2026). The 7-day free trial applies to every subscription. Coach and Academy differ only in the student cap. Practice sessions (rally and serve) are on every paid plan. */
export const plans = [
  { id: 'free', name: 'Free', price: 'Free', per: '', note: 'No account, no card', items: ['Score every match, point by point — unlimited matches', 'The report on what the score gives: pressure, momentum, timeline', 'Two detailed matches to try: shots, landings, replays, the full stats report'] },
  { id: 'player', name: 'Player', price: '$69.99', per: 'a year', note: 'or $6.99 a month · 7-day free trial', items: ['Detailed match tracking: shots, landings, replays', 'Rally and serve sessions: first-to-11 games, co-op runs, serve blocks with a target', 'Full stats engine with momentum and aggression', 'Link to a coach: they follow your matches and sessions live and assign play patterns'] },
  { id: 'coach', name: 'Coach', price: '$99.99', per: 'a year', note: 'Up to 5 students · 7-day free trial', items: ['Every player you coach in one roster — link your students and their matches and sessions arrive live', 'Full stats engine: not only per student, but compared across students', 'Draw play patterns, assign them, and track how often each one is played and won — in matches and rally sessions', 'Notifications per student: live scores by set, game or point; match start and end'] },
  { id: 'academy', name: 'Academy', price: '$199.99', per: 'a year', note: 'Up to 25 students · 7-day free trial', items: ['Everything in Coach, for a full academy roster', 'Twenty-five linked students, each with their own live-score setting', 'Upgrade from Coach any time; nothing is unlinked by a plan change'] },
]

export const supportEmail = 'help@rallymetrica.com'
export const companyName = 'Trokic Tech LLC'

export const navigation = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Learn', href: '/learn' },
  { label: 'FAQs', href: '/#faqs' },
]
