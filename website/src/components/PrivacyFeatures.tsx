import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const features = [
  { number: '01', title: 'Saved on your phone', description: 'Your recorded match history lives locally on your phone. A linked coach receives read-only copies on theirs. You choose whether to share.' },
  { number: '02', title: 'Encrypted between you', description: 'Shared match content is end-to-end encrypted. The linked phones hold the keys to read it; the delivery service cannot read your match content.' },
  { number: '03', title: 'Unlink whenever you choose', description: 'Unlinking stops new sharing. Once the coach’s app is online and receives the unlink, it removes match copies received through that link. Your original recordings remain on your phone.' },
]

export function PrivacyFeatures() {
  return <section id="privacy" className="border-b border-white/10 py-20 sm:py-24"><Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="eyebrow text-accent">Sharing, on your terms</p><h2 className="section-heading mt-5">It’s your data.<br /><span className="text-accent">You own it.</span></h2><Button href="/learn/coach-player-link#step-6" variant="outline" className="mt-8">How unlinking works ↗</Button></div><div><div className="space-y-7">{features.map(feature => <div key={feature.number} className="border-t border-white/15 pt-6"><p className="eyebrow text-accent/70">{feature.number} /</p><h3 className="mt-3 text-lg font-semibold">{feature.title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-muted">{feature.description}</p></div>)}</div><div className="mt-8 rounded-xl border border-white/10 bg-surface/50 p-5 text-xs leading-6 text-muted"><p>To deliver updates, a relay queues encrypted messages and keeps device and connection details. Messages are removed after retrieval.</p><p className="mt-3">Unlinking does not remove matches recorded independently by a coach or copies already exported or shared outside the link.</p></div></div></Container></section>
}
