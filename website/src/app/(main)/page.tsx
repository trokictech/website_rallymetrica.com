import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { CoachFeatures } from '@/components/CoachFeatures'
import { PatternFeatures } from '@/components/PatternFeatures'
import { Pricing } from '@/components/Pricing'
import { PrivacyFeatures } from '@/components/PrivacyFeatures'
import { StatsEngine } from '@/components/StatsEngine'
import { LearnPreview } from '@/components/LearnPreview'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'

export default function Home() {
  return <><Hero /><PrimaryFeatures /><CoachFeatures /><PatternFeatures /><Pricing /><PrivacyFeatures /><StatsEngine /><LearnPreview /><CallToAction /><Faqs /></>
}
