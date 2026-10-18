import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const features = [
  { number: '01', title: 'Saved on your phone, yours to take', description: 'Your recorded match history lives locally on your phone. A linked coach receives read-only copies on theirs. Every report exports as a PDF and every match, session or season as a CSV — from the Share sheet, to wherever you keep your files.' },
  { number: '02', title: 'Encrypted between you', description: 'Shared match content is end-to-end encrypted. The linked phones hold the keys to read it; the delivery service cannot read your match content.' },
  { number: '03', title: 'Unlink whenever you choose', description: 'Unlinking stops new sharing. Once the coach’s app is online and receives the unlink, it removes match copies received through that link. Your original recordings remain on your phone.' },
]

export function PrivacyFeatures() {
  return <section id="privacy" className="border-b border-line py-20 sm:py-24"><Container><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow text-accent">Sharing, on your terms</p><h2 className="section-heading mt-5">It’s your data.<br /><span className="text-accent">You own it.</span></h2></div><div className="flex flex-wrap gap-3"><Button href="/learn/coach-player-link#step-6" variant="outline">How unlinking works ↗</Button><Button href="/privacy" variant="outline">Privacy policy ↗</Button></div></div><div className="mt-12 grid gap-8 sm:grid-cols-3">{features.map(feature => <div key={feature.number} className="border-t border-line pt-7"><span className="eyebrow text-accent/70">{feature.number} /</span><h3 className="mt-7 text-xl font-semibold tracking-tight">{feature.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{feature.description}</p></div>)}</div><div className="mt-10 grid gap-x-8 gap-y-2 text-xs leading-6 text-muted sm:grid-cols-2"><p>To deliver updates, a relay queues encrypted messages and keeps device and connection details. Messages are removed after retrieval.</p><p>Unlinking does not remove matches recorded independently by a coach or copies already exported or shared outside the link.</p></div></Container></section>
}
