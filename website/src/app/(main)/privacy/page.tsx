import { type Metadata } from 'next'
import { LegalDoc, type LegalSection } from '@/components/LegalDoc'
import { companyName, supportEmail } from '@/lib/site'

export const metadata: Metadata = { title: 'Privacy policy', description: 'How Rallymetrica handles your data: matches and practice sessions stay on your phone, sharing with a linked coach is end-to-end encrypted, and there is no account.' }

const sections: LegalSection[] = [
  { id: 'summary', title: 'The short version', bullets: [
    'There is no account. Rallymetrica never asks for your name, email or password.',
    'Your players, matches, practice sessions and points are stored on your phone. We do not keep a copy.',
    'If you link a coach, the match travels between the two phones end-to-end encrypted. The delivery service cannot read it.',
    'Subscriptions are handled by Apple or Google. We never see your payment details.',
    'To delete everything you have recorded: Settings → Data → Clear all data. No copy of it is kept anywhere else.',
    'The Free plan includes two detailed matches. Once you use one, our server keeps a hashed device identifier and a count from 0 to 2, so the free matches cannot be reset by reinstalling. It holds no name and nothing you recorded.',
    'No advertising or sale of personal data, and no third-party analytics in the app. This website uses Cloudflare Web Analytics as described below.',
  ] },
  { id: 'who', title: 'Who we are', paragraphs: [
    `Rallymetrica is made by ${companyName}. This policy covers the Rallymetrica app on iOS and Android and the website rallymetrica.com. Questions go to ${supportEmail}.`,
  ] },
  { id: 'on-device', title: 'What the app stores on your phone', paragraphs: [
    'Everything you record stays in the app’s storage on your device: the players you create (the names you give them), matches and practice sessions with every point, patterns of play, zone traits, notes, settings and your plan state. The operating system protects this storage with the device’s own encryption, and it is included in any backup you make with Apple or Google.',
    'A backup you save under Settings → Data, a PDF you share from a report, and a CSV you export are files you create and keep, and share only where you choose. We never receive them. Clear all data under Settings → Data, or deleting the app, removes everything from the phone.',
  ] },
  { id: 'leaves', title: 'What leaves your phone, and why', paragraphs: ['Your players, matches and points leave your phone only if you link a coach or share a file yourself. The app contacts a server only for the following.'], bullets: [
    'Coach link (optional). When a player links a coach, saved points, match and session records and pattern assignments are sent between the two phones through our delivery relay. Each message is encrypted on the sending phone with keys that exist only on the two linked phones; the relay forwards sealed envelopes it cannot open. To deliver them, the relay stores each envelope until it is retrieved (undelivered envelopes are removed after thirty days), the devices’ push tokens, the link identifiers, and ordinary connection details such as IP addresses and timestamps in its logs. A device with no live link and no activity for thirty days is removed from the relay.',
    'Notifications. Live-score notifications reach a coach through Apple’s or Google’s push service as a wake-up; the notification text is composed on the coach’s phone after the update is decrypted. Apple or Google receives the device token and the wake-up, not the match.',
    'Subscriptions. Purchases, trials and renewals are made through your Apple ID or your Google account. We use RevenueCat to confirm the purchase and keep your plan active across reinstalls; it receives an anonymous app identifier, the store receipt and basic device information, never your name or payment details. See Apple’s, Google’s and RevenueCat’s privacy policies for how they handle that data.',
    'Free detailed matches. The Free plan includes two detailed matches. So that the count cannot be reset by clearing the app’s data or reinstalling, the app sends our server an identifier for your device in hashed form, together with the number of free detailed matches used. The hash is a one-way scramble of a random value the app keeps in the device keychain on iPhone, or of the system’s app-specific device ID on Android; we never receive the identifier itself. The app sends this the first time it connects and whenever a free detailed match is used. The server stores a record only once a free detailed match has been used: the hashed identifier, a count from 0 to 2 and the date it last changed. The record holds no name, no Rallymetrica ID and nothing you recorded, and it is not used for advertising or tracking.',
    'Location and weather (optional). If you turn on Use location and weather at match setup, your approximate location is sent to a weather service to fetch the conditions, which are saved with the match on your phone. Your location is not stored by us.',
    'Camera. The camera is used only to scan a coach-link code. No image is stored or sent.',
    'Email. If you write to us, we keep the correspondence to answer you.',
  ] },
  { id: 'website', title: 'This website', paragraphs: [
    'rallymetrica.com is a static site served by GitHub Pages. It sets no cookies. GitHub may record standard request logs (IP address, browser, pages requested) to operate the service.',
    'We use Cloudflare Web Analytics to measure page views, referral sources, countries, browser and device types, and page-load performance. Cloudflare states that this service uses no analytics cookies or local storage and does not fingerprint visitors. Website analytics does not include the players, matches or points stored in the app.',
  ] },
  { id: 'sharing', title: 'Who else sees your data', paragraphs: [
    'Only the people you choose. A linked coach receives read-only copies of the matches and sessions you record while the link is active; a coach’s students see nothing of the coach’s other students. We do not sell personal data and we do not share it with advertisers. The service providers above (Apple, Google, RevenueCat, the weather service, GitHub and Cloudflare) process only what their role needs.',
  ] },
  { id: 'delete', title: 'Deleting your data', paragraphs: [
    'Everything you record in Rallymetrica is on your device, so deletion is yours to do and takes effect at once. In the app: Settings → Data → Clear all data. This removes every player, match, practice session, point, pattern, note and the coach link from the device. Deleting the app does the same. Your subscription is unaffected; manage or cancel it with Apple or Google.',
    'What is kept: none of your match data. We never receive it, so there is no copy of it to delete on request. The delivery relay holds only sealed envelopes it cannot read, removed when retrieved or after thirty days, and a device record that is removed when the link ends or after thirty days without activity. If you have used a free detailed match, our server keeps the hashed device identifier and count described above. Clear all data and deleting the app do not remove it, because its purpose is to survive them. It is not connected to a name, an account or your Rallymetrica ID, so we cannot look up an individual record. A linked coach’s copies of your matches, practice sessions and patterns are removed from the coach’s phone when you unlink (below).',
    `If you believe we hold something about you after that, write to ${supportEmail} and we will look.`,
  ] },
  { id: 'unlink', title: 'Unlinking', paragraphs: [
    'Unlinking stops new sharing immediately on your phone. Once the coach’s app is online and receives the unlink, it removes the matches, practice sessions and patterns it received through that link. The coach’s roster entry for you stays on the coach’s phone: your name and the profile details on your card, such as handedness and ratings. Your original recordings stay on your phone. Unlinking does not remove matches the coach recorded independently or copies already exported or shared outside the link. Pausing a link stops new updates and keeps received copies.',
  ] },
  { id: 'children', title: 'Children', paragraphs: [
    'Rallymetrica is not directed at children under 13 and does not knowingly collect personal information from them. Coaches and parents who record a junior player’s matches are responsible for having the appropriate consent. A player name can be anything — initials are fine.',
  ] },
  { id: 'rights', title: 'Your rights', paragraphs: [
    `Wherever you live, you can see everything you have recorded in Rallymetrica by opening the app: it is all on your phone. You can export it as a backup, correct it, or delete it at any time. If you have a question or a complaint about how we handle data, contact ${supportEmail}; residents of the EU, the UK and California also have the right to complain to their local data-protection authority.`,
  ] },
  { id: 'changes', title: 'Changes to this policy', paragraphs: [
    'If we change what the app sends or stores, we will update this page and the effective date above, and the app will point to the new version. Continued use after a change means you accept it.',
  ] },
  { id: 'contact', title: 'Contact', paragraphs: [`${companyName} · ${supportEmail}`] },
]

export default function Privacy() {
  return <LegalDoc eyebrow="Privacy" title="Your data stays yours." updated="November 18, 2026" intro="Rallymetrica was built so that we do not have to be trusted with your matches: they live on your phone, and anything you share with a coach is encrypted before it leaves. This page says exactly what the app and this website do with data, and what they do not." sections={sections} />
}
