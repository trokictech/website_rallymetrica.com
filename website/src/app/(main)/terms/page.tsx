import { type Metadata } from 'next'
import { LegalDoc, type LegalSection } from '@/components/LegalDoc'
import { companyName, supportEmail } from '@/lib/site'

export const metadata: Metadata = { title: 'Terms of use', description: 'The terms for using the Rallymetrica app and website: plans and subscriptions, your content, the coach link, and the limits of the service.' }

const sections: LegalSection[] = [
  { id: 'agreement', title: 'The agreement', paragraphs: [
    `These terms are an agreement between you and ${companyName} (“we”), the maker of Rallymetrica. They cover the Rallymetrica iOS app and the website rallymetrica.com. By installing or using either, you accept them; if you do not, please do not use Rallymetrica. The Privacy policy explains how data is handled and forms part of these terms.`,
  ] },
  { id: 'service', title: 'What Rallymetrica is', paragraphs: [
    'Rallymetrica records tennis matches point by point on your phone and turns the record into scores, reports, replays and statistics. A player can link a coach so that the coach follows the match live on their own phone. The app works offline; no account is required.',
  ] },
  { id: 'plans', title: 'Plans, trials and subscriptions', bullets: [
    'Free scores every match and includes two detailed matches to try. Player and Coach (Coach for up to 5 students, Academy for up to 25) are auto-renewing subscriptions bought through the App Store at the prices shown there, which may vary by country.',
    'Each subscription starts with a 7-day free trial, once per Apple ID. Payment is charged to your Apple ID when the trial ends unless you cancel at least 24 hours before. The subscription renews automatically at the same price and period until cancelled.',
    'You manage, change or cancel a subscription in your Apple ID settings (Settings → Apple ID → Subscriptions) or from Settings → Plan in the app. Cancelling stops the next renewal; the current period runs to its end. Refunds are handled by Apple under its terms.',
    'Your subscription is tied to your Apple ID. Reinstalling the app or moving to a new phone restores it through Restore purchases; it does not restore your matches, which are yours to back up.',
    'Features that need a plan are described in the app and on this website. If a plan lapses, the matches you recorded stay on your phone and remain readable at the Free level.',
  ] },
  { id: 'your-content', title: 'Your content', paragraphs: [
    'Everything you record — players, matches, points, patterns, notes — is yours. You are responsible for keeping backups (Settings → Data) and for having permission to record the people whose matches you track, including opponents and students. Give people the names they would want; initials are enough.',
    'We do not receive, store or claim any rights over your match data. Where a match is shared through a coach link, you grant the linked coach the right to view it in the app for coaching you; that right ends when you unlink, as described in the Privacy policy.',
  ] },
  { id: 'link', title: 'The coach link', bullets: [
    'A link is created only with the player’s approval, from the player’s phone, and can be paused or ended by either side at any time.',
    'A coach may use received matches only for coaching the player who shared them. Re-sharing a student’s matches outside the link without their consent is not permitted.',
    'The delivery relay is provided as is and may be interrupted for maintenance. Updates sent while a phone is offline queue and arrive in order when it reconnects.',
  ] },
  { id: 'use', title: 'Acceptable use', paragraphs: ['You agree not to:'], bullets: [
    'copy, modify, reverse engineer or redistribute the app, or circumvent its plan checks;',
    'send abusive, automated or excessive traffic to the delivery relay, or attempt to read other users’ envelopes;',
    'use Rallymetrica to track people without their knowledge where the law requires consent, or for any unlawful purpose;',
    'use the statistics for betting or in any way that breaks the rules of a competition you take part in.',
  ] },
  { id: 'accuracy', title: 'Statistics and accuracy', paragraphs: [
    'Every number in Rallymetrica is computed from what was tapped on the court. A mistake in the tapping becomes a mistake in the statistics, and judgment calls — forced or unforced, winner or error — are the recorder’s. The reports and trends are information to support coaching and training decisions; they are not professional, medical or selection advice, and we make no promise about their completeness or accuracy for any particular purpose.',
  ] },
  { id: 'warranty', title: 'No warranty; limitation of liability', paragraphs: [
    'Rallymetrica, the relay and this website are provided “as is” and “as available”, without warranties of any kind, express or implied, including fitness for a particular purpose and non-infringement. To the fullest extent permitted by law, we are not liable for indirect, incidental, special or consequential damages, loss of data, or loss of profits arising from your use of Rallymetrica, and our total liability for any claim is limited to the amount you paid us for the service in the twelve months before the claim. Some jurisdictions do not allow these limits; where they apply, our liability is limited to the extent the law allows.',
  ] },
  { id: 'termination', title: 'Ending the agreement', paragraphs: [
    'You can stop using Rallymetrica at any time by deleting the app; your subscription is managed through Apple as described above. We may suspend or end access to the delivery relay for accounts that abuse it or break these terms. Sections on your content, accuracy, warranty and liability survive termination.',
  ] },
  { id: 'apple', title: 'Terms that apply because the app is distributed by Apple', bullets: [
    `This agreement is between you and ${companyName} only, not with Apple. Apple is not responsible for the app or its content.`,
    'Your licence to use the app is limited, non-transferable, and applies to any Apple-branded device you own or control, as permitted by the App Store’s Usage Rules.',
    `${companyName}, not Apple, is responsible for maintenance and support of the app and for addressing any claims relating to it, including product-liability claims, claims that it fails to conform to a legal or regulatory requirement, and consumer-protection claims. Apple has no obligation to provide support.`,
    'If the app fails to conform to an applicable warranty, you may notify Apple, and Apple will refund the purchase price to you; to the maximum extent permitted by law, Apple has no other warranty obligation.',
    `In the event of a third-party claim that the app infringes intellectual-property rights, ${companyName}, not Apple, is responsible for its investigation, defence, settlement and discharge.`,
    'You represent that you are not located in a country subject to a U.S. Government embargo or designated a “terrorist supporting” country, and that you are not on any U.S. Government list of prohibited or restricted parties.',
    'Apple and its subsidiaries are third-party beneficiaries of this agreement and may enforce it against you.',
  ] },
  { id: 'law', title: 'Governing law and changes', paragraphs: [
    'These terms are governed by the laws of the State of Georgia, USA, without regard to its conflict-of-law rules; nothing in them takes away consumer rights you have under the law of the country where you live. We may update these terms; the effective date above will change and the app will point to the new version. Continued use after a change means you accept it.',
  ] },
  { id: 'contact', title: 'Contact', paragraphs: [`${companyName} · ${supportEmail}`] },
]

export default function Terms() {
  return <LegalDoc eyebrow="Terms of use" title="The rules of the court." updated="October 9, 2026" intro="Plain terms for a plain app: what you get on each plan, how subscriptions work through Apple, what is yours, and where our responsibility ends." sections={sections} />
}
