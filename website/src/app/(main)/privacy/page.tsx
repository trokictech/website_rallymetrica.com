import { type Metadata } from 'next'
import { LegalDoc, type LegalSection } from '@/components/LegalDoc'
import { companyName, supportEmail } from '@/lib/site'

export const metadata: Metadata = { title: 'Privacy policy', description: 'How Rallymetrica handles your data: matches stay on your phone, sharing with a linked coach is end-to-end encrypted, and there is no account.' }

const sections: LegalSection[] = [
  { id: 'summary', title: 'The short version', bullets: [
    'There is no account. Rallymetrica never asks for your name, email or password.',
    'Your players, matches and points are stored on your phone. We do not keep a copy.',
    'If you link a coach, the match travels between the two phones end-to-end encrypted. The delivery service cannot read it.',
    'Subscriptions are handled by Apple. We never see your payment details.',
    'No advertising, no sale of personal data, no third-party analytics in the app or on this website.',
  ] },
  { id: 'who', title: 'Who we are', paragraphs: [
    `Rallymetrica is made by ${companyName}, a Georgia (USA) limited liability company. This policy covers the Rallymetrica iOS app and the website rallymetrica.com. Questions go to ${supportEmail}.`,
  ] },
  { id: 'on-device', title: 'What the app stores on your phone', paragraphs: [
    'Everything you record stays in the app’s storage on your device: the players you create (the names you give them), matches and every point, patterns of play, zone traits, notes, settings and your plan state. iOS protects this storage with the device’s own encryption, and it is included in any iPhone backup you make with Apple.',
    'A backup you save under Settings → Data is a file you create and keep. We never receive it. Clear all data under Settings → Data, or deleting the app, removes everything from the phone.',
  ] },
  { id: 'leaves', title: 'What leaves your phone, and why', paragraphs: ['Nothing leaves your phone unless you use one of the following.'], bullets: [
    'Coach link (optional). When a player links a coach, saved points, match records and pattern assignments are sent between the two phones through our delivery relay. Each message is encrypted on the sending phone with keys that exist only on the two linked phones; the relay forwards sealed envelopes it cannot open. To deliver them, the relay stores each envelope until it is retrieved (undelivered envelopes are removed after thirty days), the devices’ push tokens, the link identifiers, and ordinary connection details such as IP addresses and timestamps in its logs.',
    'Notifications. Live-score notifications reach a coach through Apple’s push service as a wake-up; the notification text is composed on the coach’s phone after the update is decrypted. Apple receives the device token and the wake-up, not the match.',
    'Subscriptions. Purchases, trials and renewals are made through your Apple ID. We use RevenueCat to confirm the purchase and keep your plan active across reinstalls; it receives an anonymous app identifier, the App Store receipt and basic device information, never your name or payment details. See Apple’s and RevenueCat’s privacy policies for how they handle that data.',
    'Location and weather (optional). If you turn on Use location and weather at match setup, your approximate location is sent to a weather service to fetch the conditions, which are saved with the match on your phone. Your location is not stored by us.',
    'Camera. The camera is used only to scan a coach-link code. No image is stored or sent.',
    'Email. If you write to us, we keep the correspondence to answer you.',
  ] },
  { id: 'website', title: 'This website', paragraphs: [
    'rallymetrica.com is a static site served by GitHub Pages. It sets no cookies and runs no analytics. GitHub may record standard request logs (IP address, browser, pages requested) to operate the service.',
  ] },
  { id: 'sharing', title: 'Who else sees your data', paragraphs: [
    'Only the people you choose. A linked coach receives read-only copies of the matches you record while the link is active; a coach’s students see nothing of the coach’s other students. We do not sell personal data and we do not share it with advertisers. The service providers above (Apple, RevenueCat, the weather service, GitHub) process only what their role needs.',
  ] },
  { id: 'unlink', title: 'Unlinking and deletion', paragraphs: [
    'Unlinking stops new sharing immediately on your phone. Once the coach’s app is online and receives the unlink, it removes the match copies it received through that link. Your original recordings stay on your phone. Unlinking does not remove matches the coach recorded independently or copies already exported or shared outside the link. Pausing a link stops new updates and keeps received copies.',
    `Because we do not hold your match data, there is nothing for us to delete on request; the relay’s envelopes expire on retrieval or after thirty days, and push tokens are dropped when a link ends. If you believe we hold something about you, write to ${supportEmail} and we will look.`,
  ] },
  { id: 'children', title: 'Children', paragraphs: [
    'Rallymetrica is not directed at children under 13 and does not knowingly collect personal information from them. Coaches and parents who record a junior player’s matches are responsible for having the appropriate consent. A player name can be anything — initials are fine.',
  ] },
  { id: 'rights', title: 'Your rights', paragraphs: [
    `Wherever you live, you can see everything Rallymetrica holds about you by opening the app: it is all on your phone. You can export it as a backup, correct it, or delete it at any time. If you have a question or a complaint about how we handle data, contact ${supportEmail}; residents of the EU, the UK and California also have the right to complain to their local data-protection authority.`,
  ] },
  { id: 'changes', title: 'Changes to this policy', paragraphs: [
    'If we change what the app sends or stores, we will update this page and the effective date above, and the app will point to the new version. Continued use after a change means you accept it.',
  ] },
  { id: 'contact', title: 'Contact', paragraphs: [`${companyName} · ${supportEmail}`] },
]

export default function Privacy() {
  return <LegalDoc eyebrow="Privacy" title="Your data stays yours." updated="October 9, 2026" intro="Rallymetrica was built so that we do not have to be trusted with your matches: they live on your phone, and anything you share with a coach is encrypted before it leaves. This page says exactly what the app and this website do with data, and what they do not." sections={sections} />
}
