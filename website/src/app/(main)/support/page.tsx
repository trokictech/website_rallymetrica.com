import { type Metadata } from 'next'
import { LegalDoc, type LegalSection } from '@/components/LegalDoc'
import { companyName, supportEmail } from '@/lib/site'

export const metadata: Metadata = { title: 'Support', description: 'Help with Rallymetrica: getting started, plans and purchases, practice sessions, the coach link, your data, and how to reach us.' }

const sections: LegalSection[] = [
  { id: 'contact', title: 'Reach us', paragraphs: [
    `Write to ${supportEmail}. Say which iPhone or iPad and iOS version you use, which plan you are on (gear → Plan), and what you expected against what happened. A screenshot helps. We answer within two business days.`,
  ] },
  { id: 'start', title: 'Getting started', bullets: [
    'First start: enter a first name, then choose Continue free or a plan. Nothing else is asked; there is no account.',
    'Home shows live and recent matches and sessions. The tabs below are Players, Sessions — with its Matches, Rally and Serve pages — Stats and, on Coach plans, Patterns. The gear at the top right opens Settings.',
    'New match: on Sessions → Matches tap + New match, choose the two players, the rules and the tracking level — Score, Counter or Detailed — then Start match. The Learn section has a step-by-step guide for each.',
    'New session: on Sessions → Rally tap + New rally, on Sessions → Serve tap + New serve. Sessions are on the Player plan and up; on Free they are shown locked.',
    'On iPad the list sits on the left and the report on the right; the live court keeps the score beside it.',
    'To see every screen populated before you record anything: gear → Data → Load demo season.',
  ] },
  { id: 'plans', title: 'Plans and purchases', bullets: [
    'Free scores every match and includes two Detailed matches to try. Player adds Detailed tracking on every match, rally and serve sessions, the full stats engine and a coach link. Coach (up to 5 students) and Academy (up to 25) add the roster, play patterns and per-student notifications.',
    'Every subscription starts with a 7-day free trial and is billed through your Apple ID. Cancel any time in iPhone Settings → your name → Subscriptions; the plan runs to the end of the period you paid for.',
    'Changing plan: gear → Plan. Upgrades take effect at once; a downgrade applies when the current period ends.',
    'Reinstalled or new phone: gear → Plan → Restore purchases. Your plan is tied to your Apple ID, so nothing is lost; your match data is restored separately from a backup (below).',
    'Refunds are handled by Apple: reportaproblem.apple.com.',
  ] },
  { id: 'sessions', title: 'Practice sessions', bullets: [
    'A rally session is a game with a score: first to 11, 15 or 21 in one to five blocks, timed, or open. Each rally starts with a serve or a feed, as set in the format; the board’s dot marks who starts next. One rally is one point, so the report is the match report — without the pressure page or the situation and score cuts, which belong to a tennis score.',
    'A co-op session counts the balls two players keep in play. Any miss ends the run; the run is recorded with its length and how it ended. Its report is RUNS and ENDINGS.',
    'A serve session is one server and blocks of 5, 10 or 20 — pairs (a second serve follows a fault), first serves only, or second serves only. Pick the side and the target on the court for each block, tap where the serve lands (the net line is a net fault). The two numbers are IN % and ON TARGET %; the block closes on its count.',
    'Sessions are not charted on Stats. A serve session’s TREND page and a co-op’s RUNS page carry their own trend.',
    'A session cannot change its format once started; stopping early is the menu’s End session.',
  ] },
  { id: 'coach', title: 'The coach link', bullets: [
    'Linking: the player opens gear → Coach link to show a code; the coach opens gear → Students → Add student and scans it; the player taps Link to confirm. Both phones need to be online.',
    'After that the coach receives the player’s matches and sessions live, point by point. Everything travels end-to-end encrypted between the two phones; our relay cannot read it.',
    'Live scores not arriving: check the coach’s gear → Notifications (and the per-student setting under gear → Students), that notifications are allowed for Rallymetrica in iPhone Settings, and that the player’s phone has a connection — points are queued and sent when it does. For a practice session the coach is told at its start and end only.',
    'Unlinking: the player taps gear → Coach link → Unlink; the coach taps the student → Remove. The coach’s copies of the player’s matches are removed; the player keeps everything.',
  ] },
  { id: 'data', title: 'Your data', bullets: [
    'Matches and sessions live on your phone, not on our servers. Deleting the app deletes them.',
    'Backup: gear → Data → Back up to a file writes one Rallymetrica document you can keep in Files, iCloud Drive or anywhere you choose. Restore it on any phone or iPad with gear → Data → Restore from backup.',
    'Start over: gear → Data → Clear all data removes every player, match and session from the phone. Your subscription is unaffected.',
    'What leaves the phone and why is set out in full in the privacy policy.',
  ] },
  { id: 'problems', title: 'Something is wrong', bullets: [
    'Purchases are not available: make sure you are signed in to the App Store on the phone and have a connection, then try again. On a TestFlight build, purchases are test purchases and are never charged.',
    'The app shows the wrong plan after a purchase: gear → Plan → Restore purchases.',
    'A match looks mirrored or a point is wrong: open the match → Timeline, tap the point and correct it; the report recalculates.',
    'Anything else: write to us with the steps that led there. If the app has crashed, iPhone Settings → Privacy & Security → Analytics & Improvements → Analytics Data holds a log named Rallymetrica you can attach.',
  ] },
  { id: 'about', title: 'About', paragraphs: [`Rallymetrica is made by ${companyName} in Atlanta, Georgia. Privacy policy and terms of use are linked below.`] },
]

export default function Support() {
  return <LegalDoc eyebrow="Support" title="Here to help." updated="October 14, 2026" intro="Most questions are answered below or in the Learn guides. For anything else, write to us; a real person reads every message." sections={sections} />
}
